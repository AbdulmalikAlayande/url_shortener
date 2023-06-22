let form = document.getElementById('form');
let emailInputBox = document.getElementsByName('email')
let passwordInputBox = document.getElementById('password')

console.log("Hello", "World");


const isValidEmail = () => {
    let regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return false;
}

const isValidPassword = () => {
    return false;
};
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (isValidEmail() && isValidPassword()){

    }
})