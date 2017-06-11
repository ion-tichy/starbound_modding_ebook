## REFERENCE
Some information in the Index may at some point become outdated, inaccurate or missing information.

If you find such a mistake please report it in detail here:  
http://community.playstarbound.com/threads/unofficial-modding-ebook.96671/

### FRAMES FILE AND THE SPRITE SHEET

#### PARAMETERS
Now we will cover the various parameters seen in the frames file.

##### SIZE
The size parameter tells the game what is the size of a single frame. Not the size of the entire document. Every frame must be the exact same size in the sprite sheet.

##### DIMENSIONS
Dimensions is the number of frames in the sprite sheet based on Number of columns by the number of rows. So if your sprite sheet had 4 columns and 6 rows. It would be [ 4,6 ].

##### NAMES
Names lets you call upon a specific image in the sprite sheet. For example if you want to use a single image for 10 objects. An in the sprite sheet has 10 objects, you can call each image separately.  
A good example can be found in box1 frames: \unpacked\objects\generic\box1

##### ALIASES
Aliases helps you define specific “states” for your animation file. So if you want particular frames to be called upon through lua. Otherwise this is not needed at all.  
An example can be found at: \unpacked\objects\tiered\tier3door

### THE OBJECT FILE
The object file is a simple JSON file which describes the attributes of the object. From its name to its collision box and even allows you to attach scripts to the object.  

Now the example given below is essentially some of the most basic requirements for an object.

```json
{
    "objectName" : "testObject",
    "colonyTags" : ["misc"],
    "rarity" : "Common",
    "category" : "storage",
    "price" : 100,
    "description" : "Item description goes here",
    "shortdescription" : "Name of Object",
    "race" : "generic",
    "inventoryIcon" : "testObject.png",
    "orientations" : [
        {
            "dualImage" : "testObject.png",
            "imagePosition" : [-8, 0],
            "flipImages" : true,
            "spaceScan" : 0.1,
            "anchors" : [ "bottom" ]
        }
    ]
}
```

##### OBJECTNAME
Object Name is one of the most important parameters. The object name does not appear in game, it is simply used by thegame to identify the object. Which means you need to create a unique enough name that no other mod may end up having the same name. 
Also if you use a prefix to designate your mod – it will be useful for you as well as other modders to find out which mod is producing errors in the starbound.log As every modder will not be familiar with items from another mod.

##### TAGS
Tags is an optional parameter used by the NPCs in the game for the colonization system. There are specific tags each NPC type looks for. You can use a Find in Files search of a popular code editor to find all the different tags available. I will not be listing them out.

##### RARITY
Rarity has no particular purpose besides creating a unique borderline around the object in inventory.  
You cannot create new rarity categories. The only Categories currently available are; common, uncommon, rare, and legendary.

##### PRICE
The price defines the cost of the object to merchants

##### DESCRIPTION
This is the description you will find in the description box of the item.

##### SHORTDESCRIPTION
This is the actual name of the object which appears in the game. There is no issue if this name matches the same name of another item.

##### RACE
Serves no real purpose

##### \<RACE>DESCRIPTION
This unique parameter will allow any vanilla or custom race to say this specific line when using the magnifier on an object. In the case of custom mods – the \<race> parameter must be the exact same name as in the name in the species file.

##### INVENTORY ICON
This will choose the image within the same directory as the object file. Ideally the image should be 16 x16 px for best clarity but you can use any resolution and the game will downscale it for you.

###### ORIENTATIONS
Orientations is a pretty huge topic by itself so I will not be covering everything here. Long story short Orientation is how the object is placed in the environment and if it interacts differently based on how it is placed. For example a person could use a different image based on the direction it is placed. To keep things simple use dualImage and spacescan – which will handle basic orientations and collisions. If you want to use more of the complicated features it is a good time to look through the vanilla files and see how it is done. It is much better to learn through example of the vanilla assets.


### CRAFTING TABLE
A few users have asked about crafting tables – since I didn’t feel it required its own tutorial. I thought I would just give a quick idea. As always the best way to learn is just to look at the example files and see “what is different”.   
So let us look at the file Iron Crafting table found at:
```
\objects\crafting\ironcraftingtable
```

The only difference between a crafting table and a decorative object are these few lines:
```json
"interactAction" : "OpenCraftingInterface",
    "interactData" : {
        "config" : "/interface/windowconfig/crafting.config",
        "paneLayoutOverride" : {
            "windowtitle" : {
                "title" : " Iron Crafting Table",
                "subtitle" : " Heavy duty crafting!",
                "icon" : {
                    "file" : "/interface/crafting/ironcraftingtable.png"
                }
            }
        }
    }
},
"filter" : [ "plain", "craftingtable", "ironcraftingtable" ]},

```

Config: Is the window style you want to use. If you do not know how to edit UI stick to the default one.  
Though you can make custom UI if you are creative. Such as the one done by Pixel Good Store

*<insert example image>*

The large buttons to the left are actually the category tabs. As you can see the user completely overhauled the look. Though as I said earlier – if you don’t know how to design the UI – it is best to avoid it until you get some practice under your belt.

Title: The name shown on the top of the crafting table  

Subtitle: The small text under the titile.  

Icon: The tiny image shown in the UI.  

Filter: Filter are the “recipe groups” which it will show.


### METADATA
The modinfo informs the game a mod exists, the name of it, and how to treat the modinfo file. The modinfo file has 3 parameters of which only the name is necessary.

```json
{
    "author" : "Swat | Elite",
    "description" : " Mod description",
    "friendlyName" : "Purchasable Pets",
    "includes" : [],
    "name" : "p_Pets",
    "requires" : [],
    "version" : "1"
}
```

##### NAME
The name is the designated of the mod. This is not shown in game and so it is a good idea for it to be unique enough it won’t cause a conflict with another mod. When you pack the mod you will be asked to “name” your mod. That name provided upon packing is what will be shown in the game screen.

##### FRIENDLYNAME
Friendly Name is the name displayed in the game mod menu.

##### AUTHOR
Mod author’s name or username to be displayed in game.

##### DESCRIPTION
Description is the information provided in the large text box in the mod menu.

<span style="color:red;">Special Note for Steam Workshop Users.</span>

If you are going to use steam workshop to distribute your mod. Keep in mind Steam overwrites the description when edited through the workshop. So the description displayed in the Steam workshop will be the same one displayed in game.

##### VERSION
This is the version designation of the mod, it does not need to be a number. The value provided is a string so it must be in quotes.

##### REQUIRES
The “requires” parameter tells the game this mod requires assets of another mod. The name provided here has to be the exact name provided in the other mods modinfo file. This mod will not allow the game to load without the other mod present. This in turn will also cause this mod to load after the mod provided in the “requires” field.

##### INCLUDES
The “includes” parameter is a more flexible choice unlike requires. This parameter causes the mod to load after a particular mod. You use this parameter when your mod does not require assets of another mod, but may edit the same files as another mod. In which case you may want your mod to load after another.

##### PRIORITY
Priority forces a load order priority for some mods which demand to be loaded earlier than others to prevent compatibility issues. Default is 0 – otherwise priority based on the alphabetical order of the mod.

### RECIPES AND LEARNING RECIPES
One of the most common questions in the forums I see is, “I made my item but it is not being shown.”  

One extremely important detail is you always write the itemName or objectName in any of the options below. The actual file name itself does not matter. So you can not have a method directly where you have to unlock “different variations” of the recipe. Once you learn the recipe – you unlock every variation of the recipe for that specific item or object.  

There are 3 methods in which a player can unlock a recipe:  
- The player.config file
- Through an item by learnBlueprintsOnPickup
- Or through the Species File


#### THE PLAYER.CONFIG FILE
Recipes added through the player.config file will cause that item recipe to be learned instantly. When adding to the player.config you must add each element one at a time, example:  
```json
[ 
    {
     "op" : "add",
     "path" : "/defaultBlueprints/tier1/-",
     "value" : { "item" : "seblegs" }
    },
    {
     "op" : "add",
     "path" : "/defaultBlueprints/tier1/-",
     "value" : { "item" : "sebhelm" }
    } 
]
```

#### LEARN BLUEPRINTS ON PICKUP
If you want the recipe to be learned after a user finds a specific item, this is the best way to go. Simply add the line
```
"learnBlueprintsOnPickup" : [ "example", "example", "example" ]
```
This will allow the user to learn the recipe after picking up that item.

#### SPECIES FILE
Another method of learning the recipe is through the species file. The advantage of the species file is it limits the recipes to be only accessible by a specific race.  
