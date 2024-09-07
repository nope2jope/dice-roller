@echo off
setlocal

REM Set this to your Aseprite path if not in PATH, otherwise leave empty
set AsepritePath="D:\SteamLibrary\steamapps\common\Aseprite\Aseprite.exe"

REM Loop through all .aseprite files in the current directory
for %%f in (*.aseprite) do (
    REM Export each file to .png at high quality
    %AsepritePath% -b "%%f" --scale 2 --save-as "%%~nf.png"
)

pause