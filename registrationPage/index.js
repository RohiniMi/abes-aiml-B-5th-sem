const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const div = document.getElementById("students");

const btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    const innerDiv = document.createElement("div");
    innerDiv.innerText = `${name.value}`;
    innerDiv.style.backgroundColor = "blue";

    div.appendChild(innerDiv);

    name.value = "";
    email.value = "";
    password.value = "";

})

// console.log(name);
// console.log(email);
// console.log(password);
// console.log(div);
// console.log(btn);