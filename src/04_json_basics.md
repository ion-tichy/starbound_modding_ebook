### BASICS OF JSON
Understanding JSON is fairly straight forward. The quickest way of course is to take the time and look through all the vanilla files and see how they are made.   
There are 3 basic rules to follow to make sure you don’t make any mistakes when writing the syntax.  

1. **Always add a comma to separate each parameter except the last parameter before the endof a bracket.**  

    Let us look at an example:  
    
    ```javascript  
    {
        "name" : "example 1", //<-- comma!
        "price": 10, //<-- comma!
        "shortdescription" : "example 2" //<-- last line before end of bracket
    }
    ```
      
    After looking at the example you should easily be able to tell when to use a comma and when not to use at this point.  
    
2. **Double quotes are only used for text.**  
    If you look at the previous example you will notice things like “name”, “price” and “short description” are surrounded by double quotes, as well as “example 1 and 2”. Parameters always will be in double quotes while their values if it is a text field will require them also.
    
    There are certain values that cannot have quotes: <span stlye="color:red;">Numbers and True or False</span> values.  
    
3. **Most importantly close brackets in the correct order but in the correct location.**  
    One of the most common mistakes new users make is either they forget to close a bracket, they close a bracket in the wrong order, or they choose a completely different bracket.
