# Node.js 20 安装脚本
# 请以管理员身份运行此脚本

Write-Host "正在检查 Node.js 安装文件..." -ForegroundColor Yellow

# 检查常见位置的安装文件
$installerPaths = @(
    "$env:USERPROFILE\Downloads\node-v20.18.0-x64.msi",
    "D:\111work\node-v20.18.0-x64.msi",
    "$PSScriptRoot\node-v20.18.0-x64.msi"
)

$installerPath = $null
foreach ($path in $installerPaths) {
    if (Test-Path $path) {
        $installerPath = $path
        Write-Host "找到安装文件: $path" -ForegroundColor Green
        break
    }
}

if (-not $installerPath) {
    Write-Host "未找到安装文件。请先下载 node-v20.18.0-x64.msi" -ForegroundColor Red
    Write-Host "下载地址: https://nodejs.org/dist/v20.18.0/node-v20.18.0-x64.msi" -ForegroundColor Cyan
    exit 1
}

Write-Host "`n开始安装 Node.js 20.18.0..." -ForegroundColor Yellow
Write-Host "安装文件: $installerPath" -ForegroundColor Cyan

# 静默安装
$process = Start-Process msiexec -ArgumentList "/i `"$installerPath`" /quiet /norestart" -Wait -PassThru

if ($process.ExitCode -eq 0) {
    Write-Host "`n安装完成！" -ForegroundColor Green
    Write-Host "`n请关闭并重新打开 PowerShell 窗口，然后运行以下命令验证:" -ForegroundColor Yellow
    Write-Host "  node --version" -ForegroundColor Cyan
    Write-Host "  npm --version" -ForegroundColor Cyan
} else {
    Write-Host "`n安装失败，退出代码: $($process.ExitCode)" -ForegroundColor Red
    Write-Host "请尝试手动运行安装程序: $installerPath" -ForegroundColor Yellow
}
