function calcularSomaDeIndices(array1, array2) {
    const resultado = [];
  
    const tamanhoMaximo = Math.max(array1.length, array2.length);
  
    for (let i = 0; i < tamanhoMaximo; i++) {
      const valor1 = array1[i] || 0;
      const valor2 = array2[i] || 0;
      resultado.push(valor1 + valor2);
    }
  
    return resultado;
}
  
  const array1 = [3, 1, 5, 2];
  const array2 = [5, 6, 7];
  const somaDeIndices = calcularSomaDeIndices(array1, array2);
  console.log(somaDeIndices);  
  