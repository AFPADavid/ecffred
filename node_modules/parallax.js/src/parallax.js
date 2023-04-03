/* create parallaxed views.
 *
 */

var actions = require("./actions");
var utils   = require("./utils");

var distanceFromCenter = function(x, y, maxX, maxY){
  return {
    x : (maxX/2) - x,
    y : (maxY/2) - y
  }
};

var matrix = function(view){
  return function(m, config){
    for (var y = 0; y < m.length; y++){ 
      var row = m[y];
      for (var x = 0; x < row.length; x++){
        piece = row[x];
        var d = distanceFromCenter(x, y, row.length, m.length);
        var setpoints = [];

        for (var i = 0; i < config.length; i++){
          var pos = config[i].pos;
          var e = config[i].explode;
          var r = config[i].rotate;
          setpoints.push({
            pos : pos,
            translate : [-1 * e * d.x, -1 * e * d.y],
            rotate :    [r * d.x, r * d.y],
            scale : [1]
          });
        }
        view.add(piece, setpoints, 10);
      }
    }
  }
};

var init = function(viewport){
  var view = {
    layers : [],
    viewport : viewport
  };

  view.add = actions.add(view);
  view.matrix = matrix(view);

  viewport.addEventListener('mousemove', actions.renderer(view));
  viewport.addEventListener('touchstart', actions.renderer(view));
  viewport.addEventListener('touchmove', actions.renderer(view));
  return view;
}

  
exports.init = init;
exports.uniform = utils.uniform;


