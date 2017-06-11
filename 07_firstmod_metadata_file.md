### SETTING UP YOUR COMPUTER
If you are a Windows user one important thing you need to do before we begin is make sure you can
view “Known hidden File Extensions”. You will want to see it to be able to know what file types you are
dealing with.  
http://windows.microsoft.com/en-us/windows/show-hide-file-name-extensions#show-hide-file-name-extensions=windows-7  

Also when learning to mod it is best to start with a fresh universe and character as well as no other
mods in your mods directory. The reason for this is you want to avoid conflicts with other mods, as well
as prevent your universe and character from being corrupted as you experiment.  

To do this all we need to do is rename your storage folder to anything you want. Then run the game
once, this will cause a new storage folder to be generated for you. Now anytime you want to play with
your old universe and files – just rename the new one and rename the old one back to storage


### METADATA FILE
Now we have naming down, let us make our first file.  
Open your code editor and create a your firstMod folder <span style="color:red;">_metadata</span> or <span style="color:red;">.metadata.</span>  

If you are using windows you might have to do "<span style="color:red;">.metadata.</span>" where a period is present before and after the metadata file. Or you can do underscore metadata as listed above.

Now type the following code shown on the below and save.

```json
{
"author" : "Mod author name",
"description" : " Mod description",
"friendlyName" : "Name displayed in game",
"name" : "file name",
"version" : "1"
}
```
If you did everything properly when you go the mod manager (the gear wheel at the bottom right of the screen) you will see your mod listed . If it is not there double check your work.

Save and launch the game.
