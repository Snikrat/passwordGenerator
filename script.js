let sliderElement = document.querySelector("#slider");
let btnElement = document.querySelector("#btn");

let sizePassword = document.querySelector("#value");
let password = document.querySelector("#password");

let containerPassword = document.querySelector(".container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = ""
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i ){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    containerPassword.classList.remove("hide");
    password.innerHTML = pass;
    newPassword = pass;
    document.querySelector(".tooltip").innerHTML = "Clique na senha para copiar!";

}

password.addEventListener("click", function() {
    navigator.clipboard.writeText(password.innerHTML);
    document.querySelector(".tooltip").innerHTML = "Senha copiada!";
    setTimeout(function() {
        document.querySelector(".tooltip").innerHTML = "Clique na senha para copiar!";
    }, 4000);
});



