{
    let square = {
        area: function () { return this.side * this.side; },
        side: 10
    };
    square.area() // => 100
}

{
    let square = {
        area() { return this.side * this.side; },
        side: 10
    };
    square.area() // => 100
}
{
    const METHOD_NAME = "m";
    const symbol = Symbol();
    let weirdMethods = {
        "method With Spaces"(x) { return x + 1; },
        [METHOD_NAME](x) { return x + 2; },
        [symbol](x) { return x + 3; }
    };
    weirdMethods["method With Spaces"](1) // => 2
    weirdMethods[METHOD_NAME](1) // => 3
    weirdMethods[symbol](1) // => 4
}
// 省略了function