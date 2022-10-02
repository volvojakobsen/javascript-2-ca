const postForm = document.querySelector(".createPost");


const requestOptions = {
    method: 'POST',
    body: JSON.stringify({
        title: postForm.title.value,
        body: postForm.body.value,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8', Authorization: 'Bearer ' + Authorization,
    },
};

postForm.addEventListener("submit", event => {
    try {
        event.preventDefault();
        const title = document.querySelector(".form-title").value;
        const body = document.querySelector(".form-body").value;
        const formData = new FormData(postForm);
        const data = Object.fromEntries(formData);
        console.log(data);
        console.log(title);
        console.log(body);
        fetch(fetchURL, requestOptions)
            .then((response) => response.json())
            .then((json) => console.log(json));
        fetchAndDisplay();

    }
    catch (error) {

    }
});