function removerItemDuplicado(array) {
    const resultado = [];
    const mapa = new Map();
  
    for (let i = 0; i < array.length; i++) {
      const item = array[i].toLowerCase();
      if (!mapa.has(item)) {
        mapa.set(item, true);
        resultado.push(array[i]);
      }
    }
  
    return resultado;
}
  
  const array = ['Azul', 'Vermelho', 'Verde', 'vermelho', 'Laranja', 'Azul'];
  const arraySemDuplicado = removerItemDuplicado(array);
  console.log(arraySemDuplicado);
  