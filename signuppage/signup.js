let form = document.getElementById('form');
let userNameInputBox = document.getElementById('username');
let emailInputBox = document.getElementsByName('email');
let passwordInputBox = document.getElementById('password');
let retypePasswordInputBox = document.getElementById('retype_password');
let emailContainer = document.getElementById('email_div')
let passwordContainer = document.getElementById('password_div')



function pTagValuesAndStyles(message) {
    let pTag = document.createElement("p");
    let errorMessage = document.createTextNode(message);
    pTag.appendChild(errorMessage);
    pTag.style.color = 'red';
    pTag.style.fontFamily = 'courier';
    pTag.style.cssText = "hello";
    pTag.style.fontWeight = 'bold'
    return pTag;
}

function displayInvalidEmailMessageToUser(message) {
    let pTag = pTagValuesAndStyles(message);
    emailContainer.appendChild(pTag);
    return false;
}

const isValidEmail = (userEmail) => {
    let regexPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regexPattern.test(userEmail)){
        return displayInvalidEmailMessageToUser("Invalid Email: Your email you match a valid email pattern");
    }
    let isValidDomain = false;
    let listOfValidDomains = ["gmail.com", "outlook.com", "yahoo.com"];
    let emailSplit = userEmail.split("@");
    listOfValidDomains.forEach((domain)=>{
        if (emailSplit[1] === domain) {
            isValidDomain = true;
            return isValidDomain;
        }
    });
    if (isValidDomain === false){
        displayInvalidEmailMessageToUser("Invalid domain:: please enter email with a valid domain,<br>e.g gmail.com, outlook.com...");
        return isValidDomain;
    }

}

const isValidPassword = (password) => {
    let regexFormat = /^(?=.*[!-@ ])(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[!-~]{6,15}$/;
    if (!regexFormat.test(password)){
        let pTag = pTagValuesAndStyles("Invalid password: password must contain<br>at least one uppercase, at least one lowercase," +
            "<br> a special character like @, !, #, $, %, &, *... and at least a number");
        passwordContainer.appendChild(pTag);
        return false;
    }
    return true;
};

function retypedPasswordIsSameAsPassword(password) {
    return password === passwordContainer.value;
}

function usernameIsNotBlank(username) {
    return username !== null && !(username.length > 15);
}

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let userEmail = emailInputBox[0].value;
    let password = passwordInputBox.value;
    let userName = userNameInputBox.value;
    let retypedPassword = retypePasswordInputBox.value;
    if (isValidEmail(userEmail) || (isValidPassword(password) || retypedPasswordIsSameAsPassword(retypedPassword)) || usernameIsNotBlank(userName)){
        console.log("Hello", "World");
        window.location.href = '../landingpage/landing_page.html';
    }
})
//