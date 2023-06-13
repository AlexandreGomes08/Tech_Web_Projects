function obterPrimeirosElementos(array, n = 1) {
    return array.slice(0, n);
}

const array = [1, 2, 3, 4, 5];

console.log(obterPrimeirosElementos(array)); 
console.log(obterPrimeirosElementos(array, 3)); 
console.log(obterPrimeirosElementos(array, 5)); 