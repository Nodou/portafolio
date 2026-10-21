$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$w = 512; $h = 512
$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'AntiAlias'
$g.TextRenderingHint = 'AntiAlias'

$col1 = [System.Drawing.ColorTranslator]::FromHtml('#6366F1')
$col2 = [System.Drawing.ColorTranslator]::FromHtml('#22D3EE')
$brush = New-Object System.Drawing.Drawing2D.LinearGradientBrush(
  (New-Object System.Drawing.Rectangle(0,0,$w,$h)), $col1, $col2, 45)
$g.FillRectangle($brush, 0, 0, $w, $h)

$white = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255,255,255,255))
$shadow = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(60,0,0,0))
# sombra del perfil
$g.FillEllipse($shadow, 176, 96, 160, 160)
$g.FillEllipse($shadow, 96, 268, 320, 240)
# perfil
$g.FillEllipse($white, 168, 88, 160, 160)
$g.FillEllipse($white, 88, 260, 320, 240)

# iniciales AR
$badge = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255,15,23,42))
$g.FillEllipse($badge, 176, 344, 160, 160)
$font = New-Object System.Drawing.Font('Segoe UI', 60, [System.Drawing.FontStyle]::Bold, [System.Drawing.GraphicsUnit]::Pixel)
$fmt = New-Object System.Drawing.StringFormat
$fmt.Alignment = 'Center'
$fmt.LineAlignment = 'Center'
$g.DrawString('AR', $font, $white, (New-Object System.Drawing.RectangleF(176,344,160,160)), $fmt)

$bmp.Save("$PWD\assets\img\perfil.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose(); $bmp.Dispose()
Write-Output 'Foto de perfil generada: assets\img\perfil.png'
