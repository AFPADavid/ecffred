/* 
 * Utility Functions used in the rest of the library.
 */

var average_by = function(weights){
  var total = weights.reduce(function(prev, current){return current + prev});
  return function(prev, current, idx){
    if (idx == 1){
      var w = weights[0] / total;
      prev = prev.map(function(v, i){
        return v * w;
      });
    }
    var w = weights[idx] / total;

    return current.map(function(v, i){
      return (v * w) + (prev[i] || 0);
    });
  }
}

var interpolate = function(setpoints, pos, exponent){
  exponent = exponent || 1;
  var positions = [];
  var translations = [];
  var rotations = [];
  var scale = [];

  for (var i = 0; i < setpoints.length; i++){
    positions.push(setpoints[i].pos)
    translations.push(setpoints[i].translate)
    rotations.push(setpoints[i].rotate)
    scale.push(setpoints[i].scale)
  }
  var weights = weight(positions, pos, exponent);

  var out = {};
  out.translate = translations.reduce(average_by(weights));
  out.rotate    = rotations.reduce(average_by(weights));
  out.scale       = scale.reduce(average_by(weights));
  return out;
};

var weight = function(positions, pos, exponent){
  exponent = exponent || 1;
  var total = positions.length;
  var out = [];
  for (p of positions){
    var x = p[0] / 100;
    var y = p[1] / 100;
    var w = Math.sqrt(Math.pow(Math.abs(pos.x - x),2) +   
                      Math.pow(Math.abs(pos.y - y),2));
    out.push(Math.pow(1 - w, exponent));
  }
  return out;
};

var getOffset = function(element){
  var offset = element.getBoundingClientRect();

  if (element.parentElement == null) {// we are at the top
    return offset; // base case;
  }
  // recursive case
  parentOffset = getOffset(element.parentElement);
  offset.left += parentOffset.left;
  offset.top += parentOffset.top;
  return offset;
}


var uniform = function(p){
  return [
    {
      pos: [0,0],
      translate : [-1 * p, -1 * p],
      rotate: [0,0],
      scale : [1]
    },
    {
      pos: [100,0],
      translate : [p, -1 * p],
      rotate: [0,0],
      scale : [1]
    },
    {
      pos: [0,100],
      translate : [-1 * p, p],
      rotate: [0,0],
      scale : [1]
    },
    {
      pos: [100,100],
      translate : [p, p],
      rotate: [0,0],
      scale : [1]
    }
  ];
};

exports.interpolate = interpolate;
exports.getOffset = getOffset;
exports.uniform = uniform;
