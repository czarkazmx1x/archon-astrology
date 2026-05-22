$routes = '[{"screenId":"d123688fd8394480b9cd886941d79a8e","route":"/"},{"screenId":"97644a7b4e1e4c8aaf4a7c17dfee54d5","route":"/about"},{"screenId":"201f1dc98b854080bbc4074db2b9e1e9","route":"/page3"},{"screenId":"086e5285e94042ef8697d74f3407e2b9","route":"/page4"},{"screenId":"171743d5c02b4c43bb87e482fb45ad60","route":"/page5"}]'
$token = (gcloud auth print-access-token).Trim()
$env:STITCH_ACCESS_TOKEN = $token
$env:STITCH_PROJECT_ID = "backlinks-104a2"
$env:GOOGLE_CLOUD_PROJECT = "backlinks-104a2"

Write-Host "Connecting to Stitch API and downloading your design..." -ForegroundColor Yellow
npx -y @_davideast/stitch-mcp site -p 13396325736537532974 -r $routes -o C:\Users\jacos\.gemini\antigravity\scratch\my-stitch-site
Write-Host "Success! Overwrote my-stitch-site with your correct canvas screens." -ForegroundColor Green
