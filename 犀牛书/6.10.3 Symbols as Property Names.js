const extension = Symbol("my extension symbol");
let o = {
 [extension]: { /* extension data stored in this object */ }
};
o[extension].x = 0; // This won't conflict with other properties of o
console.log(o);