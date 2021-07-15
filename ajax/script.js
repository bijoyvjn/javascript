// displalying
function displayvalues(users)
{
    let html_data=""
    for(let user of users)
    {
        html_data+=`<tr>
        <th scope="row">${user.username}</th>
        <td>${user.email}</td>
        <td>${user.userid}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
      </tr>`
    }
    document.querySelector("#display").innerHTML==html_data
}


// step 1 : creadte XMLHTTPRequest object
var request=new XMLHttpRequest()

// have to call open() method, this method take 2 parameters
// 1. method 2. url
request.open("get","https://jsonplaceholder.typicode.com/users")

// send XMLHttpRequest object using send()
request.send()



// readystate value of request object
request.onreadystatechange=()=>
{
    if(request.readyState==4)
    {
        if(request.status>199 & request.status<300)
        {
            let users=JSON.parse(request.responseText)
            console.log(users)
            displayvalues(users)
        }
        else
        {
            console.log("failed");
        }
    }
}

