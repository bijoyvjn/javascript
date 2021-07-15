function factorial(n)
{
    var sum=1
    for(let i=1;i<=n;i++)
    {
        sum*=i
    }
    return sum
}
console.log(factorial(6))