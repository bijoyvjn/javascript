// why using reduce=> it using to get a single value output(such as greater number from the list,etc.)

// finding the greatest number from a list
var arr=[3,5,6,8,25,11,20,18]
var max_element=arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log("greatest element of array",max_element)

// sum of the array elements

var sum_array=arr.reduce((num1,num2)=>num1+num2)
console.log("sum of the array",sum_array)

