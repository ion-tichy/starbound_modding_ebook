### CREATING OUR FILES
Now that you know your mod is working, we need to take some time to learn a few basics. The first thing is the concept of parallel directories and how to store your files.

When you are modifying a “vanilla” (a file which is already existing in the game) then it must be in the exact same position as the vanilla file in your mod folder.

So at this time open your unpacked assets folder and go to:
```
unpacked\items\tools
```
(Where <span style="color:red">unpacked</span> is the location you unpacked your assets to)
We will be looking specifically at the file <span style="color:red">flashlight.flashlight</span>

Now to understand a parallel directory we need to make an exact same copy of the directory structure in our mod. If the new folder you made in your mods directory is called firstMod then it should be:
```
Starbound\mods\firstMod\items\tools\flashlight.flashlight
```

It is extremely important to maintain the directory structure when you alter vanilla files or you will get an error claiming a duplicate object is found
