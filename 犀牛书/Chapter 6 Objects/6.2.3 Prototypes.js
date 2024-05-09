let o1 = Object.create({x: 1, y: 2}); // o1 inherits properties x and y.
console.log(o1.x + o1.y); 

let o2 = Object.create(null); // o2 inherits no props or methods.

let o3 = Object.create(Object.prototype); // o3 is like {} or new Object().

let o = { x: "don't change this value" };
library.function(Object.create(o)); // Guard against accidental modifications

// 不想让o被修改，就传入一个继承自它的值