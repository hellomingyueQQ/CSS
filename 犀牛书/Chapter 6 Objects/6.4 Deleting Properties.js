// "use strict"
// use strict得放在最上面才起作用

let book = {
    "main title": "JavaScript", // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences", // for is reserved, but no quotes.
    author: { // The value of this property is
        firstname: "David", // itself an object.
        surname: "Flanagan"
    }
};

delete book.author; // The book object now has no author property.
delete book["main title"]; // Now it doesn't have "main title", either.

let o = {x: 1}; // o has own property x and inherits property toString
console.log(delete o.x); // => true: deletes property x
console.log(delete o.x); // => true: does nothing (x doesn't exist) but true anyway
console.log(delete o.toString); // => true: does nothing (toString isn't an own property)
console.log(delete 1); // => true: nonsense, but true anyway

// In strict mode, all these deletions throw TypeError instead of returning false
console.log(delete Object.prototype); // => false: property is non-configurable
var x = 1; // Declare a global variable
console.log(delete globalThis.x); // => false: can't delete this property
function f() {} // Declare a global function
console.log(delete globalThis.f); // => false: can't delete this property either

globalThis.x = 1; // Create a configurable global property (no let or var)
console.log(delete x); // => true: this property can be deleted
console.log(delete x);; // SyntaxError in strict mode
console.log(delete globalThis.x);; // This works

// 这节课的代码，适用于网页端，node端不太对。
// 比较好的收获是原来全局变量的设置方法不同，是否配置也有不同