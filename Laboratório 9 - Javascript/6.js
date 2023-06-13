function inserirTracosNumerosPares(n) {
    const numeros = String(n).split('');
    let resultado = '';
  
    for (let i = 0; i < numeros.length; i++) {
      resultado += numeros[i];
  
      if (numeros[i] % 2 === 0 && numeros[i + 1] % 2 === 0) {
        resultado += '-';
      }
}
  
    return resultado;
  }
  
  const numero = 025468;
  const resultado = inserirTracosNumerosPares(numero);
  console.log(resultado); 
  