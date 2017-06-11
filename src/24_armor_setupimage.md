### SETTING UP THE IMAGE.
Once the data has been set we can now work on the image, which by far is the most complicated part of this endeavor. Now for those users who are using a basic image editing app – you will need to open each image one at a time and edit them. For users with more advanced image editors such as GIMP or Photoshop, or even Paint.Net – you can cheat a little and load all images into a single file. Though you will need to separate them out again before saving.

For the users who are not confident in what they are doing I strongly suggest editing a single image at a time.

### IMPORTANT THINGS TO KEEP IN MIND
1. Each frame size is 43 x 43 pixels.  
    No when you open the file – each image will be in its own frame. It is extremely important you stay within each frame. The black lines shown in the image to the left will not be present in the image. I added them to give a better understanding of the amount of space you have to work with.  
    So if you have an advanced editor such as GIMP – you can set guide lines to help you better draw your image. You can get more information on GIMP’s grids and guides here:  
    https://docs.gimp.org/en/gimp-concepts-image-grid-and-guides.html  
    Do not worry these guides will not appear on the final image, as it is simply an overlay in the image program itself.
2. Brush vs Pencil  
    Ideally when dealing with pixel art using the pencil tool is always better than using the brush. Simply because Pencil tool is pixel perfect while Brush has some anti-aliasing involved ( Adds pixels of various opacities around the main point ). In some cases when dealing with shading a brush may help add more color gradients – though most of the time you will want to stick to using the pencil tool only.
3. Do not accidently shift the image  
    When editing the image – if you accidently shift the image by even one pixel it will have disastrous consequences. As you can see from the example to the left – I purposefully moved the entire set of frames then saved it. When attempting to see it in the game – you will notice the characters legs and pant legs are actually not aligning up properly.
4. Do not worry too much about perfect pixel transitions  
    I know a few of you are going to worry about pixel perfect transitions, where if a specific color pixel is in one location it must be placed in this specific location in the next image. Considering the speed of which the frames play – spending time on trying to make a 100% accurate transition is just going cause you to give up easier. Simply focus on transitioning the most important elements in a rough position and see it looks in game. If it seems right, that is more than enough.
5. The Frames File  
    Now if you look through vanilla armors you will notice the frames file missing in each one. You will also notice all the images have the exact same name. The reason for this is all the images share the exact same frames file, and since the frames file has to be the exact same name as the image – all images have the same name. Since it is the item file which designates which image to use and where – there is no issue of duplicates when it comes to image names only. 
    
    Another important point to keep in mind is all armors are kept 1 level below the frames file. To help you
    understand:
    - The frames file is located in; \items\armors
    - While the armor item will be located in; \items\armors\exampleArmor
    
    This is an important point to keep in mind. If you do not follow the vanilla file structure when making custom armor – you will need to include a frames file – if you keep your armors or vanity items in a different location.
    This also is important if you name your image differently than the vanilla naming convention.
6. Color Options  
    If you are going to include the ability to dye the armor – make sure you fix the color options appropriately to the new colors you have chosen. Otherwise the game can crash if someone tries to dye the armor. If you do not wish to deal with armor dying – remove the parameter completely