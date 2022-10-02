const updatePostForm = document.querySelectorAll(".updatePost");

updatePostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector(".update-title").value;
    const body = document.querySelector(".update-body").value;
    const id = document.querySelector(".update-id").value;
    const formData = new FormData(updatePostForm);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(title);
    console.log(body);
    // fetch(fetchURL, requestOptions)
    //      .then((response) => response.json())
    //       .then((json) => console.log(json));
    //   fetchAndDisplay();
});

/*
function update() {
    const title = document.querySelector(".update-title").value;
    const body = document.querySelector(".update-body").value;
    const id = document.querySelector(".update-id").value;
    const formData = new FormData(updatePostForm);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(title);
    console.log(body);
};

*/