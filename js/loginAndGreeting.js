// 로그인 & 환영 문구
const greeting = document.querySelector(".greeting");
const loginForm = document.querySelector(".login");
const userInput = document.querySelector(".login input");
const container = document.querySelector(".container");
const USER_NAME_KEY = "username"

function handleLoginSubmit(event){
    event.preventDefault();
    const userName = userInput.value;
    localStorage.setItem(USER_NAME_KEY,userName);
    loginForm.classList.add("hidden");
    container.classList.remove("hidden");
    greeting.innerText = `◽◽◽◽◽ ${localStorage.getItem(USER_NAME_KEY)} 's DESK ◽◽◽◽◽`
}

loginForm.addEventListener("submit",handleLoginSubmit);
