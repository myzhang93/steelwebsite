# PowerShell script to clean Node.js registry entries
# Run as Administrator

Write-Host "Cleaning Node.js registry entries..." -ForegroundColor Yellow

# Check for Node.js registry keys
$regPaths = @(
    "HKLM:\SOFTWARE\Node.js",
    "HKLM:\SOFTWARE\WOW6432Node\Node.js",
    "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\Node.js",
    "HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\Node.js"
)

foreach ($path in $regPaths) {
    if (Test-Path $path) {
        Write-Host "Removing: $path" -ForegroundColor Green
        Remove-Item -Path $path -Recurse -Force -ErrorAction SilentlyContinue
    }
}

# Remove Node.js entries from Uninstall registry
Write-Host "`nChecking Uninstall registry for Node.js entries..." -ForegroundColor Yellow

$uninstallPaths = @(
    "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\",
    "HKLM:\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\"
)

foreach ($uninstallPath in $uninstallPaths) {
    $items = Get-ChildItem $uninstallPath -ErrorAction SilentlyContinue
    foreach ($item in $items) {
        $displayName = (Get-ItemProperty -Path $item.PSPath -Name DisplayName -ErrorAction SilentlyContinue).DisplayName
        if ($displayName -like "*Node.js*") {
            Write-Host "Found and removing: $displayName" -ForegroundColor Green
            Remove-Item -Path $item.PSPath -Recurse -Force -ErrorAction SilentlyContinue
        }
    }
}

Write-Host "`nRegistry cleanup completed!" -ForegroundColor Green
Write-Host "You can now try installing Node.js 20 again." -ForegroundColor Cyan

