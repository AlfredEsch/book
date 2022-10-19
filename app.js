const titleInput = document.getElementById("title")
const authorInput = document.getElementById("authorName")
const isbnInput = document.getElementById("isbn#")
const table = document.getElementById("bookTable")
const form = document.querySelector('form')

form.addEventListener("submit", addBook)
table.addEventListener('click', deleteBook)



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
    e.preventDefault()
}

function deleteBook(e){
    if(e.target.textContent == 'X'){
        if(confirm('Are you sure to delete this book?')){
            e.target.parentElement.parentElement.remove()
            table(e.target.parentElement.textContent.slice(0,-1))
        }
    }
}