// var arr=[1,2,3,4]
// var res=6
// for (let i of arr)
// {
//     for (let j of arr)
//     {
//         if(res==(i+j))
//         {
//             console.log(i,j)
//         }
//         else if(res>(i+j))
//         {
//             i++;
//         }
//         else if(res<(i+j))
//         {
//             j++;
//         }
//     }
// }

var arr=[1,2,3,4]
var element=6
var low=0,upp=arr.length-1
console.log(upp)

while(low<=upp)
{
    let res=arr[low]+arr[upp]
    if(element==res)
    {
        console.log(arr[low],arr[upp])
        break;
    }
    else if(element>res)
    {
        low++
    }
    else if(element<res)
    {
        upp++
    }
}