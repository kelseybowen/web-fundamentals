function changeName(new_name) {
    var name = document.querySelector(".profile_name")
    name.innerText = new_name;
}

function remove_request() {
    var request = document.querySelector(".conn-req .people")
    request.remove()
}
