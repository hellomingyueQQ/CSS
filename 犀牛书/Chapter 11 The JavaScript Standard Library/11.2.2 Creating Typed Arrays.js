{
    let bytes = new Uint8Array(1024); // 1024 bytes
    let matrix = new Float64Array(9); // A 3x3 matrix
    let point = new Int16Array(3); // A point in 3D space
    let rgba = new Uint8ClampedArray(4); // A 4-byte RGBA pixel value
    let sudoku = new Int8Array(81); // A 9x9 sudoku board
    let white = Uint8ClampedArray.of(255, 255, 255, 0); // RGBA opaque white
    let ints = Uint32Array.from(white); // The same 4 numbers, but as ints
    // Floats truncated to ints, longer ints truncated to 8 bits
    Uint8Array.of(1.23, 2.99, 45000) // => new Uint8Array([1, 2, 200])
    let buffer = new ArrayBuffer(1024 * 1024);
    buffer.byteLength // => 1024*1024; one megabyte of memory
    let asbytes = new Uint8Array(buffer); // Viewed as bytes
    let asints = new Int32Array(buffer); // Viewed as 32-bit signed ints
    let lastK = new Uint8Array(buffer, 1023 * 1024); // Last kilobyte as bytes
    let ints2 = new Int32Array(buffer, 1024, 256); // 2nd kilobyte as 256 integers
}