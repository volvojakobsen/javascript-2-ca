const username = localStorage.getItem(`username`);
const email = localStorage.getItem(`email`);
const password = localStorage.getItem(`password`);
const printedUsername = document.querySelector(".username");
const printedEmail = document.querySelector(".email");
const printedPassword = document.querySelector(".password");

console.log(username, email, password);

function fetchUser(username, email, password) {
    printedUsername.innerHTML = username;
    printedEmail.innerHTML = email;
    printedPassword.innerHTML = password;
}

fetchUser(username, email, password);