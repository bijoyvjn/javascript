var items=
[
    {id:100,nam:"sugar",price:35,avl_qty:0},
    {id:200,nam:"salt",price:15,avl_qty:100},
    {id:300,nam:"mango",price:90,avl_qty:10},
    {id:400,nam:"egg",price:5,avl_qty:25},
    {id:500,nam:"protein",price:50,avl_qty:0}
]

// display names only

var item_name=items.map(product=>product.nam)
console.log(item_name)

// showing number of products
var count=items.length
console.log(count)

// print product names in uppercase
var upp=items.map(prod=>prod.nam.toUpperCase())
console.log(upp)

// print items have price above 15
var ab=items.filter(item=>item.price>15)
var abn=ab.map(product=>product.nam)
console.log("products ssgreater than 15 rupees",abn);

// print product name greater than 20
var twenty=items.filter(item=>item.avl_qty>20)
var tname=twenty.map(ite=>ite.nam)
console.log("prouducts quantity greater than 20",tname)

// print all items in stock
var stock=items.filter(item=>item.avl_qty>0)
console.log(stock)

// print item name which have low avl_qty
var low_qty=items.reduce((item1,item2)=>item1.avl_qty<item2.avl_qty?item1.avl_qty:item2.avl_qty)
var low_items=items.filter(item=>item.avl_qty==low_qty)
var low_name=low_items.map(it=>it.nam)
console.log("low quantity items",low_name)

// print details of product which had the highest value
var hi_val=items.reduce((num1,num2)=>num1.price>num2.price?num1:num2)
console.log("highest value",hi_val)

// sort the products in descending order by based on its price
var price_sort=items.sort((item1,item2)=>item2.price-item1.price)
console.log("sorted",price_sort)

// find information about protein 
var protein_data=items.find(item=>item.nam=="protein")
console.log("protein data is",protein_data)

// check is peanutbutter is available in the list
var is_available=items.some(item=>item.nam=="peanutbutter")
console.log("peanut butter availabililty is",is_available)

