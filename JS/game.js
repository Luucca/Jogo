const bear= document.querySelector('.bear')


const jump = ( ) => {

  bear.classList.add('jump');

  setTimeout( () => (

    bear.classList.remove('jump')
  ),405);

  }

document.addEventListener('keydown', jump);

