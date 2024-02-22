let book = {
    "main title": "JavaScript", // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences", // for is reserved, but no quotes.
    author: { // The value of this property is
        firstname: "David", // itself an object.
        surname: "Flanagan"
    }
};

console.log(book.subtitle); // => undefined: property doesn't exist

let len = book.subtitle.length; // !TypeError: undefined doesn't have length

// A verbose and explicit technique 简单但麻烦的技术
{
    let surname = undefined;
    if (book) {
        if (book.author) {
            surname = book.author.surname;
        }
    }
}

// A concise and idiomatic alternative to get surname or null or undefined 简洁的惯用技术
surname = book && book.author && book.author.surname;

// ?.重写上方逻辑
let surname = book?.author?.surname;
