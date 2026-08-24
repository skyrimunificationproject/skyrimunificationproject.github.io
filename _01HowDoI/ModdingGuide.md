---
layout: default
title: How Do I Customize the Modlist?
nav_order: 16
has_children: false
description: How Do I Customize the Modlist?
---

Welcome to the Skyrim Unification Project customization guide! This page will explain the basics of modifying Skyrim Unification Project, such as adding, removing, modifying, and patching mods.


# Running Only Part of the List

## Disabling Unwanted Modules

As the list is laid out organized by module in MO2, you can simply select an entire module and "Disable selected".  We may offer specific MO2 profiles in the future but need to evaluate the maintenance and support confusion burden of these.

## Hiding Unused Patches

Many installed mods include patches for Adventures or Project Arch that will remain enabled after doing the above step.  Additionally, "Autoselecting Patch Hub" mods are likely to contain patches for all modules.

It is recommended you identify patches for unused modules by their missing master notifications in the MO2 plugin view and move these to Optional within their mod.

## Potential Conflict Resolution Landscape or Resources Issues

Some conflicts were solved when experienced at the Adventures or Project Arch tier of modules, and forgoing these may expose minor landscape height/texture seams or misplaced objects.  Please report these assuming no other modifications have been made so they can be addressed.

## Running Final Steps and NODELETE Tags

The provided list outputs assume all modules are being used.  You may need to rerun at a minimum: DynDOLOD, Synthesis, and EasyNPC.  Generally having additional Bodyslide files for modules not in use is not an issue.  Changes in xLODGEN output are probably relatively minor overall, unless you find it is an issue for you.

Please reference the [Manual Installation Final Steps](/05ManualInstall/final/) guide.

When generating new outputs, it is recommended you create a new mod entry starting with \[NoDelete\]. This will prevent it from being deleted during a Wabbajack update.