const titleInput = document.getElementById("title")
const authorInput = document.getElementById("authorName")
const isbnInput = document.getElementById("isbn#")
const table = document.getElementById("booktable")
const form = document.querySelector('form')

form.addEventListener("submit", addBook)
table.addEventListener('click', deleteBook)
document.addEventListener('DOMContentLoaded', getBooks)

function addBook(e){
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = titleInput.value
    cell2.innerHTML = authorInput.value
    cell3.innerHTML = isbnInput.value
    const a = document.createElement('a')
    a.appendChild(document.createTextNode('X'))
    a.className = 'blue-text text-darken-2 secondary-content'
    a.style = 'alig'
    a.setAttribute('href', '#')
    cell4.appendChild(a)
    // e.preventDefault()
    const LSbookinfo = [titleInput.value, authorInput.value, isbnInput.value]
    addBookLS(LSbookinfo)
    titleInput.value = ""
    authorInput.value = ""
    isbnInput.value =  ""
    e.preventDefault()
}

function deleteBook(e){
    let pickedbooks

    let title = e.target.parentElement.parentElement.children[0].innerHTML
    let author = e.target.parentElement.parentElement.children[1].innerHTML
    let isbn = e.target.parentElement.parentElement.children[2].innerHTML
    let pickedbooksLS = [title, author, isbn]
    if(e.target.textContent == 'X'){
        if(confirm('Are you sure to delete this book?')){
            pickedbooks = e.target.parentElement.parentElement.rowIndex
            booktable.deleteRow(pickedbooks)
            deleteBookLS(pickedbooksLS)
        }
    }
}

function addBookLS(book) {
    let books
    if (localStorage.getItem('books') === null) {
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}

function deleteBookLS(book) {
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((bookLS, bookIndex) => {
        const stringbookLS = JSON.stringify(bookLS)
        const stringbook = JSON.stringify(book)
        if(stringbookLS === stringbook){
            books.splice(bookIndex, 1)
        }
    })
    localStorage.setItem('books', JSON.stringify(books))
}

function getBooks(){
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach((book) => {
        const lsRow = table.insertRow()
        const lsCell1 = lsRow.insertCell()
        const lsCell2 = lsRow.insertCell()
        const lsCell3 = lsRow.insertCell()
        const lsCell4 = lsRow.insertCell()
        const getX = document.createElement('a')
        getX.appendChild(document.createTextNode('X'))
        getX.className = 'blue-text text-darken-2 secondary-content'
        getX.setAttribute('href', '#')
        lsCell1.innerHTML = book[0].toString()
        lsCell2.innerHTML = book[1].toString()
        lsCell3.innerHTML = book[2].toString()
        lsCell4.appendChild(getX)
    })
}
