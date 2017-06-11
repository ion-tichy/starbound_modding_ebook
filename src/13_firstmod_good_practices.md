### GOOD MODDING PRACTICES
When modding there are some good practices you should keep in mind to help maintain compatibility with other mods as well as help other modders quickly go through issues and identify issues.  

- **Naming Objects and Items**
    - When choosing a file name for your Object and Items try to make sure the name is unique. Do not confuse File name for Short Description ( The name displayed to users ) – I am referring to Object Name an Item Name. You want to pick a name which is not generic so another mod may accidently have it causing a crash. To do this adding a mod tag into the name helps immensely in detecting which mod is causing an issue, and avoiding possible conflicts. For example if your mod was Bob’s Adventures and your item was a wrench naming the item ba_wrench would be ideal.
- **Finding all possible choices for Parameters.**
    - One question is often asked, “what are the other parameters for certain variables like “anchors” in Objects?”. If you use an advanced code editor such as Notepad ++, Sublime, Atom, etc you have an option called Search Files and Folders the default key for most of them is Control + Shift + F for windows. This function will search all text in all the files in those folders for that value. Then it will display all the results in a new tab. Double clicking on one of the results will open another new tab showing you the file.
    This is the best way to do 2 things.
        1. One you can easily find almost all vanilla parameters possible through this method.
        2. You can also find all files which call upon that object or item. For example you may want to know how to add a new biome and where all the places the biome is defined. By searching for the name of a vanilla biome – it will list every file which it is linked to. Allowing you quickly to make a map of every file you need to recreate for your own custom mod!.
- **When making Tiles and Liquids**
    - Tiles \ Materials \ Liquids a unique ID number and if that ID number is used in another mod it can cause it to crash. To fix this issue on Starbounder a page was made for mod authors to designate the numbers in which they are using.
        - http://starbounder.org/Modding:Materials:Mods
        - http://starbounder.org/Modding:Liquids:Mods
    - If you need help with the Wiki Please make a post here: http://community.playstarbound.com/threads/lets-get-wiki-basic-discussion.51896/
- **Tutorials and Guides**
    - If you learn anything useful from the book – please feel free to write your own guide even if they cover the same topic. The more people who are willing to share with the community – the more people who will become interested in modding. Sharing information and making it available to everyone allows for a much more richer and vibrant modding community.