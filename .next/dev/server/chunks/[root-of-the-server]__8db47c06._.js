module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/app/api/wordpress/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// WordPress 站点 URL
const WORDPRESS_URL = process.env.WORDPRESS_URL || 'https://lynsteel.com';
async function GET(request, { params }) {
    try {
        const { id } = await params;
        if (!id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Post ID is required'
            }, {
                status: 400
            });
        }
        console.log('Fetching WordPress content for ID:', id, 'from:', WORDPRESS_URL);
        // 尝试多种文章类型：自定义类型 zzproduct、posts、pages
        const postTypes = [
            'zzproduct',
            'posts',
            'pages'
        ];
        for (const postType of postTypes){
            const url = `${WORDPRESS_URL}/wp-json/wp/v2/${postType}/${id}?_embed`;
            console.log(`Trying ${postType} URL:`, url);
            try {
                const response = await fetch(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    next: {
                        revalidate: 60
                    }
                });
                console.log(`${postType} response status:`, response.status, response.statusText);
                if (response.ok) {
                    const data = await response.json();
                    console.log(`${postType} data fetched successfully`);
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(formatWordPressData(data));
                } else {
                    // 如果不是最后一个类型，继续尝试下一个
                    if (postType !== postTypes[postTypes.length - 1]) {
                        console.log(`${postType} not found, trying next type...`);
                        continue;
                    }
                }
            } catch (fetchError) {
                console.error(`Error fetching ${postType}:`, fetchError);
                // 如果是最后一个类型，返回网络错误
                if (postType === postTypes[postTypes.length - 1]) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                        error: 'Network error when fetching from WordPress',
                        details: fetchError.message || 'Failed to connect to WordPress',
                        wordpressUrl: WORDPRESS_URL,
                        postId: id
                    }, {
                        status: 500
                    });
                }
                continue;
            }
        }
        // 如果所有类型都失败了
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Post or page not found',
            details: 'Unable to find content in any post type (zzproduct, posts, pages)',
            wordpressUrl: WORDPRESS_URL,
            postId: id
        }, {
            status: 404
        });
    } catch (error) {
        console.error('Error fetching WordPress content:', error);
        console.error('Error details:', {
            message: error.message,
            stack: error.stack,
            cause: error.cause
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch WordPress content',
            details: error.message || 'Unknown error',
            wordpressUrl: WORDPRESS_URL
        }, {
            status: 500
        });
    }
}
// 格式化 WordPress 数据
function formatWordPressData(data) {
    // 提取特色图片
    let featuredImage = null;
    if (data._embedded?.['wp:featuredmedia']?.[0]?.source_url) {
        featuredImage = data._embedded['wp:featuredmedia'][0].source_url;
    }
    // 提取内容中的图片
    const content = data.content?.rendered || '';
    const imageMatches = content.match(/<img[^>]+src="([^"]+)"/g);
    const images = [];
    if (imageMatches) {
        imageMatches.forEach((match)=>{
            const srcMatch = match.match(/src="([^"]+)"/);
            if (srcMatch && srcMatch[1]) {
                images.push(srcMatch[1]);
            }
        });
    }
    // 提取纯文本内容（去除 HTML 标签）
    const textContent = content.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').trim();
    // 提取分类
    const categories = [];
    if (data._embedded?.['wp:term']?.[0]) {
        data._embedded['wp:term'][0].forEach((term)=>{
            if (term.taxonomy === 'category') {
                categories.push(term.name);
            }
        });
    }
    // 提取标签
    const tags = [];
    if (data._embedded?.['wp:term']?.[1]) {
        data._embedded['wp:term'][1].forEach((term)=>{
            if (term.taxonomy === 'post_tag') {
                tags.push(term.name);
            }
        });
    }
    // 提取作者
    let author = '';
    if (data._embedded?.author?.[0]) {
        author = data._embedded.author[0].name || '';
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
        tags: tags
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__8db47c06._.js.map