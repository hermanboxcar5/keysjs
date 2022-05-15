# keys.js
A lightweight library for easily responding to keystrokes for frontend js. 

## How to use
First of all, you need a base for the library to work on. Attatch it to an HTMLelement for it to observe. This library can observe many objects at once. To make the library observe an object, use the `agent` class. 
```
let object = new keysjs.agent('#querySelector')
```
Inside the class params, use the HTMLelement object or a queryselector string to select the element. 

Now, we need to use the `object` variable that we just made to add responses to keypresses. There are many functions that you can use to achieve this. The first function is `key`. 
```
object.key("Enter", function(e){
e.preventDefault()
//do something
})
```
You can use it to observe keypresses of any key. To observe certain keys, use the `code` that is part of the returned value of a `keydown` eventListener. 

Next is the `letter` function. It is similar to the `key` function exept it only accepts letters. You can just put the letter by itself in a string (non-case-sensitive) to use as the first parameter. 
```
object.letter("a", function(e){
e.preventDefault()
//do something
})
```
Next is the `digit` function. It is similar to the `letter` function exept it takes numbers instead of letters. The digit can be any digit from 0 to 9. It can be within a string or as a integer. 
```
object.digit(5, function(e){
e.preventDefault()
//do something
})
```
For those "press any key to continue" matters:
There is `down`, `press`, and `up`. 
each triggers when any `keydown`, `keypress`, or `keyup` event listeners are triggered. They only accept one parameter, the function to run, but from that function you can take a parameter, say `e`, so you can get `e.code`. 
```
object.press(function(e){
let code = e.code
//do something
})
```
The `press` and `up` functions work the same way. 
