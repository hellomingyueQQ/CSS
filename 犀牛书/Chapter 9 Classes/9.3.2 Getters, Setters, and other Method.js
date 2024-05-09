*[Symbol.iterator]() {
 for(let x = Math.ceil(this.from); x <= this.to; x++) yield x;
}