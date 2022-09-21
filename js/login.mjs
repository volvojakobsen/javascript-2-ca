const loginForm = document.getElementById("login_form");
const loginURL = "https://nf-api.onrender.com/api/v1/social/auth/login";


loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);
    console.log(data);
    login();

})


async function login() {
    await fetch(loginURL, {
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




