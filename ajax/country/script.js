function displayvalue(country){
    let country_name=country[0].name
    let country_capital=country[0].capital
    let country_population=country[0].population
    let currency_name=country[0].currencies[0].name
    let currency_symbol=country[0].currencies[0].symbol
    let country_flag=country[0].flag

    let html_data=`<div class="card" style="width: 18rem;">
    <img src="${country_flag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${country_name}</h5>
      <p class="card-text">capital:${country_capital}</p>
      <p class="card-text">population:${country_population}</p>
      <p class="card-text">currency name:${currency_name}</p>
      <p class="card-text">currency symbol${currency_symbol}</p>
    </div>
  </div>`
  document.querySelector("#result").innerHTML=html_data
}


// long method(xmlhttp request method)

// function fetchCountry()
//     {
//         let fcountry=cntry.value
//         let url=`https://restcountries.eu/rest/v2/name/${fcountry}?fullText=true`
//         let request=new XMLHttpRequest
//         request.open("get",url)
//         request.send()

//         request.onreadystatechange=()=>{
//             if(request.readyState==4){
//                 if(request.status>199 & request.status<300){
//                     let data=JSON.parse(request.responseText)
//                     displayvalue(data)
//                 }
//             }
//         }
//     }

// short method(fetch method)

function fetchCountry()
{
    let fcountry=cntry.value
    let url=`https://restcountries.eu/rest/v2/name/${fcountry}?fullText=true`
    fetch(url).then(res=>{
        if(!(res.ok)){
            throw new Error("failed to fetch data")
        }
        else
        {
            return res.json()
        }
    }).then(data=>displayvalue(data)).catch(error=>alert(error.message))
}