$layersPath = "c:\Users\pandr\OneDrive\Documentos2\visoramb\layers\layers.js"
$layersBackupPath = "c:\Users\pandr\OneDrive\Documentos2\visoramb\layers\layers.js.bak"

$content = Get-Content $layersPath -Raw
# backup already done in previous attempt, no need to overwrite if we want original, but whatever

$lines = $content -split "`r`n"
if ($lines.Length -eq 1) {
    $lines = $content -split "`n"
}

$fixedLines = @()

foreach ($line in $lines) {
    if ($line -match "\[\.\.\.\]") {
        if ($line -match "var features_([a-zA-Z0-9_]+) =") {
            $layerName = $Matches[1]
            $line = $line -replace "json_.*\[\.\.\.\]", "json_$layerName, "
        }
        elseif ($line -match "title: '") {
            $line = $line -replace "\[\.\.\.\]", ""
            if (-not $line.EndsWith("',") -and -not $line.EndsWith("'")) {
                $line += "',"
            }
        }
        elseif ($line -match "layers: \[") {
            $line = $line -replace ",[a-zA-Z0-9_]*\[\.\.\.\]", "]"
        }
        elseif ($line -match "\.setVisible\(") {
            $line = $line -replace "lyr_[a-zA-Z0-9_]*\[\.\.\.\]", ""
        }
        elseif (($line -match "\.set\('fieldAliases'") -or ($line -match "\.set\('fieldImages'") -or ($line -match "\.set\('fieldLabels'")) {
            $lastComma = $line.LastIndexOf(',')
            if ($lastComma -gt 0) {
                $line = $line.Substring(0, $lastComma) + "});"
            } else {
                $line = $line -replace "\[\.\.\.\]", "});"
            }
        }
        else {
            $line = $line -replace "\[\.\.\.\]", ""
        }
    }
    $fixedLines += $line
}

$fixedLines -join "`r`n" | Set-Content $layersPath
Write-Host "Fixed layers.js"
