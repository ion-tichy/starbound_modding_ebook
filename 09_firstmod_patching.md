### DIRTY EDITS AND PATCHING
One thing many new aspiring modders do is called a <span style="color:red;">Dirty Edit</span>. What this means is you copy the vanilla file into the new mods folder and make the changes directly. This of course will work – but is not the proper way to do things, especially if you are planning on releasing this mod to the community.  
If you are developing the mod only for personal use – then there is no issue with this technique unless you are planning on using other mods in combination.  

Now the problem with Dirty Edits is **incompatibility** with other mods which edit the same file. What will happen is the last mod loaded will make the changes and ignore the changes of the previous mod based on the mod load order, unless of course you do the proper way which is the <span style="color:darkgreen;">Patching System</span>.

### BASICS OF PATCHING
What a patch is essentially is a set of commands which performs a specific operation to a target file to make changes at spots we only wish for those changes to occur. Now if 2 mods change the exact same parameter in the same file – of course there will be incapability and the change will happen again based on the load order. The load order being alphabetical based on the name provided in the metadata file.  

But with patching multiple mods can make changes to the same file – as long as they do not edit the
same parameter – which is not possible with a dirty edit.

Now to learn the basics of patching lets copy (copy not cut) the <span style="color:orange">flashlight.flashlight</span> from the directory listed above into the mod directory as shown previously. Remember it needs to be in the exact parallel folder in order to work.  

Now rename the flashlight file in the mod directory to <span style="color:orange">flashlight.flashlight</span><span style="color:darkgreen">.patch</span>. Anytime you want to make an edit to a vanilla file you must make a 100% sure you end the file name in a <span style="color:darkgreen">.patch</span>. The
exception being lua files which cannot be patched.  

*insert image here*

Now open both the original <span style="color:orange">flashlight.flashlight</span> and the new <span style="color:darkgreen">.patch</span> version we made in the mod folder. In the file in the mod folder
delete all the contents inside and place this code instead exactly as you see it.  

```json
[
    {
    "op": "replace",
    "path" : "/shortdescription",
    "value": "Test Flashlight"
    }, {
    "op": "replace",
    "path" : "/lightColor",
    "value": [100,100,100]
    }
]
```


When in game type:
- /admin
- /spawnitem flashlight 1  

The name of the flashlight should now be “<span style="color:orange">test flashlight</span>” and the light will barely be visible.
