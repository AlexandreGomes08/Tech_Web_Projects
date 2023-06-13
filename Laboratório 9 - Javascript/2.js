function clonarArray(array) {
    return array.slice();

}

const original = [1, 2, 3];
const clone = clonarArray(original);

console.log(original);  // [1, 2, 3]
console.log(clone);     // [1, 2, 3]

console.log(original === clone);