
/* FUNÇÕES */

function adcHidden(element){
    element.classList.add('hidden')
}

function removeHidden(element){
    element.classList.remove('hidden')
}

/* */

let openModalbtn = document.querySelector('.btnRegisterBook')
let regBookModal = document.querySelector('.modal-registerbook')
let btnCloseModal = document.querySelector('.btnCloseModal')
const overlay = document.querySelector('.overlay');

openModalbtn.addEventListener('click', function () {
    removeHidden(regBookModal)
    removeHidden(overlay)
    
  });

btnCloseModal.addEventListener('click', function () {
    adcHidden(regBookModal)
    adcHidden(overlay)
    
  });


let btnSaveBook = document.querySelector('.btnSaveBook')



let contador = 0
btnSaveBook.addEventListener('click', function(){
    event.preventDefault();
    adcHidden(regBookModal)
    adcHidden(overlay)
    let bookName = document.querySelector('#bookName').value
    let bookAuthor = document.querySelector('#bookAuthor').value
    let isbnCode = document.querySelector('#isbnCode').value
    let bookGenre = document.querySelector('#bookGenre').value
    let bookCover = document.querySelector('#bookCover').value
    
    let regBooksDiv = document.querySelector('.list-regbcontent')

    let eachDiv = document.createElement('div')
    eachDiv.classList.add(`regbook-${contador}`)
    eachDiv.classList.add(`regbook-each`)

    eachDiv.style.width = 'calc(25% - 1rem)'
    eachDiv.style.height = '450px'

    eachDiv.innerHTML = `
    <div class="cont-rgbookdiv" style="border: 3px solid var(--verde); padding: 1rem; height: 100%;">
    <div class="text-rgbook" style="font-size: 2rem; display: flex; flex-direction: column;">
        <span><strong>Código ISBN: ${isbnCode}</strong></span>
        <span>Título: ${bookName}</span>
        <span>Autor: ${bookAuthor}</span>
        <span>Gênero Literário: ${bookGenre}</span>
    </div>
    <div class="img-bookcover" style="width: 90%; height: 70%;"><img src="${bookCover}" style="width=100%; height: 100%; object-fit: contain; width: 100%"></div>
    </div>`

    regBooksDiv.appendChild(eachDiv)

    document.querySelector('#bookName').value = ''
    document.querySelector('#bookAuthor').value = ''
    document.querySelector('#isbnCode').value = ''
    document.querySelector('#bookGenre').value = ''
    document.querySelector('#bookCover').value = ''

    contador++
})


// btnSaveBook.addEventListener('click', function(){
    
//     fetch('register_book.php', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             isbnCode: codigoisbn,
//             bookName: nome,
//             bookAuthor: autor,
//             bookGenre: genero,
//             bookCover: foto
//         }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         listarLivros();
//         alert('Livro cadastrado com sucesso!');
//     })
//     .catch((error) => {
//         console.error('Erro ao cadastrar livro:', error);
//     });
    
// })