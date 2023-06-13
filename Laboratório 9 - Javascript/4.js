function obterUltimosElementos(array, n = 1) {
    if (n >= array.length) {
      return array.slice();
    } else {
      return array.slice(array.length - n);
    }
}

const array = [1, 2, 3, 4, 5];

console.log(obterUltimosElementos(array));    
console.log(obterUltimosElementos(array, 3));   
console.log(obterUltimosElementos(array, 5));  
