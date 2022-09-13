const baseUrl = "https://reqres.in/api/users?page=2"
const contentEmail = document.querySelector('.content_email')
const contentUser = document.querySelector('.content_user')
const btnLogout = document.querySelector(".btn_logout")

let users = [];
async function callUsers(url){
    const data = await fetch(url);
    const response = await data.json();

    users = response.data

    printUSers(response.data)
    
} 
function printUSers(array){
    let html="";
    
    array.forEach(({email, id}) => {
        html+=`
        <div class="email">
            <h3 class="email_title">${email}</h3>
            <button class="btn email_btn" id="${id}">Login</button>
        </div>
        `;
        
    });
    contentEmail.innerHTML = html;
}

callUsers(baseUrl)
contentEmail.addEventListener('click', (e)=>{
    if(e.target.classList.contains('email_btn')){
        const idUSer = Number(e.target.id)

        const userLogin = users.find(users => users.id === idUSer)
        contentEmail.style.display ="none";
        contentUser.style.display = "block";
        let html= `
        <button class="btn btn_logout">Logout</button>
        <div class="user_img">
            <img src="" alt="">
        </div>
        <h2>name lastname</h2>
        <h3>email</h3>
        `;
         
        contentUser.innerHTML = html;

        console.log(userLogin);
    }
    
    
})

btnLogout.addEventListener('click', ()=>{
    contentEmail.style.display ="flex";
    contentUser.style.display = "none";
})