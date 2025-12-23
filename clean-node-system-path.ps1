# Clean Node.js paths from System PATH
# Run as Administrator

Write-Host "Cleaning System PATH environment variable..." -ForegroundColor Yellow

$systemPath = [Environment]::GetEnvironmentVariable("Path", "Machine")
$cleanPath = ($systemPath -split ';' | Where-Object { 
    $_ -notmatch 'node|NODE|PATH_NODE|NODE_PATH' -and $_ -ne '' 
}) -join ';'

try {
    [Environment]::SetEnvironmentVariable("Path", $cleanPath, "Machine")
    Write-Host "System PATH cleaned successfully!" -ForegroundColor Green
    
    $remaining = [Environment]::GetEnvironmentVariable("Path", "Machine") -split ';' | Where-Object { $_ -match 'node|NODE' }
    if ($remaining.Count -eq 0) {
        Write-Host "Verification passed: No Node.js paths found in System PATH" -ForegroundColor Green
    } else {
        Write-Host "Remaining paths:" -ForegroundColor Yellow
        $remaining | ForEach-Object { Write-Host "  - $_" }
    }
} catch {
    Write-Host "Error: Administrator privileges required to modify system environment variables" -ForegroundColor Red
    Write-Host "Please run PowerShell as Administrator and execute this script again" -ForegroundColor Yellow
}
