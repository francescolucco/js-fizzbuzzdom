const row = document.querySelector ('.row');

// Stampo i numero da 1 a 100
for(let i = 1; i <= 100; i++){
  const box = document.createElement('div');
  box.innerHTML = i;
  box.classList.add('square');
  row.append(box);

  if (i % 3 == 0 && i % 5 == 0){
    box.innerHTML = 'FizzBuzz';
    box.classList.add('coral');
  }else if (i % 3 == 0){
    box.innerHTML = 'green';
    box.classList.add('coral');
  }else if (i % 5 == 0){
    box.innerHTML = 'Buzz';
    box.classList.add('yellow');
  }
  else{
    box.innerHTML = i
    box.classList.add('blue');
  }
}


