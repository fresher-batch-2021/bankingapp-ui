const routes = [
    { path: "login.html"},
    { path: "register.html"},
    { path: "index.html", roles:["USER"] },
    { path: "createaccount.html", roles:["USER"] },
    { path: "profile.html", roles: ["USER"] },
    { path: "edit.html", roles: ["USER"] },
    { path: "listuser.html",roles:["USER"] },
    {path:"listapplication.html",roles:["admin"]},
    {path:"listTransaction.html",roles:["admin"]},

];

 function logout() {
    localStorage.clear();
    window.location.href = "login.html";
 }
function checkAccess(pageName, role) {
let allowed = false;
 for (let route of routes){
   if (route.path == pageName){
   if (!route.roles){
    allowed = true;
    break;
   }
   else if (route.roles.includes(role)){ 
    allowed = true;
    break;
   }
  }
}
return allowed;
}
(function () {
    console.log("Routes initializing")
    let user = JSON.parse(localStorage.getItem("IsLoggedIn"));
    console.log("LoggedIn User", user);
    let role = user != null ? user.role : null;
    let pathName = window.location.pathname.substr(1);
    console.log(role,pathName)
    let allowedAccess = checkAccess(pathName, role);
    if (!allowedAccess) {
        alert("You are not authorized to access this page,Redirecting to login page");
        window.location.href = "login.html";
    }
})
();