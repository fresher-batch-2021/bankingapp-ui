
function checkLogin() {

    let userStr = localStorage.getItem("userName");
    console.log(userStr);
    let user = userStr != null ? JSON.parse(userStr) : null;
    if (user != null) {
        document.querySelector("#loggedIn").innerHTML = "Hi!" + user.email;
    }
}
checkLogin();