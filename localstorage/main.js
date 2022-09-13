const baseUrl = "https://reqres.in/api/users?page=2"

async function callUsers(url){
    const data = await fetch(url);
    const response = await data.json();
    console.log(response);

    
} 
callUsers(baseUrl)