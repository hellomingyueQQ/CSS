{
    let o = {
        // An ordinary data property
        dataProp: value,
        // An accessor property defined as a pair of functions.
        get accessorProp() { return this.dataProp; },
        set accessorProp(value) { this.dataProp = value; }
    };

}
{
    let p = {
        // x and y are regular read-write data properties.
        x: 1.0,
        y: 1.0,
        // r is a read-write accessor property with getter and setter.
        // Don't forget to put a comma after accessor methods.
        get r() { return Math.hypot(this.x, this.y); },
        set r(newvalue) {
            let oldvalue = Math.hypot(this.x, this.y);
            let ratio = newvalue / oldvalue;
            this.x *= ratio;
            this.y *= ratio;
        },
        // theta is a read-only accessor property with getter only.
        get theta() { return Math.atan2(this.y, this.x); }
    };
    p.r // => Math.SQRT2
    p.theta // => Math.PI / 4
}

{
    let q = Object.create(p); // A new object that inherits getters and setters
    q.x = 3; q.y = 4; // Create q's own data properties
    q.r // => 5: the inherited accessor properties work
    q.theta // => Math.atan2(4, 3)
}

{
    // This object generates strictly increasing serial numbers
    const serialnum = {
        // This data property holds the next serial number.
        // The _ in the property name hints that it is for internal use only.
        _n: 0,
        // Return the current value and increment it
        get next() { return this._n++; },
        // Set a new value of n, but only if it is larger than current
        set next(n) {
            if (n > this._n) this._n = n;
            else throw new Error("serial number can only be set to a larger value");
        }
    };
    serialnum.next = 10; // Set the starting serial number
    serialnum.next // => 10
    serialnum.next // => 11: different value each time we get next


}

{
    // This object has accessor properties that return random numbers.
    // The expression "random.octet", for example, yields a random number
    // between 0 and 255 each time it is evaluated.
    const random = {
        get octet() { return Math.floor(Math.random() * 256); },
        get uint16() { return Math.floor(Math.random() * 65536); },
        get int16() { return Math.floor(Math.random() * 65536) - 32768; }
    };
}