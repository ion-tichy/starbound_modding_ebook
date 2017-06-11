### PLAYER.CONFIG
Once the recipe file is made we have to “learn” the recipe so we can craft it. We can either do it through player.config where they automatically know the recipe or having another item on pick up teach the recipe through learnBlueprintOnPickup.
```json
[ 
    {
     "op" : "add",
     "path" : "/defaultBlueprints/tier1/-",
     "value" : { "item" : "fo_cube" }
    } 
]
```