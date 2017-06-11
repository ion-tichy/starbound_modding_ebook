### DISTRIBUTION
With our mod finished we are ready to distribute. If your plan is to distribute it on the main forums or a
site like Nexus the best option is to <span style="color:orange;">.pak</span> the mod. That will make it easy for users to quickly and easily install it.

If you are planning on putting it on Steam Workshop though you want to keep it unpak’d as the
workshop will handle the packing when you upload it.

### PAK’ING YOUR MOD.
To turn your mod into a pak file is extremely easy.  
Open up your text editor and writ the following code.  
```
"Location of asset_packer" "location of folder to pak" "location of where to save pak file + filename.pak"
```

Though you can’t see it properly here, the entire strip of code shown above has to be in a single line. If it word wraps as shown it does not matter – but you may not press “Enter” in any part. 

An example:  
```
"C:\Install\SteamLibrary\steamapps\common\Starbound\win32\asset_packer.exe" 
"C:\Install\SteamLibrary\steamapps\common\Starbound\mods\p_Pets"
"C:\Install\SteamLibrary\steamapps\common\Starbound\mods\p_Pets.pak"
```

Save the file as <span style="color:orange;">mymodpaker.bat</span> – make sure it is a batch file and not a text file. 
The name is not really important but the fact it is a batch file is. Then double click on the batch file to run it.
If you did everything properly a new pak file would be made in the destination you have provided.

For Mac and Linux users you can do the similar process through your command line functionality of
your operating system.

Once you pak the file there is no need to place it in a zip or rar, otherwise it will be less confusing for
users.
