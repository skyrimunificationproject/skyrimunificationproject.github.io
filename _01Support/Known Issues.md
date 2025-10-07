---
layout: home
title: Known Issues & Workarounds
nav_order: 4
description: Known Issues & Workarounds
---

![image](/assets/images/banner.png)

---

# Known Issues & Workarounds

## Table of contents
{: .no_toc }
<details markdown="block">
  <summary>
     Expand to view
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

# My spell tooltips say they do zero damage.

This is due to Books of Power scaling the spells as you train with them.  In the first few uses, it may do literally zero damage or effect but as you train it will rise to 100% of its expected value.

# Shouting at the Greybeards doesn't work.

Due to a mod preventing friendly fire from triggering, you need to crouch to enter stealth before shouting.

# Elisif's Court are all standing around in the throne room.

This is a vanilla issue from the Bards College questline.  You need to progress the quest so Elisif can stop waiting for you to deliver an item.

# The question mark in subtitles looks weird.

This is a standard issue with Futura, the font being used for most of the UI.  This is normal, but has been described as "A backwards S pogo-sticking on a period."  Your game is not broken.


# Game is zoomed into the top left corner.

Windows Scaling can prevent games from displaying correctly, and will often result in the game appearing "zoomed in". To fix this, find the `SkyrimSE.exe` located in your `[Path to Modlist]\Stock Game` folder and follow the steps in the images below:

![](https://raw.githubusercontent.com/Oghma-Infinium/Apostasy/main/images/skyrim-scaling.png)


# Errors in Mod Organizer 2

## Form 43 (or lower) plugin detected

This is an issue that occurs when Wabbajack does not properly install a mod in the list. The quickest way to solve this issue is to reinstall the modlist through Wabbajack.

Unless you have deleted the entire modlist and all downloads, reinstalling the modlist will take much less time than your first time install.

You can follow the <a href="/01HowDoI/UpdatingModlist/" target="_blank" rel="noopener noreferrer">Modlist Update guide</a> to reinstall the list. If the error persists after a reinstall, make sure to do a Clean Install.

## A DLL Plugin has failed to load correctly

This is an issue that occurs when Wabbajack does not properly install a mod in the list. The quickest way to solve this issue is to reinstall the modlist through Wabbajack.

Unless you have deleted the entire modlist and all downloads, reinstalling the modlist will take much less time than your first time install.

You can follow the <a href="/01HowDoI/UpdatingModlist/" target="_blank" rel="noopener noreferrer">Modlist Update guide</a> to reinstall the list. If the error persists after reinstalling and relaunching the list, make sure to do a Clean Install. Relaunching the list is necessary as the SKSE log will not regenerate to say whether or not the DLL is fixed unless the game is relaunched again.

## There are files in your Overwrite mod directory

This issue is meaningless and can be safely ignored. Any files generated at runtime (e.g., RaceMenu presets, Screenshots, ini configurations that have not already been set) will be output into the `Overwrite` folder within Skyrim Unification Project's MO2 directory. Be sure to go through the folders and files in here to backup things you want to keep.


# Cannot launch program / Cannot Start

If you get a popup when attempting to launch Skyrim Unification Project through Mod Organizer 2 there are two potential solutions:

 1. Add <a href="/01Support/Install%20Issues/#antivirus-reports-a-virus-with-wabbajack-or-the-modlist" target="_blank" rel="noopener noreferrer">Anti-virus exclusions</a> to Skyrim Unification Project's Mod Organizer 2.
 2. Ensure that the file path is less than 260 characters.


# Engine Fixes Warnings

## "A total of {} textures failed to load in this session.

This is typically an error caused by file corruption that occurs during a Wabbajack installation. Please submit your `EngineFixes.log` in the **#help-desk** channel of the <a href="https://discord.gg/UAhtyb2XuK" target="_blank" rel="noopener noreferrer">Skyrim Unification Project discord</a> server so that the support staff can help you resolve this error.

Your `EngineFixes.log` should be located at `C:\Users\[user_name]\Documents\My Games\Skyrim Special Edition\SKSE\EngineFixes.log`.

## A precomputed path had issues

This occurs due to broken navmesh. While there should be none in the list, it is possible that it slipped through the QA/QC process. If you get this error, please submit your `EngineFixes.log` in the **#help-desk** channel of the <a href="https://discord.gg/UAhtyb2XuK" target="_blank" rel="noopener noreferrer">Skyrim Unification Project discord</a> server so that the support staff is aware of this error and it can be solved.

Your `EngineFixes.log` should be located at `C:\Users\[user_name]\Documents\My Games\Skyrim Special Edition\SKSE\EngineFixes.log`.