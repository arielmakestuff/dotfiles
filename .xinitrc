xhost +local:
# export QT_QPA_PLATFORMTHEME=qt5ct
# XDG_CURRENT_DESKTOP=
# export XDG_CURRENT_DESKTOP

# Set dpi
# xrandr --dpi 108
xrdb -merge ~/.config/xorg/Xresources
exec i3
# exec startkde
