function createbook()
{
    let book_name=b_name.value
    let author=b_author.value
    let price=b_price.value
    let pages=b_pages.value
    let book=
    {
        book_name,author,price,pages
    }
localStorage.setItem(book_name,JSON.stringify(book))
alert("book created")
}

function displaybook(book)
{
    let html_data=`<div class="card" style="width: 18rem;">
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${book.book_name}</li>
      <li class="list-group-item">${book.author}</li>
      <li class="list-group-item">${book.price}</li>
      <li class="list-group-item">${book.pages}</li>
    </ul>
    </div>`
    document.querySelector("#result").innerHTML=html_data
}

function search()
{
    let searching=searchin.value
    let bname=JSON.parse(localStorage.getItem(searching))
    if(bname)
    {
        displaybook(bname)
    }
    else
    {
        alert("not found")
    }
}

function allbooks()
{
    alert("showing all books")
    let books=[]
    for(let i=0;i<localStorage.length;i++)
    {
        books.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    console.log(books)
    let html_data=""
    for(let book of books)
    {
        html_data+=`<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${book.book_name}</li>
          <li class="list-group-item">${book.author}</li>
          <li class="list-group-item">${book.price}</li>
          <li class="list-group-item">${book.pages}</li>
        </ul>
        </div>`
    }
    result.innerHTML=html_data
}
