# 邮件配置说明

## 配置步骤

### 1. 创建 `.env.local` 文件

在项目根目录创建 `.env.local` 文件，添加以下配置：

```env
# QQ 邮箱 SMTP 配置
SMTP_HOST=smtp.qq.com
SMTP_PORT=587
SMTP_SECURE=false

# 发送邮件的 QQ 邮箱账号（需要开启 SMTP 服务）
SMTP_USER=your-qq-email@qq.com

# QQ 邮箱授权码（不是密码！）
# 获取方法：登录 QQ 邮箱 -> 设置 -> 账户 -> POP3/IMAP/SMTP服务 -> 开启服务并生成授权码
SMTP_PASS=your-qq-email-authorization-code

# 发件人显示名称（可选）
SMTP_FROM=your-qq-email@qq.com

# 收件人邮箱（表单提交后接收邮件的邮箱）
RECIPIENT_EMAIL=1011300569@qq.com
```

### 2. 获取 QQ 邮箱授权码

1. 登录你的 QQ 邮箱
2. 点击"设置" -> "账户"
3. 找到"POP3/IMAP/SMTP/Exchange/CardDAV/CalDAV服务"
4. 开启"POP3/SMTP服务"或"IMAP/SMTP服务"
5. 点击"生成授权码"
6. 将生成的授权码复制到 `.env.local` 文件的 `SMTP_PASS` 中

**注意：授权码不是你的 QQ 邮箱密码！**

### 3. 配置说明

- **SMTP_HOST**: QQ 邮箱的 SMTP 服务器地址（已默认设置为 `smtp.qq.com`）
- **SMTP_PORT**: 端口号，587（TLS）或 465（SSL）
- **SMTP_SECURE**: 如果使用 465 端口，设置为 `true`；使用 587 端口，设置为 `false`
- **SMTP_USER**: 用于发送邮件的 QQ 邮箱账号
- **SMTP_PASS**: QQ 邮箱的授权码
- **RECIPIENT_EMAIL**: 接收表单提交邮件的邮箱（已默认设置为 `1011300569@qq.com`）

### 4. 测试

配置完成后，重启开发服务器：

```bash
npm run dev
```

然后测试表单提交功能，如果配置正确，你应该会收到邮件。

### 5. 其他邮箱服务商配置

如果你使用其他邮箱服务商，可以修改以下配置：

**Gmail:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
```

**163 邮箱:**
```env
SMTP_HOST=smtp.163.com
SMTP_PORT=465
SMTP_SECURE=true
```

**Outlook:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
```

