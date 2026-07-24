const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const div = document.getElementById("msg");
const user = {
    email: "rohinimittal246@gmail.com",
    password: "123345"
}
btn.addEventListener("click", () => {
    if (user.email === email.value) {
        if (user.password === password.value) {
            div.innerText = "Login Successfull";
        } else {
           div.innerText = "Incorrect Password";
        }
    }
    else{
        div.innerText = "User is not Existing!!";
    }
})
