const register_username = document.querySelector(".register_username").value;
const register_email = document.querySelector(".register_email").value;
const register_password = document.querySelector(".register_password").value;
const register_submit = document.querySelector(".register_submit");
const registerForm = document.getElementById("register_form");
const registerURL = "https://nf-api.onrender.com/api/v1/social/auth/register"

registerForm.addEventListener("submit", event => {
    try {
        event.preventDefault();
        const formData = new FormData(registerForm);
        const data = Object.fromEntries(formData);
        console.log(data);
        fetch(registerURL, {
            method: 'POST', body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));

    }
    catch (error) {
        console.log("an error occured")
    }
    finally {
        console.log("code ran");
    }
});
/*
async function register() {
    await fetch(registerURL, {
        method: 'POST', body: JSON.stringify({
            data
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}












/*


"accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTkyLCJuYW1lIjoiYW5keWpha28iLCJlbWFpbCI6ImFuZHJlYXMuamFrb2JzZW5Abm9yb2ZmLm5vIiwiYXZhdGFyIjpudWxsLCJiYW5uZXIiOm51bGwsImlhdCI6MTY2MzcwNDU4Mn0.GnmxQCzDWOPJ0b7k7nweqcIToZGCeOlk0MaORcviaJw"



document.addEventListener('DOMContentLoaded', () => {
    document
        .getElementById('register_form')
        .addEventListener("submit", makeUser);
});

function makeUser(ev) {
    ev.preventDefault();
    let register_form = ev.target;
    let person = new FormData(register_form);
    console.log(Array.from(person));
}





/*function makeUser(register_username, register_email, register_password) {
    let person = {
        username: 'register_username',
        email: 'register_email',
        password: 'register_password',
    }
    return person;
}

document.addEventListener()
console.log(person);


return person = {
    username: 'register_username',
    email: 'register_email',
    password: 'register_password',
}

*/