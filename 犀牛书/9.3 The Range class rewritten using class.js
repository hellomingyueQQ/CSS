class Range {
    constructor(from, to) {
        // Store the start and end points (state) of this new range object.
        // These are noninherited properties that are unique to this object.
        this.from = from;
        this.to = to;
    }
    // Return true if x is in the range, false otherwise
    // This method works for textual and Date ranges as well as numeric.
    includes(x) { return this.from <= x && x <= this.to; }
    // A generator function that makes instances of the class iterable.
    // Note that it only works for numeric ranges.
    *[Symbol.iterator]() {
        for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
    }
    // Return a string representation of the range
    toString() { return `(${this.from}...${this.to})`; }
}

// Here are example uses of this new Range class
let r = new Range(1, 3); // Create a Range object
r.includes(2) // => true: 2 is in the range
r.toString() // => "(1...3)"
console.log([...r] ); // => [1, 2, 3]; convert to an array via iterator

console.log("'r.constructor === Object'", "==>", r.constructor === Object);
console.log("'r.constructor === Range'", "==>", r.constructor === Range);
// 9.3是9.2的语法糖