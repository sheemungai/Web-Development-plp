document.addEventListener("DOMContentLoaded",function(){
    const form =document.getElementById("userForm");
    const passwordInput =document.getElementById("password");
    const nameInput =document.getElementById("username");
    const validationMessage  =document.getElementById("validationMessage");
    const greetingMessage =document.getElementById("greetingMessage");


passwordInput.addEventListener("input",function(){
    if (passwordInput.value.length < 8){
        validationMessage.textContent = "password must be atleast 8 chacters long";
        validationMessage.style.color = "red";
    }

    else {
        validationMessage.textContent = "password is valid";
        validationMessage.style.color = "green";
}
})
form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    if (passwordInput.value.length < 8) {
        validationMessage.textContent = "Please provide a strong password!";
        return;
    }

    const name = nameInput.value;
    greetingMessage.textContent = `Welcome, ${name}! Thank you for signing up.`;
    form.reset(); 
});
form.addEventListener("reset", function () {
    validationMessage.textContent = "";
    greetingMessage.textContent = "";
});
});





;