const sequenza = document.getElementsByClassName('row');
console.log(sequenza);

for (let i = 0; i < 100; i++){
  // creo l'elemento
  const quadrato = document.createElement ('div.square')

  // aggiungo l'elemento all'HTML
  quadrato.innerHTML = 'elemento lista' + 1;
  sequenza.append(quadrato);
}