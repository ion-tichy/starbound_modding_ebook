### SETTING UP THE JSON
Before we start editing the images lets setup the JSON files. Since we are making completely custom items we don’t need to worry about patching so we can edit the files directly. First though lets rename only the JSON files ( Do not rename the image files – we will discuss why later ) to seb_armor as the primary name. Go through the JSON files and make the appropriate changes.

I am going to give an example of the chest file with the modified armor parameters. In order to fit everything on the page – I had to remove some of the; color codes, comments and rework the spacing.  
You do not need to do these steps.

The part I suggest you do though is remove the effect sources parameters. Effect sources is essentially a “particle effect” that happens when you wear the armor. As we will not be using it, I suggest removing that parameter completely.

The part highlighted in green though is specific to armors and only needed if you are going to make an armor item as opposed to a cosmetic item. In another words – you do not need to add these parameters for cosmetic items.  

```json
{ 
    "itemName" : "tarchest",
    "price" : 2500,
    "inventoryIcon" : "icons.png:chest",
    "maxStack" : 1,
    "rarity" : "Rare",
    "category" : "chestwear",
    "description" : "A sticky shirt made from thick tar.",
    "shortdescription" : "Tar Shirt",
    "tooltipKind" : "armor",
    "maleFrames" : {
    "body" : "chestm.png",
    "backSleeve" : "bsleeve.png",
    "frontSleeve" : "fsleeve.png" },
    "femaleFrames" : {
    "body" : "chestf.png",
    "backSleeve" : "bsleeve.png",
    "frontSleeve" : "fsleeve.png" },
    "colorOptions" : [
        { "ffca8a" : "66538d", "e0975c" : "4b3b6d", "a85636" : "2e1e3b", "6f2919" : "080207" },
        { "ffca8a" : "838383", "e0975c" : "555555", "a85636" : "383838", "6f2919" : "151515" },
        { "ffca8a" : "b5b5b5", "e0975c" : "808080", "a85636" : "555555", "6f2919" : "303030" },
        { "ffca8a" : "e6e6e6", "e0975c" : "b6b6b6", "a85636" : "7b7b7b", "6f2919" : "373737" } 
    ],
    "level" : 4,
    "leveledStatusEffects" : [
        { "levelFunction" : "standardArmorLevelPowerMultiplierMultiplier",
          "stat" : "powerMultiplier",
          "baseMultiplier" : 1.25
        },
        { "levelFunction" : "standardArmorLevelProtectionMultiplier",
          "stat" : "protection",
          "amount" : 0.5 
        },
        { "levelFunction" : "standardArmorLevelMaxEnergyMultiplier",
          "stat" : "maxEnergy",
          "amount" : 5 
        },
        { "levelFunction" : "standardArmorLevelMaxHealthMultiplier",
          "stat" : "maxHealth",
          "amount" : 5
        } 
    ],
    "itemTags" : [ "tier4armour" ] 
}
```

### UNDERSTANDING THE PARAMETERS
Now let us take a brief look at each parameter so you better understand what to change and for what to change and how. I am going to skip over the obvious ones unless I feel explanation is necessary.

- Item Name: I cannot stress this enough, Item name is not shown the player, it is a unique ID used by the game. Since it is unique try and add a mod tag or some sort of unique identifier to the name to make it easily identifiable and unique to prevent conflict.
- Short Description: Is the actual name of the item shown to the player. It does not matter if this shares the name with another item. No conflict will occur
- Tool tip kind: This is the interface used when mouse-over the item. You can see other interfaces and parameters in the interface folder.
- Color options: this is one of the topics which is slightly difficult to understand for new users. The color options consists of 2 parameters; “base color”:“new color”. The code shown are hex colors. The base color is the color of the pixel you want to change in the original image. While the new color is the color that pixel will change into. I will cover this much more in-depth in the in reference part of the book.
- Level: Level is what tier of armor group this item belongs to.
- Leveled Status Effects: Is how the armor modifies the basic values set in player.config as well as weapons.
- itemTags: Not entirely sure, likely used for merchants when auto populating their lists.