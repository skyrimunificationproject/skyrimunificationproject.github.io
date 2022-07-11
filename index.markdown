---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: "Skyrim Unification Project"
---

# Introduction

---

Placeholder text.

Note that many compatibility patches have already been included in the Conflict Resolution patches installed at the end of the guide.  If you see a FOMOD option that you think should be installed and we don't specify it, it's probably handled.

The version listed in each mod entry is the last 'main' version of the mod the guide was checked against.  Only the files listed are required.

---

# Guide Tags

---

![Core]

These mods are key elements of the modlist and should not be excluded without the ability to remove them from official patches and make your own patches.

---

![OptionalLg]

These mods can be excluded from the modlist without impacting conflict resolution or having other effects on the core gameplay beyond what is expected from that specific mod.

---

![VisualsLg]

These mods contain textures or meshes; the guide recommends 4K for architecture and bigger objects and creatures, and 2K for smaller things such as clutter or armor.  A higher or lower resolution can be used for any given texture based on your own system.  If a mod only has the Visuals tag, then it is implied to be Optional but is still recommended.

---

![BSA]

These mods should have their BSAs extracted when installing in MO2.  Mods that do not have this tag should not be extracted unless you know what you're doing with texture, mesh, and script overrides.

---

![CK]

These mods will need to be resaved in the Creation Kit to fix a variety of issues.

---

![CAO]

These mods will be packed or repacked with Cathedral Assets Optimizer to create a new BSA.

---

![FOMOD]

Instructions about what options to pick in a FOMOD when installing.  As a general rule, if an option is not specifically mentioned then it should be 'None' or *unchecked*.

---

![PostInstall]

Instructions on files to move or delete *within the mod* after installing into MO2. In rare cases, this will describe download instructions as well.

---

![Adventures]

The Adventures module is a set of optional add-ons to Core.  They contains Legacy of the Dragonborn, supporting quest and world content for it, the ability to alter the state of locations via Skyrim Realistic Conquering and Lawbringer, and some other curated mods.  All of the mods in Adventures that are not purely Visual must be installed within each section chosen, as there is a single set of conflict resolution patches covering all of them and their interaction with Core mods.

---

![Arch]

Project Arch is an optional add-on to Core and Adventures (both required).  It combines several popular city and town overhauls, notably but not limited to: JK's Skyrim, Expanded Towns and Cities, Blue Palace Terrace, Cities of the North Dawnstar, Cities of the North Falkreath, Rodryk's Dragon Bridge, Capital Windhelm Expansion, and Quaint Raven Rock.  All conflicts between these mods and the ones in Core and Adventures are resolved in a single set of conflict resolution patches, so all mods within this category are required.

---

![Addon]

Several addons are available in this section, with varying requirements on the other modules that will be stated in the description of each.  Several followers who are not included in Core can be found here, as well as enhancements to follower and trader npcs, and several optional additions to Arch including JK's interior mods.

---

# Prerequisites

---

The following modding tools should be installed into a directory that is not the base skyrim folder, nor a UAC-protected location such as Program Files (x86), the root of C:, or /Users/.  

---

# Skyrim Creation Kit

---

## Skyrim Creation Kit

[![mod]](https://bethesda.net/game/bethesda-launcher) | Version: `1.5.73.0` | Author: `Bethesda` | ![Core] |
Download: | Main Files - Bethesda.net Launcher

![PostInstall]
~~~
Run the launcher and sign in. Click on the grey Creation icon on
 the left and install it. Launch the Creation Kit, selecting YES
 when asked to extract the scripts. Close the program.
~~~

## SSE CreationKit Fixes

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/20061) | Version: `3.1` | Author: `Nukem` | ![Core] |
Download: | Main Files - CK64Fixes Release 3.2
| Main Files - FaceFXWrapper 0.3
| Main Files - [CreationKitCustom.ini](https://www.dropbox.com/s/2cnpzok3keb8v97/CreationKitCustom.ini?dl=0)

![PostInstall]
~~~
Manually extract the files into your Skyrim Special Edition folder.
~~~

---

# Skyrim Script Extender

---

## Skyrim Script Extender

[![mod]](http://skse.silverlock.org/) | Version: `2.0.20` | Author: `Ian Patterson, Stephen Abel, Paul Connelly, and Brendan Borthwick` | ![Core] |
Download: | Main Files - Current SE build 2.0.20 (runtime 1.5.97): 7z archive

![PostInstall]
~~~
Manually extract skse64_1_5_97.dll, skse64_loader.exe,
 skse64_steam_loader.dll into your Skyrim Special Edition folder.
 
The Scripts folder will be installed later with Mod Organizer 2.
~~~

---

# Tools

---

## Cathedral Assets Optimizer

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/23316) | Version: `5.3.13` | Author: `G_k` | ![Core] |
Download: | Main Files - Cathedral Assets Optimizer 64

![PostInstall]
~~~
Manually extract the folder into Modding\Skyrim\Tools\CAO
 (or to a folder where you will store your tools).

Add CAO to Windows Defender exclusions.
~~~

## FallrimTools - Script Cleaner

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/5031) | Version: `6.0.310` | Author: `Mark Fairchild` | ![Core] |
Download: | Main Files - FallrimTools 4.3.2

![PostInstall]
~~~
Manually extract the folder into Modding\Skyrim\Tools\Fallrim Tools 
 (or to a folder where you will store your tools).
~~~

## LOOT

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/1918) | Version: `0.18.3` | Author: `WrinklyNinja, et al` | ![Core] |
Download: | Main Files - LOOT v0.18.3 - Installer (64-Bit)

![PostInstall]
~~~
Run LOOT once (outside of Mod Organizer 2) and sort your load order.
~~~

## Nifskope

[![mod]](https://github.com/niftools/nifskope/releases) | Version: `2.0 Dev 7` | Author: `jonwd7` | ![Core] |
Download: | Assets - NifSkope_2_0_2018-02-22-x64.7z

![PostInstall]
~~~
Manually extract the folder into Modding\Skyrim\Tools\Nifskope
 (or to a folder where you will store your tools).
~~~

## Easy NPC

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/52313) | Version: `0.9.5` | Author: `focustense` | ![Core] |
Download: | EasyNPC

![PostInstall]
~~~
Manually extract the folder into Modding\Skyrim\Tools\EasyNPC
 (or to a folder where you will store your tools).
~~~

---

# xEdit

---

## xEdit

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/164) | Version: `4.0.4` | Author: `ElminsterAU and the xEdit team` | ![Core] |
Download: | Main Files - SSEEdit 4_0_4

![PostInstall]
~~~
Manually extract the folder into Modding\Skyrim\Tools\xEdit
 (or to a folder where you will store your tools).
~~~

## xEdit Scripts - Mator's xEdit Patching Framework

[![mod]](https://github.com/matortheeternal/mxpf) | Version: `1.1` | Author: `Mator` | ![Core] |
Download: | Code - Download ZIP

![PostInstall]
~~~
Manually extract the Edit Scripts folder into Modding\Skyrim\Tools\xEdit\.
~~~

## ESMifier Addon - Set unique NPCs persistent

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/40260) | Version: `0.1` | Author: `Blackread` | ![Core] |
Download: | Optional Files - ESMifyer and set unique NPCs Persistent combined

![PostInstall]
~~~
Manually extract ESMifier_with_persistent_unique_NPCs.pas 
  into Modding\Skyrim\Tools\xEdit\Edit Scripts\.
~~~

---

# Synthesis

---

## Synthesis

[![mod]](https://github.com/Mutagen-Modding/Synthesis/releases/) | Version: `latest` | Author: `Noggog` | ![Core] |
Download: | Assets - Synthesis.zip

![PostInstall]
~~~
Extract the contents into Modding\Skyrim\Tools\Synthesis\.
~~~

---

# Mod Organizer 2

---

## Mod Organizer 2

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/6194) | Version: `2.4.0` | Author: `Tannin - MO2 Team` | ![Core] |
Download: | Main Files - Mod Organizer 2 (Archive)

![PostInstall]
~~~
* Create a folder named 'Mod Organizer 2' in Modding\Skyrim\.
* Extract the contents of the archive into this folder.
* Run Mod Organizer 2, when 'Choose an Instance' appears, select 'Portable'.
* In the next pop-up, select 'Skyrim Special Edition'.
* Select 'No' when asked if you want a tutorial.
* When the last popup appears, 'Mod Organizer is not set up to handle
   NXM links. Associate it with NXM links?' select 'Yes'.
* Under 'Settings' go to 'Plugins', select 'BSA Extractor', and
   select 'true' for enabled.
* Click the second button from left (Install mod from archive).
    + Select the SKSE archive file downloaded earlier.
    + A window will pop up saying the content of <data> is invalid.
    + Expand the arrow by skse64_ and right-click the Data folder
        within it.  Select 'Set as data directory'.
    + Change the Name field to 'Skyrim Script Extender'. Click OK.	
~~~

---

# BethINI

---

## BethINI

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/4875) | Version: `3.6.1` | Author: `DoubleYou` | ![Core] |
Download: | Main Files - BethINI Standalone Version

![PostInstall]
~~~
Manually extract the folder into Modding\Skyrim\Tools\BethINI
 (or to a folder where you will store your tools).
 
Close Mod Organizer 2 and run BethINI.exe.
* Select the 'Setup' tab.
   + Make sure the 'Mod Organizer' path and 'INI Path' are correct.
* Select the 'Basic' tab.
   + Click the 'Default' button.
   + Click the 'High' button.
   + Click the 'BethINI Presets' button.
   + Check the 'Recommended Tweaks' option.
   + Set Antialiasing to 'None'.
   + Check the 'Windowed Mode' options.
   + Check the 'Borderless' option.
   + Uncheck the 'FXAA' option.
   + Uncheck the 'VSync' option.
   + Uncheck the 'Lock Frame Rate' option.
* Select the 'Gameplay' tab.
   + Set 'Over-Encumbered Reminder' to '60'.
   + Set '1st Person Arrow Tilt-up Angle' to '0.7'.
   + Set '3rd Person Arrow Tilt-up Angle' to '0.7'.
   + Set '1st Person Bolt Tilt-up Angle' to '0.7'.
   + Check the 'NPCs Use Ammo' option.
* Select the 'Interface' tab.
   + Uncheck the 'Bethesda Modding Platform' option.
* Select the 'Detail' tab.
   + Set 'Field of View' to '85'.
   + Set 'Particles' to '6000'.
   + Uncheck the 'Lens Flare' option.
   + Set 'Shadow Bias' to '0.47'.
   + Uncheck the 'Ambient Occlusion' option.
* Select the 'View Distance' tab.
   + Set 'Grass Fade' to '18000'.
   + Set 'Flickering Light' to '8192'.
   + Set 'uGridsToLoad' to '5'.
   + Set Distant Object Detail 'Preset' dropdown to 'BethINI High'
* Select the 'Visuals' tab.
   + Set 'Grass Density' to '60'.
   + Set 'Grass Diversity' to '15'.
   + Set 'Far-off Tree Distance' to '75000'.
   + Set 'Tree Detail Fade' dropdown to 'BethINI Ultra'
* Select the 'Basic' tab.
   + Click the 'Save and Exit' button.
   
* Relaunch Mod Organizer 2, click the second-to-right button and select
 'INI Editor'.
 
* Edit or add these lines for Skyrim.ini:

[Actor]
   fVisibleNavmeshMoveDist=12288.0000
   
[Animation] (add after [Actor])
   bAlwaysDriveRagdoll=1
   fWeaponChangeClearTime=0.25
   
[Camera]
   iHorseTransitionMillis=250
   
[Interface]
   fBookOpenTime=500
   uMaxCustomItemNameLength=64

[Landscape] (add after [Interface])
   fLandFriction=32

[MapMenu]
   bWorldMapNoSkyDepthBlur=1
   fMapLocalCursorPanSpeed=300
   fMapLookMouseSpeed=2.5
   fMapWorldZoomSpeed=8
   fMapZoomMouseSpeed=8
   fWorldMapDepthBlurScale=0
   fWorldMapMaximumDepthBlur=0
   fWorldMapNearDepthBlurScape=0
   uLockedObjectMapLOD=8

[SaveGame]
   bDisableAutoSave=1
   bAllowScriptedForceSave=0
   bAllowScriptedAutoSave=0
   iAutoSaveCount=5

* Edit or add these lines for SkyrimPrefs.ini:
[Display]
   fDynamicDOFBlurMultiplier=0.0000

[General]
   uLargeRefLODGridSize=11
~~~

---

# LOD Generation

---

## xLODGEN

[![mod]](https://stepmodifications.org/forum/topic/13451-xlodgen-terrain-lod-beta-86-for-fnv-fo3-fo4-fo4vr-tes5-sse-tes5vr-enderal-enderalse/) | Version: `Beta 86` | Author: `Sheson` | ![Core] |
Download: | xLODGen beta 94

![PostInstall]
~~~
Manually extract the folder into Modding\Skyrim\Tools\xLODGEN
 (or to a folder where you will store your tools).
 
Create a folder named 'SSELODGen_Output' in the root directory of the
 drive where you have installed Skyrim, i.e. H:\SSELODGen_Output\.
 
Add xLODGenx64.exe as an executable in Mod Organizer 2.
Add the following to the arguments field: 
   -sse -o:"Drive Letter:\SSELODGen_Output", i.e.
   -sse -o:"H:\SSELODGen_Output"
~~~

## DynDOLOD Standalone

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/68518) | Version: `Alpha-95` | Author: `Sheson` | ![Core] |
Download: | Miscellaneous Files - DynDOLOD 3.00

![PostInstall]
~~~
Create a folder named 'DynDOLOD' in the root directory of the drive
  where you have installed Skyrim, i.e. H:\DynDOLOD.
Manually extract the archive into DynDOLOD.

Add TexGenx64.exe and DynDOLODx64.exe as an executable in Mod Organizer 2.
For each add the following to the arguments field: -sse.
~~~

---

# ENB Series Binaries

---

## ENB Series Skyrim

[![mod]](http://enbdev.com/download_mod_tesskyrimse.htm) | Version: `0.475` | Author: `Boris Vorontsov` | ![Core] |
Download: | Main Files - v0.475 (or newest)

![PostInstall]
~~~
Manually extract d3dcompiler_46e.dll and d3d11.dll into your
  Skyrim Special Edition folder.
~~~

[mod]: https://img.shields.io/badge/Link-Download-006000?style=flat-square
[core]: https://img.shields.io/badge/Core-006000?style=for-the-badge
[cao]: https://img.shields.io/badge/CAO-important?style=for-the-badge
[ck]: https://img.shields.io/badge/CK-important?style=for-the-badge
[bsa]: https://img.shields.io/badge/BSA-critical?style=for-the-badge
[visuals]: https://img.shields.io/badge/Visuals-informational?style=flat-square
[visualsLg]: https://img.shields.io/badge/Visuals-informational?style=for-the-badge
[fomod]: https://img.shields.io/badge/FOMOD%20Instructions-informational?style=for-the-badge
[postinstall]: https://img.shields.io/badge/Post--Install%20Instructions-00B000?style=for-the-badge
[adventures]: https://img.shields.io/badge/Adventures-blueviolet?style=for-the-badge
[arch]: https://img.shields.io/badge/Arch-000060?style=for-the-badge
[addon]: https://img.shields.io/badge/Add--On-600060?style=for-the-badge
[optional]: https://img.shields.io/badge/Optional-AAAA00?style=flat-square
[optionalLg]: https://img.shields.io/badge/Optional-AAAA00?style=for-the-badge
