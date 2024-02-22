{
    let position = { x: 0, y: 0 };
    let dimensions = { width: 100, height: 75 };
    let rect = { ...position, ...dimensions };
    console.log(rerect.x + rect.y + rect.width + rect.height);// => 175u
}

{
    let o = { x: 1 };
    let p = { x: 0, ...o };
    console.log(p.x); // => 1: the value from object o overrides the initial value
    let q = { ...o, x: 2 };
    console.log(q.x); // => 2: the value 2 overrides the previous value from o.
}

{
    let o = Object.create({ x: 1 }); // o inherits the property x
    let p = { ...o };
    console.log(p.x); // => undefined
    // 扩展操作符只扩展自有属性
}