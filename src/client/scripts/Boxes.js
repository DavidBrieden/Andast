var boxes = [];

// X
//XXX
boxes.push([{x:-1,y:0},{x:0,y:0},{x:1,y:0},{x:0,y:1}]);
//XX
// XX
boxes.push([{x:-1,y:1},{x:0,y:1},{x:0,y:0},{x:1,y:0}]);
//XX
//XX
boxes.push([{x:0,y:0},{x:0,y:1},{x:1,y:0},{x:1,y:1}]);
//X
//X
//X
//X
boxes.push([{x:0,y:0},{x:0,y:1},{x:0,y:2},{x:0,y:-1}]);
//X
//X
//XX
boxes.push([{x:0,y:0},{x:0,y:1},{x:0,y:-1},{x:-1,y:-1}]);
// XX
//XX
boxes.push([{x:-1,y:0},{x:0,y:0},{x:0,y:1},{x:1,y:1}]);

module.exports = boxes;
