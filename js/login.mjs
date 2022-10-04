const loginForm = document.getElementById("login_form");
const loginURL = "https://nf-api.onrender.com/api/v1/social/auth/login";


loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    const data = Object.fromEntries(formData);
    console.log(data);
    fetch(loginURL, {
        method: 'POST', body: JSON.stringify(
            data
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => storeUser(json));
    location.href = `/profile-page.html`


});

function storeUser(json) {
    localStorage.setItem('email', json.email);
    localStorage.setItem('username', json.name);
    localStorage.setItem('accessToken', json.accessToken)
}

/*
async function login(data) {
    try {
        await fetch(loginURL, {
            method: 'POST', body: JSON.stringify(
                data
            ),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => localStorage.setItem('accessToken', json.accessToken))
    }
    catch (error) {
        console.log("error")
    }

}




*/