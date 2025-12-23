# Node.js 重新安装脚本 - 请以管理员身份运行
# 此脚本将卸载现有 Node.js 并安装 Node.js 20

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Node.js 20 重新安装脚本" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检查管理员权限
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
if (-not $isAdmin) {
    Write-Host "错误: 请以管理员身份运行此脚本！" -ForegroundColor Red
    Write-Host "右键点击 PowerShell，选择'以管理员身份运行'" -ForegroundColor Yellow
    pause
    exit 1
}

# 步骤 1: 卸载现有 Node.js
Write-Host "[1/3] 正在查找并卸载现有 Node.js..." -ForegroundColor Yellow

$nodeInstallations = @()

# 检查系统安装的 Node.js
$uninstallKeys = @(
    "HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*",
    "HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*"
)

foreach ($key in $uninstallKeys) {
    $apps = Get-ItemProperty $key -ErrorAction SilentlyContinue | Where-Object { $_.DisplayName -like "*Node.js*" }
    foreach ($app in $apps) {
        if ($app.UninstallString) {
            $nodeInstallations += $app
        }
    }
}

if ($nodeInstallations.Count -gt 0) {
    Write-Host "找到 $($nodeInstallations.Count) 个 Node.js 安装" -ForegroundColor Green
    foreach ($install in $nodeInstallations) {
        Write-Host "  - $($install.DisplayName) $($install.DisplayVersion)" -ForegroundColor Cyan
        
        $uninstallCmd = $install.UninstallString
        if ($uninstallCmd -match 'msiexec') {
            # 提取 ProductCode
            if ($uninstallCmd -match '\{([A-F0-9\-]+)\}') {
                $productCode = $matches[1]
                Write-Host "    正在卸载..." -ForegroundColor Yellow
                Start-Process msiexec -ArgumentList "/x {$productCode} /quiet /norestart" -Wait
                Write-Host "    卸载完成" -ForegroundColor Green
            }
        }
    }
} else {
    Write-Host "未找到已安装的 Node.js" -ForegroundColor Yellow
}

# 等待卸载完成
Start-Sleep -Seconds 3

# 步骤 2: 查找安装文件
Write-Host "`n[2/3] 正在查找 Node.js 20 安装文件..." -ForegroundColor Yellow

$installerPaths = @(
    "$env:USERPROFILE\Downloads\node-v20.18.0-x64.msi",
    "D:\111work\node-v20.18.0-x64.msi",
    "$PSScriptRoot\node-v20.18.0-x64.msi",
    ".\node-v20.18.0-x64.msi"
)

$installerPath = $null
foreach ($path in $installerPaths) {
    if (Test-Path $path) {
        $installerPath = Resolve-Path $path
        Write-Host "找到安装文件: $installerPath" -ForegroundColor Green
        break
    }
}

if (-not $installerPath) {
    Write-Host "未找到安装文件 node-v20.18.0-x64.msi" -ForegroundColor Red
    Write-Host ""
    Write-Host "请先下载 Node.js 20:" -ForegroundColor Yellow
    Write-Host "https://nodejs.org/dist/v20.18.0/node-v20.18.0-x64.msi" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "将下载的文件放在以下任一位置:" -ForegroundColor Yellow
    foreach ($path in $installerPaths) {
        Write-Host "  - $path" -ForegroundColor Gray
    }
    pause
    exit 1
}

# 步骤 3: 安装 Node.js 20
Write-Host "`n[3/3] 正在安装 Node.js 20.18.0..." -ForegroundColor Yellow
Write-Host "安装文件: $installerPath" -ForegroundColor Cyan

# 使用 /qn 静默安装（无界面）或 /qb 显示进度条
$process = Start-Process msiexec -ArgumentList "/i `"$installerPath`" /qb /norestart" -Wait -PassThru

if ($process.ExitCode -eq 0 -or $process.ExitCode -eq 3010) {
    Write-Host "`n========================================" -ForegroundColor Green
    Write-Host "安装完成！" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "重要: 请关闭所有 PowerShell 和终端窗口，然后重新打开！" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "重新打开后，运行以下命令验证:" -ForegroundColor Cyan
    Write-Host "  node --version" -ForegroundColor White
    Write-Host "  npm --version" -ForegroundColor White
    Write-Host ""
} else {
    Write-Host "`n安装失败，退出代码: $($process.ExitCode)" -ForegroundColor Red
    Write-Host "请尝试手动运行安装程序: $installerPath" -ForegroundColor Yellow
}

pause


