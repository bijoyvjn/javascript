// to show the current url of the page
var current_url=document.URL
// here the url will show in the console
console.log(current_url)
// here the url will show in a popup
alert(current_url)


// if we wanna take morethan one element use=>"Elements" if single element=>"Element"

// taking the all h2 tags and styling that
// taking it by the tagname
var htwos=document.getElementsByTagName("h2")
for(let tag of htwos)
{
    tag.style.color="green"
}

// taking single tag by id
var h_one=document.getElementById("one")
h_one.style.color="red"

// takind listed items by tagname and styling
var items=document.getElementsByTagName("li")
for(let i of items)
{
    i.style.color="blue"
}

// taking items by class name and styling
var c_ele=document.getElementsByClassName("two")
for(let i of c_ele)
{
    i.style.color="yellow";
}

// taking all listed items
// li is the tag
var it=document.querySelectorAll("li")
for(let i of it)
{
    i.style.color="yellow";
}

// takig heading single element
// #is using for the id
// . is using for classname
var ids=document.querySelector("#top")
ids.style.color="blue"

// change text using id
var t_c=document.querySelector("#hi")
t_c.textContent="Document Object Model Changing"
// change style to italics
t_c.innerHTML="<em>Document Object Model Changing</em>"
