function Range(from, to) {
    // Store the start and end points (state) of this new range object.
    // These are noninherited properties that are unique to this object.
    this.from = from;
    this.to = to;
}

const r = new Range(1, 3);
console.log(r instanceof Range );// => true: r inherits from Range.prototype

function Strange() { }
Strange.prototype = Range.prototype;
console.log(new Strange() instanceof Range); // => true

range.methods.isPrototypeOf(r); // range.methods is the prototype object.