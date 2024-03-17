document.addEventListener('DOMContentLoaded', function () {
    let params = new URLSearchParams(window.location.search);
    let titulo = params.get('titulo');
    let autor = params.get('autor');
    let imagem = params.get('imagem');

    document.getElementById('bookTitle').innerText = titulo;
    document.getElementById('bookAuthor').innerText = autor;
    document.getElementById('bookCover').style.backgroundImage = `url(${imagem})`;
});