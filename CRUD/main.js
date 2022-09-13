const form = document.querySelector('#form')
const contentUser = document.querySelector('#contentUser')

const users = [
    {
        id:1,
        name:"jose",
        email:"luis@gmail.com",
    },
];

form.addEventListener('submit', function(e){
    e.preventDefault();
    const nameUser = e.target.nameUser.value
    const emailUser = e.target.emailUser.value
    
    if(nameUser.trim()==='' || emailUser.trim()==='') 
    return alert("todos los campos son requeridos")

    const newUser = {
        name:nameUser.trim(),
        email:emailUser.trim(),
        id: users.length + 1
    };
    
    users.push(newUser)
    form.reset();
    printUsers();
    
    
})
printUsers();
function printUsers(){
    let html = "";
    for (const user of users) {
        html+= `
        <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td id="${user.id}">
            <button type="button" class="btn btn-danger">Eliminar</button>
            <button type="button" class="btn btn-warning">Editar</button>
            </td>
         </tr>
        `;
    }
    
    contentUser.innerHTML = html;
    
}
contentUser.addEventListener('click', function(e){
    if(e.target.classList.contains('btn-danger')){
        const idUser = Number(e.target.parentElement.id)
        for (let i = 0; i < users.length; i++) {
            if(users[i].id===idUser){
                users.splice(i, 1)
                break;
            }
            
        }
    }
    if(e.target.classList.contains('btn-warning')){
        
    }
    printUsers();
})