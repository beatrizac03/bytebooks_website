
/* FILTRAR LIVROS POR GENERO*/

// FUNÇÕES //

function filterCardsByGenre(genre){
  bookCards.forEach(function(cards){
    if(!cards.classList.contains(genre)){
      cards.classList.toggle('hidden')
    }
  })
}

function filterCardsByPrice(price){
  bookCards.forEach(function(cards){
    if(!cards.classList.contains(price)){
      cards.classList.toggle('hidden')
    }
  })
}

function favoritarLivro(likeSign){
  likeIcon.forEach(function(like) {
    if(like.classList.contains(likeSign)){
      like.classList.toggle('redHeart')
    }
  })
}

// ...... //

let checkboxes = document.querySelectorAll('input[type="checkbox"')
let bookCards = document.querySelectorAll('.eachbook-card')


checkboxes.forEach(function(checkbox){
  checkbox.addEventListener('change', function(){

    // if(checkbox.classList.contains('g-fic')){
    //   bookCards.forEach(function(cards){
    //      if(!cards.classList.contains('c-fic')){
    //         cards.classList.toggle('hidden')
    //      }
    //   })
    // }
    if(checkbox.classList.contains('g-fic')){
      filterCardsByGenre('c-fic')
    }
    if(checkbox.classList.contains('g-adv')){
      filterCardsByGenre('c-adv')
    }
    if(checkbox.classList.contains('g-rom')){
      filterCardsByGenre('c-rom')
    }
    if(checkbox.classList.contains('g-dra')){
      filterCardsByGenre('c-dra')
    }
    if(checkbox.classList.contains('g-sci')){
      filterCardsByGenre('c-sci')
    }

    //filtros por preço
    if(checkbox.classList.contains('p-free')){
      filterCardsByPrice('p-free')
    }
    if(checkbox.classList.contains('p-op1')){
      filterCardsByPrice('p-op1')
    }
    if(checkbox.classList.contains('p-op2')){
      filterCardsByPrice('p-op2')
    }
    if(checkbox.classList.contains('p-op3')){
      filterCardsByPrice('p-op3')
    }

  })
})

let likeIcon = document.querySelectorAll('.fa-heart')

likeIcon.forEach(function(like){
  like.addEventListener('click', function(){
    if(like.classList.contains('like-1')){
      like.style.color = 'rgb(214, 50, 50)';
    }
    if(like.classList.contains('like-2')){
      like.style.color = 'rgb(214, 50, 50)';
    }
    if(like.classList.contains('like-3')){
      like.style.color = 'rgb(214, 50, 50)';
    }
    
  })
})


document.addEventListener('DOMContentLoaded', function () {
    let btnVerDetalhes = document.querySelectorAll('.ver-detalhes');
  
    btnVerDetalhes.forEach(function (botao) {
        botao.addEventListener('click', function () {
          let titulo = this.closest('.eachbook-card').querySelector('.h3-booktitle').innerText;
          let autor = this.closest('.eachbook-card').querySelector('.span-authorname').innerText;
          let imagem = window.getComputedStyle(this.closest('.eachbook-card').querySelector('.eachcardbook-image')).backgroundImage;

            let url = `book.html?titulo=${encodeURIComponent(titulo)}&autor=${encodeURIComponent(autor)}&imagem=${encodeURIComponent(imagem)}`;
            window.location.href = url;
        });
    });
  });
