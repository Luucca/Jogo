const bear= document.querySelector('.bear')


const jump = ( evento) => {
 if (evento.key == 'ArrowUp' ){
  bear.classList.add('jump');

  setTimeout( () => (bear.classList.remove('jump')
  ),405); 
  }
 }
document.addEventListener('keydown', jump);

