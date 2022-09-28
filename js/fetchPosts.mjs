const fetchURL = "https://nf-api.onrender.com/api/v1/social/posts"

const Authorization = localStorage.getItem(`accessToken`);

const postContainer = document.querySelector(".displayPosts");

let limit = 20;

const options = {
    headers: {
        Authorization: 'Bearer ' + Authorization
    },
}

async function getAndDisplayPosts() {
    try {
        const response = await fetch(fetchURL, options);
        const json = await response.json();
        console.log(json)
        for (let i = 0; i < json.length; i++) {
            if (i === limit) {
                break;
            }
            postContainer.innerHTML += `<div class="card mb-3 col-10">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${json[i].media}" class="img-fluid rounded-start" alt="profile-picture">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${json[i].title}</h5>
                  <p class="card-text">${json[i].body}</p>
                  <p class="card-text"><small class="text-muted">Last updated ${json[i].updated}</small></p>
                </div>
              </div>
            </div>
          </div>`
        }
    }
    catch (error) {
        console.log(error);
    }
}


getAndDisplayPosts();
