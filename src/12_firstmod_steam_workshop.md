### STEAM WORKSHOP
Steam Workshop there are a few extra steps. In this case you do not pak the file, you leave it as a folder
with contents. Steam Workshop is only for users who own a copy of Starbound on Steam and not for
users who bought it from Humble or GoG.

For Windows users – when you launch Starbound through Steam you will get an option to Launch the
mod uploader tool. Choose it.

1. Choose your mod folder and <span style="color:red;">not</span> your starbound mods folder. You are selecting the folder your metadata file is in. If you made your metadata file correctly almost all the information will be filled out for you when select it.
2. The Reload button is for you to reload the metadata file if for some reason it is not updating.
3. Name tag is the reference name of the mod which is not shown
4. The Title is the name displayed to users in the Workshop page
5. Author of course is your user name or whatever name you wish to put.
6. Version is the version of your mod – not the version of Starbound your mod supports. It can
either be a numerical version or text name.
7. Description is both the description displayed in the game in the mod menu and your Steam Workshop
8. Preview Image is the image displayed on the Steam Workshop as your “Icon”. As far as I am
aware it can be upto 512 x 512 px and upto 1mb in size. PNG or JPG.
9. Reset Steam Information will actually reset the Mod ID number. This is Mod ID number is EXTREMELY important when it comes to dealing with future updates. The number should always be the same if you wish to update it in the future. The only reason you want to reset it is if you wish to make a Branch Mod for some reason. Note this will change your existing metadata file with the new Mod ID. So you will need to manually retype it in the metadata which will be automatically placed into it after uploading. You can find your previous Mod ID by going to your workshop mod page and looking at the URL. The Mod ID will be the last digits in the URL.
10. Press this button when all the information is correct to upload it.

Once your mod is uploaded it will start off as Invisible. Go to the Workshop page of the mod choose
visibility from the bottom right and set it to visible once you make any last minute edits.

#### STEAM WORKSHOP FOR MAC AND LINUX AND WINDOWS
Unfortunately there currently is no GUI tool for Mac and Linux users. So you will have to upload mods to the workshop the old fashioned way through command line. Don’t worry it is almost just as simple as the GUI tool and probably a lot faster for some users. <span style="color:red;">For Mac and Linux use forward slashes where applicable instead of back slashes.</span> I am writing toward Windows users though the same method is used for all operating systems with the necessary changes.  

The first thing you need to do is download SteamCMD:  
-  Windows: https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip
-  OS X: https://steamcdn-a.akamaihd.net/client/installer/steamcmd_osx.tar.gz
-  Linux: https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz

This is a command line tool which gives you access to most of Steam Services.  

Next we need to create a new txt file let us call it <span style="color:orange;">s_mymod.vdf</span>.  
Inside type in the following code:  
```
"workshopitem"
{
"appid"        "211820"
"publishedfileid"    "0"
"contentfolder"    "C:\examplemod"
"previewfile"      "C:\example.jpg"
"visibility"        "0"
"title"         "Title"
"description"         "Description"
"changenote"         "Initial Release"
}
```

App ID: Is the ID # of the game. The number provided is for Starbound Stable  

Published Field: Is the Mod ID number. Leave it “0” if you never uploaded the mod before. When you upload the mod it will automatically be changed by Steam CMD to the Mod ID #.  

Content Folder: Is the folder for your mod

Preview File: Is the image your mod will have in Steam Workshop. 512 x 512 px and less than 1mb. PNG or jpg. The

Visibility – If your mod will be visible on initial upload or not. 0 = visible, 1 = friends only, 2 = hidden

Title: The name displayed to users on steam workshop

Description: Description of mod in Steam Workshop

Change note: For updates changelog.

As you may have noticed using Steam CMD gives you a few more features then the GUI uploader.  

Once you fill in the code – save the file.  

Now run Steam CMD – it will take a few seconds to unpack. If it closes by itself launch it again.
Once Steam CMD window is open and it has finished unpacking type:  
```
login myLoginName myPassword
```
<span style="color:red;">*All code you type must be in a single line.</span>


Once it says you have successfully logged in – it may ask you to authenticate with Steam Guard type in
the Steam Guard number sent to you.  

Finally to upload the mod type:  
```
workshop_build_item c:\example.vdf
```

Hit enter and it should say you are uploading the mod to the Workshop if you did everything right.
Finally go to your workshop page and you should be able to see the mod listed. To make updates to the mod use the same VDF file. You can type in change notes for each update – just make sure you keep the new Published Field that Steam CMD will change automatically in the VDF after the first upload.

