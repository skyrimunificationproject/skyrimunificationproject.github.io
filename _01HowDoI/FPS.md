---
layout: default
title: How Do I Uncap the FPS?
nav_order: 4
has_children: false
description: How Do I Uncap the FPS?
---

Skyrim Unification Project is capped to 61 FPS by default. While <a href="https://www.nexusmods.com/skyrimspecialedition/mods/34705" target="_blank" rel="noopener noreferrer">SSE Display Tweaks</a> fixes the vanilla engine bug that tied Havok physics to the frame rate, some mods may use their own custom code that still assumes a ~60 FPS limit. Running the game above these anticipated frame rates can cause issues with their Havok-based interactions. Additionally, the modlist includes some mods that run calculations based on a target FPS, which has been set to Skyrim Unification Project's default of 61 FPS.  

