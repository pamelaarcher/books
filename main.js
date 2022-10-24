import './books.js'

window.addEventListener('load', ()=> {
    createBookList();
});

async function createBookList(){
    const response = await fetch('./books.json');
    const json     = await response.json();
    const books    = document.getElementById('books');
    console.log(json)

    json.books.forEach((book) => {
        const element = document.createElement('ele-book');
        element.book = book;
        books.appendChild(element);
        console.log(books)
    })
}
