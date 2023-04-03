require("./styles.css");
var parallax = require("./src/parallax");

var viewport = document.getElementById('viewport');
var layer1 = document.getElementById('layer1');


var view = parallax.init(viewport);


   view.add(layer1, [
    {
      pos : [0, 0],
      translate : [-10, -10],
      rotate : [0,-45],
      scale : [1]
    },
    {
      pos : [0, 100],
      translate : [-10, 10],
      rotate : [0, -45],
      scale : [1]
    },
    {
      pos : [100, 0],
      translate : [10, -10],
      rotate : [0, 45],
      scale : [1]
    },
    {
      pos : [100, 100],
      translate : [10, 10],
      rotate : [0,45],
      scale : [1]
    },
    {
      pos: [50, 50],
      translate: [0,0],
      rotate:[0,0],
      scale: [1.5]
    }
  ]);


   view.add(layer2, parallax.uniform(10));

   view.add(layer3, [
    {
      pos : [0, 0],
      translate : [-15, -5],
      rotate : [0,-10],
      scale : [1]
    },
    {
      pos : [0, 100],
      translate : [-15, 5],
      rotate : [0, -10],
      scale : [1]
    },
    {
      pos : [100, 0],
      translate : [15, -5],
      rotate : [0, 10],
      scale : [1]
    },
    {
      pos : [100, 100],
      translate : [15, 5],
      rotate : [0,10],
      scale : [1]
    }
  ]);

  view.add(matrix, parallax.uniform(0));

  view.matrix([[m11, m12, m13],
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
              


