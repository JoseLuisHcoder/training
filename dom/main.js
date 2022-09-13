// const nombre = document.querySelectorAll("h2");
// for (let i = 0; i < nombre.length; i++) {
//     const element = nombre[i];
//     console.log(element.textContent, "nombres");
// }

// const form = document.querySelector("#formulario");
// form.addEventListener('submit', function(e){
//     e.preventDefault();
    
// const name = e.target.name.value;
// const age = e.target.age.value;
// const pass1 = e.target.pass1.value;
// const pass2 = e.target.pass2.value;
// const terms = e.target.terms.checked;
// const gender = e.target.gender.value;
// const country = e.target.country.value;
// const born = e.target.born.value;

// console.log(name.trim());
  
    
// })

// const usersForm = document.querySelector('#usersform')
// const contentUser = document.querySelector('.content_user')

// const users = [
//     {
//         id:1,
//         name:"jose",
//         email:"hj@gmail.com"
//     },
//     {
//         id:2,
//         name:"luis",
//         email:"fddffdf@gmail.com"
//     },
//     {
//         id:3,
//         name:"sofi",
//         email:"iuiiuiu@gmail.com"
//     },
    

// ];

// usersForm.addEventListener('submit', function(e){
//     e.preventDefault()

    
//     const name = e.target.username.value
//     const email = e.target.email.value
    
//     if(!username || !email) return alert("todos los campos son requeridos")
//     users.push({
//         name: name,
//         email:email,
//     })
//     e.target.reset();
//     printUsers();
    
// })

// function printUsers (){
//     let html = "";
//     for (let i = 0; i < users.length; i++) {
//         const element = users[i];
//         html += `
//         <p>${element.name}</p>
//         <p><small>${element.email}</small></p>
//         <button>eliminar</button>
//         `;
//     }
//     contentUser.innerHTML = html;
// }
// printUsers()
























// const navPadre = document.querySelector(".navPadre")
// console.log(navPadre.firstElementChild);
// console.log(navPadre.lastElementChild);
//  for (let i = 0; i < navPadre.children.length; i++) {
//     const element = navPadre.children[i];
//     console.log(element, "hola");
//  }
//  const ocupation = document.getElementById("ocupation")
//  console.log(ocupation);
//  console.log(ocupation.previousElementSibling);
//  console.log(ocupation.nextElementSibling);

//  const cuarto = document.querySelector("#cuarto")
//  console.log(cuarto.parentElement);


//  const nom = document.querySelector("#title")
//  nom.textContent = "Jose Luis"

//  const userInfo= document.querySelector("#userInfo");
//  userInfo.innerHTML = "<h2>hola soy yo de nuevo</h2>";

//  const colorpadre = document.q

//  const contentUser = document.querySelector


// const imageUser = document.querySelector(("#image_user"))
// console.log(imageUser.hasAttribute("src"));
// console.log(imageUser.hasAttribute("alt"));
// console.log(imageUser.hasAttribute("nombre"));

// if(imageUser.hasAttribute("nombre")){
//     alert("tiene un atributo nombre")
// }else{
//     alert("no tiene nada")
// }

// console.log(imageUser.getAttribute("alt"));
// console.log(imageUser.setAttribute("alt", "IMAGEN"));
// console.log(imageUser.getAttribute("alt"));
// console.log(imageUser.attributes);
// console.log(imageUser.removeAttribute("nombre"));
// console.log(imageUser.attributes);

// const user = document.querySelector("#user")

// console.log(user.dataset.id);
// console.log(user.dataset["color"]);

// const imageUser = document.querySelector("#image_user")
// console.log(imageUser.attributes.src.value = "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/04/Dragon-Ball-Donde-estaria-la-casa-de-Goku-en-la-vida-real.jpg?resize=1280%2C720&quality=80&ssl=1");

// const padre = document.querySelector(".padre")

// padre.textContent = "soy programador"
// console.log((padre.style.background = "red"));
// console.log((padre.style.height = "200px"));

// function changeColor(){
//     console.log((padre.style.background = "blue"));
// }

// const userArray = [
//     {
//     name:"Jose Luis",
//     ocupation:"developer",
//     hobbies: ["codear", "futbol", "pizza", "trotar", "programar" ],
//     motivation: "mi familia",

//     },
//     {
//     name:"luciana",
//     ocupation:"data scientist",
//     hobbies: ["codear", "futbol", "pizza", "trotar", "programar" ],
//     motivation: "mi familia", 
//     },
//     {
//         name:"Sofia",
//         ocupation:"data scientist",
//         hobbies: ["codear", "futbol", "pizza", "trotar", "programar" ],
//         motivation: "mi familia", 
//         } 
// ];

// //  console.log(printHobbies (user.hobbies));
// const user = {
//         name:"Jose Luis",
//         ocupation:"developer",
//         hobbies: ["codear", "futbol", "pizza", "trotar", "programar" ],
//         motivation: "mi familia",
// };


//     const contentUser = document.querySelector(".content_user")

    

//     let content = `
//         <h1>${userArray[1].name}</h1>
//         <h2>${userArray[1].ocupation}</h2>
//         <lu>${printHobbies(userArray[1].hobbies)}</lu>
//         <p>${userArray[1].motivation}</p>
//     `;
//     function printHobbies(array){
//         let info = "";
//         for (let i = 0; i < array.length; i++) {
//             info+= `<li>${array[i]}</li>`
            
//         }
        
//         return info;
//     }
//     let html= "";
//     for (let j = 0; j < userArray.length; j++) {
//         html+=`
//         <h1>${userArray[j].name}</h1>
//         <h2>${userArray[j].ocupation}</h2>
//         <lu>${printHobbies(userArray[j].hobbies)}</lu>
//         <p>${userArray[j].motivation}</p>
//         `;
        
//     } 
//     console.log(printHobbies(userArray[1].hobbies));
//     contentUser.innerHTML= html;

// const formulario = document.querySelector("#formulario")
// formulario.addEventListener("submit", function(e){
//    e.preventDefault();
//     const name= e.target.name.value;
//     const age= e.target.age.value;
//     const pass1= e.target.pass1.value;
//     const pass2= e.target.pass2.value;
//     const terms= e.target.terms.checked;
//     const gender= e.target.gender.value;
//     const country= e.target.country.value;
//     const born= e.target.born.value;
// })




// const usersForm = document.querySelector ("#usersform")

// const contentUser = document.querySelector(".content_user")
// const users = [
//     {
//         id:1,
//         name:"jose Luis",
//         email: "zonajl@gmail.com",
//     },
//     {
//         id:2,
//         name:"Luciana",
//         email: "zonajl@gmail.com",
//     },
//     {
//         id:3,
//         name:"Sofia",
//         email: "zonajl@gmail.com",
//     },
    
// ];

// usersForm.addEventListener('submit', function(e){
//     e.preventDefault();

//     const name = e.target.username.value
//     const email = e.target.email.value

// if(!name.trim() || !email.trim()) return alert("todos los campor son necesarios")
//  users.push({
//     name,
//     email,
//  })
//  printUsers();
//  e.target.reset();
// })

// function printUsers() {
//     let html = "";
//     for (let i = 0; i < users.length; i++) {
//         const element = users[i];
//         html+= `
//         <div>
//             <p>${element.name}</p>
//             <p><small>${element.email}</small></p>
//             <button>Eliminar</button>
//         </div>
//         `;
//     }
//     contentUser.innerHTML = html;
// }
// printUsers();
 


