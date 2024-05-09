let o = { x: 1, y: 2, z: 3 }; // Three enumerable own properties
o.propertyIsEnumerable("toString") // => false: not enumerable
for (let p in o) { // Loop through the properties
    console.log(p); // Prints x, y, and z, but not toString
}

for (let p in o) {
    if (!o.hasOwnProperty(p)) continue; // Skip inherited properties
}

for (let p in o) {
    if (typeof o[p] === "function") continue; // Skip all methods
}