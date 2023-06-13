function localizarItemMaisFrequente(array) {
    if (array.length === 0) {
      return null;
    }
  
    let contador = {};
    let itemMaisFrequente;
    let frequenciaMaxima = 0;
  
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      contador[item] = (contador[item] || 0) + 1;
  
      if (contador[item] > frequenciaMaxima) {
        frequenciaMaxima = contador[item];
        itemMaisFrequente = item;
      }
    }
  
    return itemMaisFrequente;
}
  
  const array = [1, 2, 6, 0, 3, 2, 1, 2, 4, 5, 2];
  const itemMaisFrequente = localizarItemMaisFrequente(array);
  console.log(itemMaisFrequente);  
  