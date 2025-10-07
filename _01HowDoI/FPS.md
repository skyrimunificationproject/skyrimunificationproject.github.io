---
layout: default
title: How Do I Uncap the FPS?
nav_order: 4
has_children: false
description: How Do I Uncap the FPS?
---

Skyrim Unification Project is capped to 60 FPS by default. While <a href="https://www.nexusmods.com/skyrimspecialedition/mods/34705" target="_blank" rel="noopener noreferrer">SSE Display Tweaks</a> fixes the vanilla engine bug that tied Havok physics to the frame rate, it is generally less noticable for frame rate drops and causes fewer flickers on OLED displays if the max is capped at 60.

If you wish to remove this cap, you can edit SSEDisplayTweaks.ini in *SSE Display Tweaks - High Performance Configuration* and scroll down to the section:
```
## General framerate limit. Applies everywhere, except where more specific limits are set (see below).
#
#  Warning: This plugin replaces the built-in limiter by default, 'bLockFramerate' will have no effect. 
#           If you want to limit the framerate, you'll have to explicitly configure it here.
#
#  Bethesda default: 60
#
FramerateLimit = 60
```

You can change this to whatever you like, although Vsync is also applied and is recommended to be left on.  Setting this to 300 will effectively have no frame limiter other than the maximum refresh rate of your display.

