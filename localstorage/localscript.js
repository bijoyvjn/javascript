// inserting items in localstorage

// localStorage.setItem("password","abc123","username","luminar")

// getting items from local storage

// var uname=localStorage.getItem("username")
// console.log(uname)

// removing items from local storage

// localStorage.removeItem("password")

// to clear everything in the localstorage

// localStorage.clear()

// inserting a entire book data

// var book={
//     book_name:"the balarama",
//     author:"soothran",
//     price:20,
//     pages:100
// }

// localStorage.setItem(book.book_name,JSON.stringify(book))

// print the price of the balarama

// var b_price=JSON.parse(localStorage.getItem("the balarama"))
// console.log(b_price.price)


// Q: intering two set of data and checking the username and password is correct or not of 
// a purticular set
var user={
    username:"luminar",
    email:"luminar@gmmail.com",
    password:"hihello"
}
var user1={
    username:"technolab",
    email:"technolab@gmmail.com",
    password:"hellohi"
}

// localStorage.setItem(user.username,JSON.stringify(user))
// localStorage.setItem(user1.username,JSON.stringify(user1))

var uname="luminar"
var pass="hihello"

var chk=JSON.parse(localStorage.getItem("luminar"))
if(user.username==uname & user.password==pass)
{
    console.log("login sucessful")
}
else{
    console.log("login failed")
}

localStorage.clear()