# Automated GitHub Push Script for PranaVital
$env:PATH = "$env:LOCALAPPDATA\Programs\Git\cmd;$env:LOCALAPPDATA\Microsoft\WinGet\Packages\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\bin;$env:PATH"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "   PranaVital GitHub Deployment Utility   " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Verify Git Status
Write-Host "[1/3] Checking local Git repository..." -ForegroundColor Yellow
$status = git status --porcelain
if ($status) {
    git add .
    git commit -m "update: latest storefront changes"
}
Write-Host "Local repository is ready on branch 'main'." -ForegroundColor Green
Write-Host ""

# 2. Check GitHub Authentication
Write-Host "[2/3] Checking GitHub authentication status..." -ForegroundColor Yellow
$authCheck = gh auth status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "You are not logged in to GitHub yet." -ForegroundColor Red
    Write-Host "Launching 1-click browser login now..." -ForegroundColor Cyan
    Write-Host "Follow the prompt in your browser to authorize GitHub CLI." -ForegroundColor Gray
    Write-Host ""
    gh auth login --hostname github.com -p https -w
}

# 3. Create & Push to GitHub
Write-Host ""
Write-Host "[3/3] Creating GitHub repository and pushing codebase..." -ForegroundColor Yellow

$repoName = "pranavital-ecommerce"
gh repo create $repoName --public --source=. --remote=origin --push

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 SUCCESS! Your repository is now live on GitHub!" -ForegroundColor Green
    $repoUrl = gh repo view --json url -q .url
    Write-Host "Repository URL: $repoUrl" -ForegroundColor Cyan
} else {
    Write-Host "If the repository already exists on your GitHub account, running standard push:" -ForegroundColor Yellow
    git push -u origin main
}
