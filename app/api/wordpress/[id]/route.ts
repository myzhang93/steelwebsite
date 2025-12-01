import { NextRequest, NextResponse } from 'next/server'

// WordPress 站点 URL
const WORDPRESS_URL = process.env.WORDPRESS_URL || 'https://lynsteel.com'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }

    console.log('Fetching WordPress content for ID:', id, 'from:', WORDPRESS_URL)

    // 从 WordPress REST API 获取内容
    const postsUrl = `${WORDPRESS_URL}/wp-json/wp/v2/posts/${id}?_embed`
    console.log('Trying posts URL:', postsUrl)
    
    let response: Response
    try {
      response = await fetch(postsUrl, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        // 添加缓存控制，但允许重新验证
        next: { revalidate: 60 }, // 60秒后重新验证
      })
    } catch (fetchError: any) {
      console.error('Fetch error:', fetchError)
      return NextResponse.json(
        { 
          error: 'Network error when fetching from WordPress',
          details: fetchError.message || 'Failed to connect to WordPress',
          wordpressUrl: WORDPRESS_URL,
          postId: id
        },
        { status: 500 }
      )
    }

    console.log('Posts response status:', response.status, response.statusText)

    if (!response.ok) {
      console.log('Posts not found, trying pages...')
      // 如果 posts 不存在，尝试获取 pages
      const pagesUrl = `${WORDPRESS_URL}/wp-json/wp/v2/pages/${id}?_embed`
      console.log('Trying pages URL:', pagesUrl)
      
      let pageResponse: Response
      try {
        pageResponse = await fetch(pagesUrl, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          next: { revalidate: 60 },
        })
      } catch (fetchError: any) {
        console.error('Page fetch error:', fetchError)
        return NextResponse.json(
          { 
            error: 'Network error when fetching page from WordPress',
            details: fetchError.message || 'Failed to connect to WordPress',
            wordpressUrl: WORDPRESS_URL,
            postId: id
          },
          { status: 500 }
        )
      }

      console.log('Pages response status:', pageResponse.status, pageResponse.statusText)

      if (!pageResponse.ok) {
        const errorText = await pageResponse.text()
        console.error('Page fetch error:', errorText)
        return NextResponse.json(
          { 
            error: 'Post or page not found',
            details: errorText,
            status: pageResponse.status
          },
          { status: 404 }
        )
      }

      const pageData = await pageResponse.json()
      console.log('Page data fetched successfully')
      return NextResponse.json(formatWordPressData(pageData))
    }

    const data = await response.json()
    console.log('Post data fetched successfully')
    return NextResponse.json(formatWordPressData(data))
  } catch (error: any) {
    console.error('Error fetching WordPress content:', error)
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      cause: error.cause
    })
    return NextResponse.json(
      { 
        error: 'Failed to fetch WordPress content',
        details: error.message || 'Unknown error',
        wordpressUrl: WORDPRESS_URL
      },
      { status: 500 }
    )
  }
}

// 格式化 WordPress 数据
function formatWordPressData(data: any) {
  // 提取特色图片
  let featuredImage = null
  if (data._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
    featuredImage = data._embedded['wp:featuredmedia'][0].source_url
  }

  // 提取内容中的图片
  const content = data.content?.rendered || ''
  const imageMatches = content.match(/<img[^>]+src="([^"]+)"/g)
  const images: string[] = []
  if (imageMatches) {
    imageMatches.forEach((match: string) => {
      const srcMatch = match.match(/src="([^"]+)"/)
      if (srcMatch && srcMatch[1]) {
        images.push(srcMatch[1])
      }
    })
  }

  // 提取纯文本内容（去除 HTML 标签）
  const textContent = content
    .replace(/<[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim()

  // 提取分类
  const categories: string[] = []
  if (data._embedded?.['wp:term']?.[0]) {
    data._embedded['wp:term'][0].forEach((term: any) => {
      if (term.taxonomy === 'category') {
        categories.push(term.name)
      }
    })
  }

  // 提取标签
  const tags: string[] = []
  if (data._embedded?.['wp:term']?.[1]) {
    data._embedded['wp:term'][1].forEach((term: any) => {
      if (term.taxonomy === 'post_tag') {
        tags.push(term.name)
      }
    })
  }

  // 提取作者
  let author = ''
  if (data._embedded?.author?.[0]) {
    author = data._embedded.author[0].name || ''
  }

  return {
    id: data.id,
    title: data.title?.rendered || data.title || '',
    content: data.content?.rendered || '',
    excerpt: data.excerpt?.rendered || '',
    textContent: textContent,
    featuredImage: featuredImage,
    images: images,
    date: data.date,
    modified: data.modified,
    link: data.link,
    author: author,
    categories: categories,
    tags: tags,
  }
}

