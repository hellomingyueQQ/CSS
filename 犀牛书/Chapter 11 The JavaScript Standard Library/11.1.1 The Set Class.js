{
    let s = new Set(); // A new, empty set
    let t = new Set([1, s]); // A new set with two members
}

{
    let s = new Set([1, 0]);
    let t = new Set(s); // A new set that copies the elements of s.
    let unique = new Set("Mississippi"); // 4 elements: "M", "i", "s", and "p"
}

{
    let s = new Set(); // Start empty
    s.size // => 0
    s.add(1); // Add a number
    s.size // => 1; now the set has one member
    s.add(1); // Add the same number again
    s.size // => 1; the size does not change
    s.add(true); // Add another value; note that it is fine to mix types
    s.size // => 2
    s.add([1, 2, 3]); // Add an array value
    s.size // => 3; the array was added, not its elements
    s.delete(1) // => true: successfully deleted element 1
    s.size // => 2: the size is back down to 2
    s.delete("test") // => false: "test" was not a member, deletion failed
    s.delete(true) // => true: delete succeeded
    s.delete([1, 2, 3]) // => false: the array in the set is different
    s.size // => 1: there is still that one array in the set
    s.clear(); // Remove everything from the set
    s.size // => 0
}

{
    let oneDigitPrimes = new Set([2, 3, 5, 7]);
    oneDigitPrimes.has(2) // => true: 2 is a one-digit prime number
    oneDigitPrimes.has(3) // => true: so is 3
    oneDigitPrimes.has(4) // => false: 4 is not a prime
    oneDigitPrimes.has("5") // => false: "5" is not even a number

    let sum = 0;
    for (let p of oneDigitPrimes) { // Loop through the one-digit primes
        sum += p; // and add them up
    }
    console.log(sum);

    [...oneDigitPrimes] // => [2,3,5,7]: the set converted to an Array //an iterable object
    Math.max(...oneDigitPrimes) // => 7: set elements passed as function arguments
}

