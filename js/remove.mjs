


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
