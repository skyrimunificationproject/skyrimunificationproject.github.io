---
layout: home
title: Frequently Asked Questions
nav_order: 3
description: Frequently Asked Questions
---

![image](/assets/images/banner.png)

---

# Frequently Asked Questions

## Table of contents
{: .no_toc }
<details markdown="block">
  <summary>
     Expand to view
  </summary>
  {: .text-delta }
- TOC
{:toc}
</details>

# What version of Skyrim Special Edition is needed?

Skyrim Unification Project requires the Steam version of <a href="https://store.steampowered.com/app/489830/The_Elder_Scrolls_V_Skyrim_Special_Edition/" target="_blank" rel="noopener noreferrer">The Elder Scrolls V: Skyrim Special Edition</a> installed in English and updated to the latest version (1.6.1170 at the time of writing). Skyrim Unification Project does **not** require <a href="https://store.steampowered.com/app/1746860/The_Elder_Scrolls_V_Skyrim_Anniversary_Upgrade/" target="_blank" rel="noopener noreferrer">The Elder Scrolls V: Skyrim Anniversary Upgrade</a>.

If you have previously downgraded your Steam installation to an older version (e.g., 1.5.97 or 1.6.640), you will need to verify the game files to ensure you are updated to the latest version.


# Do I need to buy The Elder Scrolls V: Skyrim Anniversary Upgrade?

No, the paid DLC upgrade is not required to play Skyrim Unification Project.

Skyrim Unification Project, like most Wabbajack modlists, utilizes an installation method called "Stock Game", which copies the files from the game root folder into the modlist's own directory. This method allows you to have Skyrim Unification Project and other modlists installed separately, as well as a clean copy of your own Steam installation of Skyrim.

If you already own the Anniversary Edition DLC, you can still install it on your Steam installation, however it will be ignored during the installation process of Skyrim Unification Project and will not be active in the modlist.


# Are all Anniversary Edition Creations disabled in Skyrim Unification Project?

Skyrim Unification Project utilizes the four free creations that came with the Skyrim 1.6 AE Update. This includes <a href="https://en.uesp.net/wiki/Skyrim:Fishing" target="_blank" rel="noopener noreferrer">Fishing</a>, <a href="https://en.uesp.net/wiki/Skyrim:Rare_Curios" target="_blank" rel="noopener noreferrer">Rare Curios</a>, <a href="https://en.uesp.net/wiki/Skyrim:Saints_%26_Seducers" target="_blank" rel="noopener noreferrer">Saints & Seducers</a>, and <a href="https://en.uesp.net/wiki/Skyrim:Survival_Mode" target="_blank" rel="noopener noreferrer">Survival Mode</a>. All other Creation Club content is unutilized by Skyrim Unification Project and will not be active in the modlist, regardless of if you own it. 

# Can I add the Creation Club content / Anniversary Edition DLC / Verified Creations to my Skyrim Unification Project install on my own?

While you are welcome to try and add the AE DLC to Skyrim Unification Project, you will void any official support for the list and likely encounter many issues and difficulties in trying to successfully implement it into the list.

The Creation Club menu in the Main Menu has been intentionally disabled to prevent people adding this content accidentally.

With regards to Verified Creations (VC's), this modlist strongly opposes paid modding. Despite Bethesda's attempts to rebrand VC content, it is still a paid modding scheme at the end of the day. Wabbajack does not allow paid mods to be included within lists hosted on the platform, and this policy extends to VC content. Additionally, Nexus does not allow patches for VC content to be hosted on their CDN. Support staff for Skyrim Unification Project will follow their guidance on this topic and not allow for patches to be hosted in our modification spaces.

# I already own Skyrim: Legendary Edition, do I need to buy Special Edition?

Skyrim Special Edition is a completely different version of the game engine (64-bit instead of 32-bit). Skyrim Unification Project requires the 64-bit game engine, as it uses mods which require the 64-bit version of SKSE. Therefore, Skyrim Unification Project can not be installed on Legendary Edition.

There will be no efforts to create a fork of Skyrim Unification Project that will run on Legendary Edition.

# How long does it take to download Skyrim Unification Project?

If you have a Nexus Premium subscription, Skyrim Unification Project will likely take anywhere from 2-8 hours to install, depending on how much attention is being paid to the Wabbajack downloader and the speeds you are receiving from your ISP. Times may also vary based on what type of storage device you are downloading to (e.g., HDD, SSD).

# What mods are in the modlist?

The Load Order can be seen on the [Load Order page](/06ModlistVersions/LoadOrder) of this wiki.

# I already have other modlists installed, Can I still play Skyrim Unification Project?

Yes. Skyrim Unification Project utilizes "Stock Game" for its installation which allows the modlist to create its own, instanced version of Skyrim to be used exclusively by the modlist.

Provided that your Steam version of Skyrim is up-to-date and you are capable of following the [Installation Guide](/01Help/Install), you can install Skyrim Unification Project.

# Why Steam? I have Skyrim from another source and it won't let me install.

## Gamepass

Script extenders (i.e., SKSE) are not currently compatible with Gamepass versions of Bethesda games. 

SKSE cannot support any potential Windows Store release of Skyrim. Windows Store applications are locked down similarly to consoles and do not allow their APIs to be accessed in ways that are necessary for script extenders to work.

## GOG

GOG and Steam maintain different versions of Skyrim, therefore it is not possible to use GOG to install most Skyrim modlists. Several SKSE mods also do not support the GOG version of the game as a result of runtime differences.

## Epic Games

Wabbajack does not currently support the Epic Games Store. Additionally, Epic Games maintains a different version of Skyrim than Steam.

## Cracked / SteamEMU

Wabbajack includes piracy protection which will only allow installations on genuine copies of any game it supports.

* No, there is not any way to disable these protections.
* No, we will not provide you manual installation instructions.

As far as Wabbajack, Nexus, and the support staff of Skyrim Unification Project is concerned, there is no acceptable reason for you wanting to be able to use a cracked or emulated installation. We will not support any user attempting to install the list who does not own a legitimate copy of the game.


# Can I play Skyrim Unification Project with Skyrim Together?

Skyrim Together Reborn is not compatible with Skyrim Unification Project at this time. Lists generally have to be built around Skyrim Together and can not simply have support for it added at a later date.

* STR is incompatible with <a href="https://github.com/tiltedphoques/Mod-Compatibility/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions--1-desc+label%3AIncompatible" target="_blank" rel="noopener noreferrer">several common SKSE mods</a> used in Skyrim Unification Project.
* STR is incompatible with <a href="https://www.nexusmods.com/skyrimspecialedition/mods/17230" target="_blank" rel="noopener noreferrer">Engine Fixes</a>, which is a requirement for any modern Skyrim list.

There are no plans to make a version of Skyrim Unification Project which is compatible with Skyrim Together.

# Can I play Skyrim Unification Project on the Steam Deck?

Given the requirements of Skyrim Unification Project, this is unlikely and is not supported by our modlist staff.

# Can I play Skyrim Unification Project on Linux?

As far as we are concerned, Wabbajack frequently has issues with Linux-based machines as due to dependencies on certain windows frameworks.

This is not something that is officially supported by the Skyrim Unification Project support staff. 

To the Support team's knowledge, getting Skyrim Unification Project to run on Linux includes disabling several mods that may or may not be required for the routine functioning of the list. 


# Does Skyrim Unification Project support any other languages?

No, Skyrim Unification Project only supports the English installation of Skyrim Special Edition. No official efforts will be made to make Skyrim Unification Project work with other languages.

Any community-made translation efforts or projects for Skyrim Unification Project will be posted below:

* None currently


# How do I update Skyrim Unification Project to a new version?

Please read over the ["How Do I Update the Modlist?"](/01HowDoI/UpdatingModlist/) page for instructions on updating the modlist through Wabbajack.

{: .warning}
Some updates will require a new game and are ***not*** save compatible. Always check the [Changelog](/06ModlistVersions/CHANGELOG/) to verify if it is safe to continue an existing save after an update.


# Do I have to update Skyrim Unification Project when new versions release?

No, all updates require you to manually run Wabbajack to download and install the latest mods for a new build.

Support staff has the right to refuse support to any user who is not running the most up-to-date version of the list.


# How do I uninstall Skyrim Unification Project?

We're sorry to see you go. Please feel free to leave constructive criticism about the list.

In order to uninstall the list, please read over the ["How Do I Remove the Modlist?"](/01HowDoI/RemoveModlist/) page for instructions on removing the modlist.


# Can I move my Skyrim Unification Project installation to a different drive / PC?

If you want to move your Skyrim Unification Project installation to another drive then you will need to undertake the following steps.

 1. Copy the `Skyrim Unification Project` folder to the new drive.
 2. Rerun Wabbajack while pointed to the new folder path to ensure that all the paths are updated in the modlist.

If rerunning Wabbajack is not an option (e.g., not enough space), then you can manually fix the paths within the Mod Organizer settings (Wrench and Spanner Icon).


You will also need to edit the executable paths in Mod Organizer (Cogwheel Icon).



# Can I remove the downloads folder?

Yes, but if you want to perform a "Clean" repair or installation due to a bug, you will need to redownload every mod in the list. 

It is common for Wabbajack users to move their downloads folder to another drive or create a "pooled" downloads folder that is shared by every modlist they play.


# When is the next update?

Skyrim Unification Project will at a minimum receive monthly maintenance updates, plus larger scale patches as they are developed.


# How long will it take me to do a complete playthrough of Skyrim Unification Project?

This depends heavily on you and the way you choose to engage with the content in the list. Skyrim Unification Project is a relatively large list that is full of enhanced vanilla content in addition to brand new quests and worlds to explore.

Some players will struggle to get started and never get past the first few areas or fall into "restart-itis".

In addition, Legacy of the Dragonborn adds additional items to collect, so this question is difficult to even answer given some people see a complete playthrough as beating the game+DLC, completing those plus all quest mods, or just collecting all available LOTD displays (requiring completion of the game/DLC and several mods).  The estimated time to do any of these could be considered 60-100 hours up through several hundred hours.

---
# Can I add [insert mod] to Skyrim Unification Project?

Use the **#modlist-suggestions** channel on the <a href="https://discord.gg/UAhtyb2XuK" target="_blank" rel="noopener noreferrer">Skyrim Unification Project discord</a> server if you want to request the addition of a particular mod, otherwise use the **#unofficial-help-desk** channel to discuss list modifications.  Please use the search to see if it has been requested before, only post about it once, and be respectful if the staff declines or otherwise ignores the request.

---
# Can I remove [insert mod] from Skyrim Unification Project?

Use the **#modlist-suggestions** channel on the <a href="https://discord.gg/UAhtyb2XuK" target="_blank" rel="noopener noreferrer">Skyrim Unification Project discord</a> server if you want to request the removal of a particular mod, otherwise use the **#unofficial-help-desk** channel to discuss list modifications.  Please use the search to see if it has been requested before, only post about it once, and be respectful if the staff declines or otherwise ignores the request.


# Can I commission you to add/remove certain mod(s) to/from Skyrim Unification Project?

No.