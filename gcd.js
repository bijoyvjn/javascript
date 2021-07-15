var num1=14
var num2=63

var factor=0;
for (let i=2;i<=num1;i++)
{
    if(num1%i==0 & num2%i==0)
    {
        factor=i;
    }
}
console.log(factor)