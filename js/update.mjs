const idInModalForm = document.querySelector(".update-id");

function clickedEdit(id) {
    console.log(id);
    idInModalForm.value = id;
}

clickedEdit();
