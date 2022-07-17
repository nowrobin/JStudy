//const loginForm = document.querySelector("#login-form");//need to put ID # 
const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,username);
}
loginForm.addEventListener("submit",onLoginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);
console.log(saceUsername);

if(savedUsername === NULL){
    logintForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)


}else{

}


const HIDDEN_CLASSNAME = "hidden";
const link = document.querySelector("a");

// function handleLinkClick(event){
//     event.preventDefault();
//     const username = loginInput.value;
//     loginForm.classList.add("hidden");
//     greeting.innerText = "Hello" + username;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }
//link.addEventListener("click", handleLinkClick);


