import nodemailer from 'nodemailer'

// 创建邮件传输器
const createTransporter = () => {
  // 默认使用 QQ 邮箱配置
  const host = process.env.SMTP_HOST || 'smtp.qq.com'
  const port = parseInt(process.env.SMTP_PORT || '587')
  const secure = process.env.SMTP_SECURE === 'true' || port === 465
  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_PASS
  
  // 检查必要的环境变量
  if (!user || !pass) {
    throw new Error('SMTP credentials are missing. Please check SMTP_USER and SMTP_PASS environment variables.')
  }
  
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure, // true for 465, false for other ports
    auth: {
      user,
      pass, // QQ 邮箱需要使用授权码，不是密码
    },
    // 添加连接超时设置
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,
  })
  
  return transporter
}

// 发送表单提交通知邮件
export async function sendQuoteEmail(data: {
  name: string
  phone?: string
  email: string
  message?: string
  attachment?: {
    filename: string
    content: Buffer
    contentType?: string
  }
}) {
  const transporter = createTransporter()

  // 收件人邮箱（从环境变量获取，如果没有则使用默认值）
  const recipientEmail = process.env.RECIPIENT_EMAIL || '1011300569@qq.com'

  // 构建附件数组
  // nodemailer 会自动处理 Buffer 的编码
  const attachments = data.attachment ? [{
    filename: data.attachment.filename,
    content: data.attachment.content,
    contentType: data.attachment.contentType,
    // 确保附件可以正常下载和打开
    contentDisposition: 'attachment',
    // 对于中文文件名，使用 RFC 2047 编码
    // nodemailer 会自动处理，但我们可以确保文件名正确
  }] : []

  // 邮件内容
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: recipientEmail,
    replyTo: data.email, // 回复地址设置为提交者的邮箱
    subject: `New Quote Request from ${data.name}${data.attachment ? ' (with attachment)' : ''}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1f2937; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
          New Quote Request
        </h2>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
          
          <p style="margin: 10px 0;">
            <strong style="color: #1f2937;">Name:</strong> 
            <span style="color: #4b5563;">${data.name}</span>
          </p>
          
          <p style="margin: 10px 0;">
            <strong style="color: #1f2937;">Email:</strong> 
            <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a>
          </p>
          
          ${data.phone ? `
          <p style="margin: 10px 0;">
            <strong style="color: #1f2937;">Phone:</strong> 
            <a href="tel:${data.phone}" style="color: #4b5563; text-decoration: none;">${data.phone}</a>
          </p>
          ` : ''}
        </div>
        
        ${data.message ? `
        <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">Message</h3>
          <p style="color: #4b5563; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
        </div>
        ` : ''}
        
        ${data.attachment ? `
        <div style="background-color: #eff6ff; padding: 15px; border: 1px solid #3b82f6; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #374151; margin-top: 0;">📎 Attachment</h3>
          <p style="color: #4b5563; margin: 5px 0;">
            <strong>File:</strong> ${data.attachment.filename}
          </p>
          <p style="color: #6b7280; font-size: 12px; margin: 5px 0;">
            The file is attached to this email.
          </p>
        </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 12px;">
          <p>This email was sent from the contact form on your website.</p>
          <p>Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })}</p>
        </div>
      </div>
    `,
    text: `
New Quote Request

Contact Information:
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}

${data.message ? `Message:\n${data.message}` : ''}

${data.attachment ? `\nAttachment: ${data.attachment.filename}\n` : ''}

---
This email was sent from the contact form on your website.
Submitted at: ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Shanghai' })}
    `.trim(),
    attachments,
  }

  try {
    // 记录附件信息用于调试
    if (data.attachment) {
      console.log('Sending email with attachment:', {
        filename: data.attachment.filename,
        contentType: data.attachment.contentType,
        size: data.attachment.content.length,
      })
    }
    
    // 验证 transporter 连接（可选，如果验证失败会抛出错误）
    // 注释掉验证以避免连接超时导致提交失败
    // await transporter.verify()
    
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent successfully:', info.messageId)
    console.log('Email response:', {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
    })
    return { success: true, messageId: info.messageId }
  } catch (error: any) {
    console.error('Error sending email:', error)
    console.error('Error details:', {
      message: error?.message,
      code: error?.code,
      command: error?.command,
      responseCode: error?.responseCode,
      response: error?.response,
      stack: error?.stack,
    })
    throw new Error(`Failed to send email: ${error?.message || 'Unknown error'}`)
  }
}


