{
    let target = { x: 1 }, source = { y: 2, z: 3 };
    for (let key of Object.keys(source)) {
        target[key] = source[key];
    }
    console.log(target); // => {x: 1, y: 2, z: 3}
}

{
    let target = { x: 1 };
    let source = { y: 2, z: 3 };
    Object.assign(target, source); // overwrites everything in o with defaults
    console.log(target);
}

{
    let target = { x: 1 };
    let source = { x: 2, z: 3 };
    target = Object.assign({}, source, target);
    console.log(target);
}

{
    let target = { x: 1 };
    let source = { x: 2, z: 3 };
    target = { ...source, ...target };
    console.log(target);
}

{
    // Like Object.assign() but doesn't override existing properties
    // (and also doesn't handle Symbol properties)
    function merge(target, ...sources) {
        for (let source of sources) {
            for (let key of Object.keys(source)) {
                if (!(key in target)) { // This is different than Object.assign()
                    target[key] = source[key];
                }
            }
        }
        return target;
    }
    const result1 = Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }) // => {x: 2, y: 3, z: 4}
    const result2 = merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }) // => {x: 1, y: 2, z: 4}
    console.log(result1);
    console.log(result2);
}

