{
    let o = { x: 1 };
    "x" in o // => true: o has an own property "x"
    "y" in o // => false: o doesn't have a property "y"
    "toString" in o // => true: o inherits a toString property

}

{
    let o = { x: 1 };
    o.hasOwnProperty("x") // => true: o has an own property x
    o.hasOwnProperty("y") // => false: o doesn't have a property y
    o.hasOwnProperty("toString") // => false: toString is an inherited property

}

{
    let o = { x: 1 };
    o.propertyIsEnumerable("x") // => true: o has an own enumerable property x
    o.propertyIsEnumerable("toString") // => false: not an own property
    Object.prototype.propertyIsEnumerable("toString") // => false: not enumerable
}

{
    let o = { x: 1 };
    o.x !== undefined // => true: o has a property x
    o.y !== undefined // => false: o doesn't have a property y
    o.toString !== undefined // => true: o inherits a toString property
}

{
    let o = { x: undefined }; // Property is explicitly set to undefined
    o.x !== undefined // => false: property exists but is undefined
    o.y !== undefined // => false: property doesn't even exist
    "x" in o // => true: the property exists
    "y" in o // => false: the property doesn't exist
    delete o.x; // Delete the property x
    console.log("x" in o, "==> false: it doesn't exist anymore"); // => false: it doesn't exist anymore
}


{
    var a = {name:"xxx"};
    var b = Object.create(a);
    b.age = 20;
    console.log(b.propertyIsEnumerable("name"), "==> name不是自有属性，propertyIsEnumerable不检查原型链上的方法");
    console.log(b.propertyIsEnumerable("age"), "==> age是自有属性，propertyIsEnumerable检查自有属性");
    // 
}