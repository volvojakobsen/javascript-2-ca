

const fetchURL = "https://nf-api.onrender.com/api/v1/social/posts/?_author=true&_comments=true&reactions=true";

const Authorization = localStorage.getItem(`accessToken`);

const postContainer = document.querySelector(".displayPosts");

const options = {
    headers: {
        Authorization: 'Bearer ' + Authorization
    },
}

async function GetPosts() {
    const response = await fetch(fetchURL, options);
    const json = await response.json();
    displayPosts(json);
    return json;
}
GetPosts()

/*
let isLoading = true;
fetch(fetchURL, options)
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error))
    .finally(
        displayPosts()
    )
*/
function displayPosts(json) {
    let limit = 20;
    postContainer.innerHTML = "";
    for (let i = 0; i < json.length; i++) {
        if (i === limit) {
            break;
        }
        if (json[i].author.name === localStorage.getItem("username")) {
            postContainer.innerHTML += `<div class="card mb-3 col-10">
              <div class="row g-0">
                <div class="col-md-4">
                  <img src="${json[i].media}" class="img-fluid rounded-start" alt="profile-picture">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h2 class="card-title">${json[i].author.name}</h2>
                    <h5 class="card-title">${json[i].title}</h5>
                    <p class="card-text">${json[i].body}</p>
                    <p class="card-text"><small class="text-muted">Last updated ${json[i].updated}. id: ${json[i].id}</small></p>
                    <div class="row"><button class="col-2 delete-button" onclick="deletePost(${json[i].id})"><p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill" viewBox="0 0 16 16">
                    <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                  </svg>Delete</p></button><button type="button" onclick="clickedEdit(${json[i].id})" class="btn btn-primary col-2" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                </svg>Edit</button>
              </div>
            </div>
  
            <div class="hidden"><form class="updatePost">
                <div class="container d-flex flex-column front-form my-3">
                  <h1 class="text-center">Update Post</h1>
                  <label for="subject" class="form-label">Subject</label>
                  <input type="text" name="title" class="form-control form-title" id="exampleInputEmail1" aria-describedby="emailHelp" />
                  <textarea name="body" id="message" cols="30" rows="10" class="form__input form-body text_area mb-3"
                    placeholder="message"></textarea>
                  <button type="submit" class="btn mb-3 btn-primary">Submit</button>
                </div>
              </form></div>`
        }
        else {
            postContainer.innerHTML += `<div class="card mb-3 col-10">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${json[i].media}" class="img-fluid rounded-start" alt="profile-picture">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h2 class="card-title">${json[i].author.name}</h2>
              <h5 class="card-title">${json[i].title}</h5>
              <p class="card-text">${json[i].body}</p>
              <p class="card-text"><small class="text-muted">Last updated ${json[i].updated}. id: ${json[i].id}</small></p>
            </div>
          </div>
        </div>
      </div>`}

    }
}

