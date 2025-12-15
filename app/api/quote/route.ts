import { NextRequest, NextResponse } from 'next/server'
import { sendQuoteEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    // 处理 FormData（支持文件上传）
    const formData = await request.formData()
    
    const name = formData.get("Field19") as string
    const phone = formData.get("Field12") as string | null
    const email = formData.get("Field23") as string
    const message = formData.get("Field21") as string | null
    const file = formData.get("Field9") as File | null

    // 验证必填字段
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      )
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // 处理文件（如果有）
    let fileBuffer: Buffer | null = null
    let fileName: string | null = null
    let fileType: string | null = null

    if (file && file.size > 0) {
      // 检查文件大小（限制为 50MB）
      const maxSize = 50 * 1024 * 1024 // 50MB
      if (file.size > maxSize) {
        return NextResponse.json(
          { error: 'File size exceeds 50MB limit' },
          { status: 400 }
        )
      }

      // 将文件转换为 Buffer
      const bytes = await file.arrayBuffer()
      fileBuffer = Buffer.from(bytes)
      fileName = file.name
      fileType = file.type || 'application/octet-stream'
      
      // 如果没有文件类型，根据扩展名推断
      if (!file.type && fileName) {
        const ext = fileName.split('.').pop()?.toLowerCase()
        const mimeTypes: Record<string, string> = {
          'jpg': 'image/jpeg',
          'jpeg': 'image/jpeg',
          'png': 'image/png',
          'gif': 'image/gif',
          'pdf': 'application/pdf',
          'doc': 'application/msword',
          'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'xls': 'application/vnd.ms-excel',
          'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        }
        if (ext && mimeTypes[ext]) {
          fileType = mimeTypes[ext]
        }
      }
      
      console.log('File received:', {
        name: fileName,
        type: fileType,
        size: file.size,
        bufferLength: fileBuffer.length
      })
    }

    console.log('Form submission received:', {
      name,
      phone,
      email,
      message,
      hasFile: !!fileBuffer,
      fileName,
      timestamp: new Date().toISOString()
    })

    // 发送邮件通知（包含附件）- 使用异步非阻塞方式，不等待完成
    // 即使邮件发送失败，也不影响表单提交成功
    sendQuoteEmail({
      name,
      phone: phone || undefined,
      email,
      message: message || undefined,
      attachment: fileBuffer ? {
        filename: fileName!,
        content: fileBuffer,
        contentType: fileType || undefined,
      } : undefined,
    }).then(() => {
      console.log('Email notification sent successfully')
    }).catch((emailError: any) => {
      console.error('Failed to send email notification (non-blocking):', emailError)
      console.error('Email error details:', {
        message: emailError?.message,
        code: emailError?.code,
        stack: emailError?.stack,
      })
      // 邮件发送失败不影响表单提交，继续执行
    })

    // 始终返回成功，即使邮件发送失败
    return NextResponse.json(
      { 
        success: true,
        message: 'Form submitted successfully'
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error processing form submission:', error)
    console.error('Error details:', {
      message: error?.message,
      stack: error?.stack,
      name: error?.name,
      cause: error?.cause,
    })
    return NextResponse.json(
      { 
        error: 'Failed to process form submission',
        details: error?.message || 'Unknown error'
      },
      { status: 500 }
    )
  }
}

