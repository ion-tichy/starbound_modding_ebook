### UNPACKING YOUR ASSETS AND PACKING YOUR MOD
Before you start modding you have to unpack the assets from the vanilla container. This process does not “remove the files” but simply makes a copy of them for you to look at and learn from.  
Any changes to the unpacked assets will not make changes to the game until you make a mod of it.
Please do not “repack” the assets to replace the vanilla assets file as you will be damaging your game.  
  
Now let us look at the various ways we can unpack the assets.  
Video Tutorial: https://youtu.be/Dsjz2IrArVc

### UNPACKING THROUGH COMMANDLINE
Please bear in mind the code should be on a single line or it will not work.
The syntax to unpack assets is:
```
“Location of Unpacker” “Location of pak file” “Location to unpack”
Example:
"C:\Program Files (x86)\Steam\steamapps\common\Starbound\win32\asset_unpacker.exe"
"C:\Program Files (x86)\Steam\steamapps\common\Starbound\assets\packed.pak" "C:\Program
Files (x86)\Steam\steamapps\common\Starbound\unpacked"
```
The syntax to pack an asset is:  
```
“<Location of packer>” “<location of folder to pack>” “<location to unpack>\filename.pak”
Example:
"C:\Program Files (x86)\Steam\steamapps\common\Starbound\win32\asset_packer.exe"
"C:\Program Files (x86)\Steam\steamapps\common\Starbound\mods\test" "C:\Program Files
(x86)\Steam\steamapps\common\Starbound\mods\test.pak"
```
<span style="color:red;">For users who feel uncomfortable with this you may find some tools on the forum here:</span>
http://community.playstarbound.com/forums/modding.111/?prefix_id=66


### PACKING AND UNPACKING TOOLS  

#### WINDOWS
-  GUI Front End - http://community.playstarbound.com/threads/updated-asset-packaging-unpackaging-gui-frontend-for-1-0.95468/
-  Mod Pack Helper - http://community.playstarbound.com/threads/all-versions-win-linux-modpackhelper.92473/

#### LINUX
- Mod Pack Helper - http://community.playstarbound.com/threads/all-versions-win-linux-modpackhelper.92473/

#### MISC
- StarFuse ( OSX \ Linux ) - http://community.playstarbound.com/threads/alpha-0-4-0-starfuse-pak-utility-for-linux-os-x.115082/
    - Tool mounts pak files – and lets you access the files – so you can easily see how mods work without having to unpack it.