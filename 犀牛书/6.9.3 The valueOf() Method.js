let point = {
    x: 3,
    y: 4,
    valueOf: function () { return Math.hypot(this.x, this.y); }
};
Number(point) // => 5: valueOf() is used for conversions to numbers
console.log(point > 4 );// => true
console.log(point > 5); // => false
console.log(point < 6); // => true