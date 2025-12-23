$systemPath = [Environment]::GetEnvironmentVariable("Path", "Machine")
$cleanPath = ($systemPath -split ';' | Where-Object { $_ -notmatch 'node|NODE|PATH_NODE|NODE_PATH' -and $_ -ne '' }) -join ';'
[Environment]::SetEnvironmentVariable("Path", $cleanPath, "Machine")
Write-Host "Done!" -ForegroundColor Green
$remaining = [Environment]::GetEnvironmentVariable("Path", "Machine") -split ';' | Where-Object { $_ -match 'node|NODE' }
if ($remaining.Count -eq 0) { Write-Host "All Node.js paths removed" -ForegroundColor Green } else { Write-Host "Remaining:"; $remaining }



