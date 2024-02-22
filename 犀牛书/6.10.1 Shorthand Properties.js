{
    let x = 1, y = 2;
    let o = {
        x: x,
        y: y
    };
}

{
    let x = 1, y = 2;
    let o = { x, y };
    o.x + o.y // => 3
}