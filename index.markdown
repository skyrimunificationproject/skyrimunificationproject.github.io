---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: "Skyrim Unification Project"
category: "Intro"
---

# Introduction



Placeholder text.

Note that many compatibility patches have already been included in the Conflict Resolution patches installed at the end of the guide.  If you see a FOMOD option that you think should be installed and we don't specify it, it's probably handled.

The version listed in each mod entry is the last version of the 'main' plugin download that the guide was checked against.  Only the files listed are required.  If the mod maintains both SE and AE versions, this may not be the same as the version listed on Nexus/MO2.


# Guide Tags



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

![QAC]

These mods will be run through Quick Auto Clean during Final Steps.

---

![ESM]

These mods will have the ESMifier script run on them during Final Steps.

---

![ESL]

These mods will have a missing ESL flag added during Final Steps.

---

![ESL-C]

These mods will be compacted and then flagged ESL during Final Steps.  Note: This will break any patches that rely on the mod in question unless it is loaded in the same xEdit session.

---

![FOMOD]

Instructions about what options to pick in a FOMOD when installing.  As a general rule, if an option is not specifically mentioned then it should be 'None' or *unchecked*.

---

![PostInstall]

Instructions on files to move or delete *within the mod* after installing into MO2. In rare cases, this will describe download instructions as well.

---

![Adventures]

The Adventures module is a set of optional add-ons to Core.  They contains Legacy of the Dragonborn, supporting quest and world content for it, and some other curated mods.  All of the mods in Adventures that are not purely Visual must be installed within each section chosen, as there is a single set of conflict resolution patches covering all of them and their interaction with Core mods.

---

![Arch]

Project Arch is an optional add-on to Core and Adventures (both required).  It combines several popular city and town overhauls, notably but not limited to: JK's Skyrim, Expanded Towns and Cities, Blue Palace Terrace, Cities of the North Dawnstar, Cities of the North Falkreath, Rodryk's Dragon Bridge, Capital Windhelm Expansion, and Quaint Raven Rock.  All conflicts between these mods and the ones in Core and Adventures are resolved in a single set of conflict resolution patches, so all mods within this category are required.

---

![Addon]

Several addons are available in this section, with varying requirements on the other modules that will be stated in the description of each.


# Prerequisites



The following modding tools should be installed into a directory that is not the base skyrim folder, nor a UAC-protected location such as Program Files (x86), the root of C:, or /Users/.  



# Best Of Both Worlds Downgrader



Make sure Skyrim is updated to the latest version in Steam.

Download the "Best of Both" optional file from [Unofficial Skyrim Special Edition Downgrade Patcher](https://www.nexusmods.com/skyrimspecialedition/mods/57618) and run it.



# Skyrim Creation Kit



## Skyrim Creation Kit

Install the Creation Kit from Steam. (https://store.steampowered.com/app/1946180/Skyrim_Special_Edition_Creation_Kit/)
To manage it in your Steam library, select "TOOLS" in addition to "GAMES".

## Skyrim Creation Kit Downgrader

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/67096) | Version: `` | Author: `Halgari` | ![Core] ![Optional]
Download: | Main Files - Patcher.exe

Use this to downgrade your Creation Kit if you plan to edit Landscape records at any point.


## SSE CreationKit Fixes

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/20061) | Version: `3.2` | Author: `Nukem` | ![Core] |
Download: | Main Files - CK64Fixes Release 3.2
| Main Files - FaceFXWrapper 0.4
| Main Files - [CreationKitCustom.ini](https://www.dropbox.com/s/2cnpzok3keb8v97/CreationKitCustom.ini?dl=0)

![PostInstall]
~~~
Manually extract the files into your Skyrim Special Edition folder.
~~~

## SSE CreationKit Fixes Update

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/71371) | Version: `3.3` | Author: `Nukem and perchik71" | ![Core]
Download: | Old Files - CK64Fixes Release 3.3

![PostInstall]
~~~
Manually extract the files into your Skyrim Special Edition folder.

Note: Using 3.3 because there are some undesirable changes in 3.4 currently.
~~~



# Skyrim Script Extender



## Skyrim Script Extender

[![mod]](http://skse.silverlock.org/) | Version: `2.0.20` | Author: `Ian Patterson, Stephen Abel, Paul Connelly, and Brendan Borthwick` | ![Core] |
Download: | Main Files - Current SE build 2.0.20 (runtime 1.5.97): 7z archive

![PostInstall]
~~~
Manually extract skse64_1_5_97.dll, skse64_loader.exe,
 skse64_steam_loader.dll into your Skyrim Special Edition folder.
 
The Scripts folder will be installed later with Mod Organizer 2.
~~~



# Tools



## Cathedral Assets Optimizer

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/23316) | Version: `5.3.15` | Author: `G_k` | ![Core] |
Download: | Main Files - Cathedral Assets Optimizer 64
Download: | [CAO Profile](https://www.dropbox.com/s/rchbrsb2952sit4/Skyrim%20Unification%20Project%20-%20BSA.7z?dl=0)

![PostInstall]
~~~
Manually extract the folder into Modding\Skyrim\Tools\CAO
 (or to a folder where you will store your tools).
 
Add the downloaded profile to CAO\Profiles.

Add CAO to Windows Defender exclusions.
~~~

## FallrimTools - Script Cleaner

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/5031) | Version: `6.0.643` | Author: `Mark Fairchild` | ![Core] |
Download: | Main Files - Resaver 6.0.643

![PostInstall]
~~~
Manually extract the folder into Modding\Skyrim\Tools\Fallrim Tools 
 (or to a folder where you will store your tools).
~~~

## LOOT

[![mod]](https://www.nexusmods.com/site/mods/439) | Version: `0.19.1` | Author: `WrinklyNinja, et al` | ![Core] |
Download: | Main Files - LOOT v0.19.1 - Installer (64-Bit)

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

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/52313) | Version: `0.9.6` | Author: `focustense` | ![Core] |
Download: | EasyNPC

![PostInstall]
~~~
Manually extract the folder into Modding\Skyrim\Tools\EasyNPC
 (or to a folder where you will store your tools).
~~~



# xEdit



## xEdit

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/164) | Version: `4.1.5` | Author: `ElminsterAU and the xEdit team` | ![Core] |
Download: | Main Files - SSEEdit 4.1.5 EXPERIMENTAL

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
Manually extract the Edit Scripts folder into Modding\Skyrim\Tools\xEdit\
 (or where xEdit was installed)
~~~

## Persistentify Those Plugins

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/76750) | Version: `0.10.0` | Author: `FelesNoctis` | ![Core] |
Download: | Main Files - Persistentify Those Plugins (Functional Beta)

![PostInstall]
~~~
Manually extract 00_Persistentify_Those_Plugins.pas 
  into Modding\Skyrim\Tools\xEdit\Edit Scripts\.
  (or to a folder where you will store your tools)
~~~



# Synthesis



## Synthesis

[![mod]](https://github.com/Mutagen-Modding/Synthesis/releases/) | Version: `0.26` | Author: `Noggog` | ![Core] |
Download: | Assets - Synthesis.zip

![PostInstall]
~~~
Extract the contents into Modding\Skyrim\Tools\Synthesis\.
  (or to a folder where you will store your tools)
~~~



# Mod Organizer 2



## Mod Organizer 2

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/6194) | Version: `2.4.0` | Author: `Tannin - MO2 Team` | ![Core] |
Download: | Main Files - Mod Organizer 2 (Archive)

![PostInstall]
~~~
* Create a folder named 'Mod Organizer 2' in Modding\Skyrim\. (or a folder where you will store your tools).
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

## Adding Executables in MO2

Open the Modify Executables window by clicking the third from the right button.  Click the plus button to enter new entries.  Set up executables like below.
Use the "..." button to open a file selection dialogue and navigate to the specified exe file.

Title: SKSE
Binary: (skyrim location)\skse_64_loader.exe
Start In: (skyrim location)

Title: SSEEdit
Binary: Modding\Skyrim\Tools\xEdit.exe (or the location you stored it)
Arguments: -IKnowWhatImDoing -sse

Title: SSEEdit - Quick Auto Clean
Binary: Same as above
Arguments: -quickautoclean -sse

Title: LOOT
Binary: C:\Program Files\LOOT\LOOT.exe (or where LOOT is installed)
Start In: C:\Program Files\LOOT

Title: Creation Kit
Binary: (skyrim location)\CreationKit.exe
Start In: (skyrim location)
Overwrite Steam AppId: 1946180

Title: Synthesis
Binary: (Synthesis location)\Synthesis.exe

Title: EasyNPC
Binary: (EasyNPC location)\EasyNPC.exe

You will set up xLODGEN, TexGen, DynDOLOD, Nemesis, BodySlide shortcuts in this same window as instructed to later in the guide.


# BethINI



## BethINI PIE

[![mod]](https://www.nexusmods.com/site/mods/631) | Version: `4.10` | Author: `DoubleYou` | ![Core] |
Download: | Main Files - Bethini Pie

Manually extract the folder into Modding\Skyrim\Tools\BethINI
 (or to a folder where you will store your tools).
 
Add BethINI Pie as an executable IN MO2 and run it from the profile you want to configure. 
When you run it for the first time, select Skyrim Special Edition from the dropdown.
In the setup window, make sure that the Game Path is correct for either Steam or Stock Game as appropriate.
Make sure the INI Path points to your Documents\My Games\Skyrim Special Edition location.

Configure the settings as specified below.  If an option is not mentioned, it can be left as the preset sets it.
 
+ **Basic Tab**
   + **Presets**
     + Click the 'Reset to Default' button.
     + Click the 'Apply Recommended Tweaks' button.
     + Click the 'High' button.  
   + **Display**
     + Resolution: This should be your system's native resolution
	 + Display Mode: Borderless Windowed Mode
	 + Antialiasing: None or TAA, your choice
     + Vsync: Unchecked
	 + Default World FOV: 85
	 + Default FOV: 85
	 + Default 1st Person World FOV: 85

+ **General Tab**
  + **Saved Games**
    + Autosaves: Unchecked
	+ Save on Travel: Unchecked
	+ Save on Wait: Unchecked
	+ Save on Rest: Unchecked

+ ** Gameplay Tab**
  + Always Drive Ragdoll: Checked
  + NPCs Use Ammo: Checked
  + Tutorials: Unchecked
  + Weapon Charge Clear Time: 0.25
  + Over-Encumbered Reminder: 300
  + Landscape Friction: 32

+ ** Interface Tab**
  + Bethesda Modding Platform: Unchecked
  + Mod Manager Menu: Unchecked

+ ** Environment Tab **
  + ** Trees **
    + Move the four sliders all the way to the right.
  + ** Water**
    + Reflect Sky: Unchecked
	
+ ** Shadows Tab **
  + Ambient Occlusion: Unchecked
  
+ ** Visuals Tab **
  + ** Effects**
    + Particles: 7500
	+ Lens Flare: Unchecked

+ ** View Distance Tab **
  + ** Near Details **
    + Flickering Light Distance: 8192
  + ** Distant Details **
    + Level 4 Block Distance: 131072
	+ Level 8 Block Distance: 212144
	+ Level 16 Block Distance: 524288
	+ Tree LOD Distance: 0 (if using Ultra Tree lod)
    + Large Reference Grid: 11

Select File->Save, confirm all, and exit.

# LOD Generation



## xLODGEN

[![mod]](https://stepmodifications.org/forum/topic/13451-xlodgen-terrain-lod-beta-86-for-fnv-fo3-fo4-fo4vr-tes5-sse-tes5vr-enderal-enderalse/) | Version: `Beta 101` | Author: `Sheson` | ![Core] |
Download: | xLODGen beta 101

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

[![mod]](https://www.nexusmods.com/skyrimspecialedition/mods/68518) | Version: `Alpha-156` | Author: `Sheson` | ![Core] |
Download: | Miscellaneous Files - DynDOLOD 3.00

![PostInstall]
~~~
Create a folder named 'DynDOLOD' in the root directory of the drive
  where you have installed Skyrim, i.e. H:\DynDOLOD.
Manually extract the archive into \DynDOLOD.

Add TexGenx64.exe and DynDOLODx64.exe as an executable in Mod Organizer 2.
For each add the following to the arguments field: -sse.
~~~

# ENB Series Binaries

## ENB Series Skyrim

[![mod]](http://enbdev.com/download_mod_tesskyrimse.html) | Version: `0.475` | Author: `Boris Vorontsov` | ![Core] |
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
[esm]: https://img.shields.io/badge/ESM-blue?style=flat-square
[esl]: https://img.shields.io/badge/ESL-orange?style=flat-square
[esl-c]: https://img.shields.io/badge/ESL--C-red?style=flat-square
[qac]: https://img.shields.io/badge/QAC-critical?style=flat-square
