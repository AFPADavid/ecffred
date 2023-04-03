/* 
 * Actions
 */

var utils = require('./utils');

var renderer = function(view){
  return function(e){
    var offset = utils.getOffset(view.viewport);
    var pos = {};
    if (e.type === "mousemove"){
      pos = {  
        x : (e.clientX - offset.left) / offset.width,
        y : (e.clientY - offset.top ) / offset.height,
      }
    } else {
      pos = {
        x : (e.changedTouches[0].clientX - offset.left) / offset.width,
        y : (e.changedTouches[0].clientY - offset.top ) / offset.height,
      }
    }
    for (layer of view.layers){
      var tl = layer.topLeft;
      var br = layer.bottomRight;

      var css = utils.interpolate(layer.setpoints, pos, layer.exponent);
      var t = css.translate,
          r = css.rotate,
          s = css.scale
      ;
      var transform = "translate(" +t.map(function(v){return (v * 0.01 * offset.width) + "px"}).join(',') + ") " +
                         "rotatex(" + r[0] + "deg)" + "rotateY(" + r[1] + "deg)" +
                            "scale(" + s[0] +")"; 
      layer.element.style.transform = transform;
    }
  }
}

var add = function(view){
  return function(element, setpoints, exponent){
    exponent = exponent || 1;
    view.layers.push({ element: element, exponent : exponent, setpoints : setpoints});
  }
}

exports.add = add;
exports.renderer = renderer;
