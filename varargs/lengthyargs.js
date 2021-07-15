// the below function only access first two paremeters


function add(num1,num2)
{
    let res=num1+num2
    console.log(res);
}
add(10,20,30)

// if we wanna build a fuction which access any number of pramers

function add1(...args)
{
    let sum=args.reduce((num1,num2)=>num1+num2)
    console.log("the sum is",sum)
}
add1(10,20,30,40,50)

// to find greatest element in the input

function maxi(...args)
{
    let maximum=args.reduce((num1,num2)=>num1>num1?num1:num2)
    return maximum
}
console.log("the greatest element is",maxi(10,60,4,70))