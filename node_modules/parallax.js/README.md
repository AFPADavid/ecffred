# Parallax.js
### A library for making parallax views.

---

# Demo

A working demo can be seen at [https://mobiushorizons.github.io/parallax.js/](https://mobiushorizons.github.io/parallax.js/)

# API

## (parallax).init

Function `init` takes one parameter container which is the container of your dynamic elements.

Return :  
This returns the view object to which you add the dynamic elements with their properties.


## (parallax).uniform

Utility Function `uniform` is used for generating standard percentage based deviation configurations

Param: 
percentage -- the percentage deviation.

Return: 
a configuration that can be passed to [add](#viewadd) 

## (view).add

Function `add` adds an element to the animation loop, and describes how it will move.
```
@parameter element   This is the element to be animated.
@parameter setpoints this is an array of points where the configuration is specified.
@parameter exponent  [optional] weights are taken to this value (weight ^ exponent). default value is 1.

each setpoint has the following properties:

  pos       : [%x, %y], // this is the position in the viewport that this configuration is active.
  translate : [%x, %y],  // offset from original position as a percentage of viewport.
  rotate    : [x , y ],  // rotation in degrees.
  scale     : [ zoom ]   // zoom factor

```


## (view).matrix

Function `matrix` adds a group of elements that should be dealt with in a matrix or grid.

```
@parameter elements  This is a matrix (array of rows of elements).
@parameter setpoints This is an array of points where the configuration is specified.
@parameter exponent  [optional] weights are taken to this value (weight ^ exponent). default value is 1.

each setpoint has the following properties:

  pos       : [%x, %y], // this is the position in the viewport that this configuration is active.
  explode   : %       , // this is the percentage of the viewport by which elements in the matrix are translated from the center.
  rotate    : degrees , // the number of degrees to rotate. 
```

# Example
```javascript
  // initialize viewport
  var viewport = document.GetElementById("container");
  var item     = document.GetElementById("item1");

  // Get Matrix Images
  var [m11, m12, m13] = document.querySelectorAll(".row1 img");
  var [m21, m22, m23] = document.querySelectorAll(".row2 img");
  var [m31, m32, m33] = document.querySelectorAll(".row3 img");

  var view = parallax.init(viewport)
  
  /* item1 will transition smoothly between the two configurations below 
   * based on how close the mouse is to *pos*.
   *******/

  view.add(item1, [
      {
        pos       : [0,0],      // top-left corner
        translate : [-10, -10], // offset -10%, -10%
        rotate    : [0, -45],   // rotated -45deg about the Y axis.
        scale     : [1]         // original zoom.
      },
      {
        pos       : [100,100], // bottom-right corner
        translate : [10, 10],   // offset 10%, 10%
        rotate    : [0, 45],    // rotated 45deg about the Y axis.
        scale     : [1]         // original zoom.
      }
    ]
    
    view.matrix(
    [
      [m11, m12, m13],
      [m21, m22, m23],
      [m31, m32, m33]
    ],
    [
      {
        pos : [10,40],
        explode: 0,
        rotate: 0
      },
      {
        pos : [50, 40],
        explode : 0,
        rotate: 0
      },
      {
        pos : [10, 80],
        explode : 0,
        rotate: 0
      },
      {
        pos : [50, 80],
        explode : 0,
        rotate: 0
      },
      {
        pos : [30, 60],
        explode : 3,
        rotate: 45
      }
    ], 5);
  );
```

