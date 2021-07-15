function Creation()
{
    let u_name=user.value
    let t_name=task.value
    let s_status=status.value
    let todo=
    {
        u_name,t_name,s_status
    }
    localStorage.setItem(u_name,JSON.stringify(todo))
    alert("Todo Sucessfully Created")
}

function ListAll()
{
    let user=[]
    for( let i=0;i<localStorage.length;i++)
    {
        user.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
    }
    let html_data=""
    for(let todos of todo)
    {
        html_data+=`<div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${todo.u_name}</li>
          <li class="list-group-item">${todo.t_name}</li>
          <li class="list-group-item">${todo.s_status}</li>
        </ul>
        </div>`
    }
    listbut.innerHTML=html_data
}