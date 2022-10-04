const updatePostForm = document.querySelectorAll(".displayPosts").child;


/*
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
    //      .then((json) => console.log(json));
    //   fetchAndDisplay();
});
*/
/*
function update(id, title, body) {
    const formData = new FormData(updatePostForm);
    const data = Object.fromEntries(formData);
    console.log(data);
    console.log(title);
    console.log(body);
    console.log(id);
};
*/



function deletePost(id) {
    const deleteURL = "https://nf-api.onrender.com/api/v1/social/posts/" + id;
    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8', Authorization: 'Bearer ' + Authorization,
        },
    };
    fetch(deleteURL, requestOptions)
        .then((response) => response.json())
        .then((json) => console.log(json));

}
