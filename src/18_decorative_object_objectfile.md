### THE OBJECT FILE

The object file is the meat of the object creation. Also reasonably straight forward if you take the time to look at other vanilla objects and see how it is done. Through the object file you can attach scripts ( such as the Tech station ) or you can turn them into containers or even crafting
tables.But for our example project we are going to keep things simple and only make a simple
decoration object.  

So let us create a new file cube.object and write
in this following code.  
```json
{
    "objectName" : "fo_cube",
    "colonyTags" : ["misc"],
    "rarity" : "Common",
    "category" : "decorative",
    "price" : 25,
    
    "description" : "My first cub",
    "shortdescription" : "Cube",
    "race" : "generic",
    
    "apexDescription" : "What cube",
    "avianDescription" : "The cube.",
    "floranDescription" : "Cubess",
    "glitchDescription" : "Cube",
    "humanDescription" : "Cube.",
    "hylotlDescription" : "Cube.",
    "novakidDescription" : "A cube.",
    
    "inventoryIcon" : "cube.png",
    "orientations" : [{
            "image" : "cube.png:<color>",
            "imagePosition" : [-8, 0],
            "frames" : 1,
            "animationCycle" : 0.5,
            "spaceScan" : 0.1,
            "anchors" : [ "bottom" ],
            "collision" : "platform"
        }]
}
```

To get a basic idea of all the parameters.  

objectName : Is essentially the name the game uses and is not displayed to the user. It is useful to create a unique name that is easily identifiable in logs so other users know where the object or item came from if an issue arises.

colonyTags – these are unique tags used by colonist system to help determine which colonist is generated. Specific tags are required for specific colonists so it’s a good idea to look through the files to determine which tag to use.

Description: Is the object description displayed to the user

shortDescription: Is the name of the object displayed to the user

\<race>Description: Is the unique description said by each race when scan tool is used. This parameter also works with custom races, as long as you use <race> parameter exactly as the one provided in the species file of the custom race.

Orientations: orientation is how the image displayed. It is a good idea to look through vanilla files and compare.

imagePosition: Is the anchor point of the object when it flips.

spaceScan: is the collision box created for the object. Do not change this value if you want it done automatically. If you want to create a custom collision box use spaces instead. See farmable objects as an example.

anchor: Is how the object attaches to the game world. ( top, bottom, background, left, right ). When the object is touches a collision on that particular side – it displays that particular image.

collision: optional value if you to be able to stack objects ontop of the object. Otherwise you need not even include this parameter.
