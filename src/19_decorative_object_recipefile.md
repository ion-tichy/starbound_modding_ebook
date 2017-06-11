### RECIPE FILE
The recipe file tells the game how to craft the object and which objects can craft the object. There are of course some limitations for example you can only have one output for the item. The output determines which object or item the recipe is for – not the file name. An important point to keep in mind and one of the reasons why only a single output is allowed.

```json
{
    "input" : [{ 
        "item" : "money",
        "count" : 1 
    }],
    "output" : { 
                "item" : "fo_cube", 
                "count" : 1 
    },
    "groups" : [ "plain" ]
}
```


Each “group” is associated with a crafting table filter. Add the groups which you wish – and filters in the crafting table defined by the object file will show that recipe.

The “plain” group is for crafting filter for the main character.

One thing you will notice is the game will chose the highest value in case of recipes. Since I chose a cost of1, it will pick 25 in the game. The value which is listed in the object file.

One final important note is once you unlock a recipe for an item all associated recipes will be unlocked at the same time. So you can’t have recipes for one item unlock at different times. To get around it you would need different crafting stations which unlock at different times if you want a variation in recipes.
