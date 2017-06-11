### FRAMES FILE
The next thing we need to make after the image is the frames file. The frames file basically defines the image for the game. It needs to be the exact same name as the image ( without the extension of course ). .It tells the game how big the image is – how many frames the image has – if the image is animated, which sequence to play the animation, and what name designations are for frame setups etc.  
The short story is, it is very important file so do not forget about it.

```
{
    "frameGrid" : {
        "size" : [24, 24],
        "dimensions" : [1, 1],
        "names" : [
            [ "default" ]
        ]
    }
}
```


Size: Is the size of each individual frame, and not the entire image. So even if the entire collection of images is 240 x 240. If each frame is only 24 x 24. The size will remain only 24 x 24.

Dimensions: Is how many frames exist within the image. So if we were dealing with multiple variables of objects or animations – we would list how many columns then rows.

Some examples would be:
```
Objects\generic\box 2 
```

```
Objects\generic\burning coals
```

Where you have multiple variations and the other one being animated respectively.  

Names: As you can see from the examples also names are important when determining animation as well as variations. You can easily create multiple variables of an object with a single image and only choose one variant to be displayed in the image.  

One example is my Purchaseable Pets mod – which has a single image for 7 objects. Each object calls upon a specific variant in the image.  

Now save the file as <span style="color:orange;">cube.frames</span>  

One important point to note is the 8 pixel rule and platform collision.

*<insert example image>*

On the left side you see the cube using the exact frame dimensions of 24 x 22. On the right side you see the object
using the frames of 24 x 24 with the top 2 pixels left blank.

You will notice regardless of which one you use when trying to stack the objects on top of each other – there is a
2 pixel space. So when dealing with objects which can stack items on top of it – it is always better to keep to
multiples of 8 in your design or you will end up having floating objects. Unless of course that was your intention in the first place.