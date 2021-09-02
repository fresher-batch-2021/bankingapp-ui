function login() {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password1 = document.querySelector("#password").value;
  const roles = document.querySelectorAll("#role");


  let role;

    roles.forEach(roleRadio => {
        if (roleRadio.checked) {
            role = roleRadio.value;
        }
    });
    console.log(role);

    console.log(email + ":" + password1 + ":" + role);

        let userObj={
          "email":email,
          "password":password1,
          "role": role
    
      };
      console.log(userObj);

      try{
        Validator.isValidString(email,"Email Cannot be Blank");
       
        Password.isValidPassword(password,"Password must contain atleast 8 Charcter");
  
        Validator.isValidString(password1, "Password is Mandatory");


      userService.login(email,password1,role).then(res=>{
          let data=res.data.docs;
          console.log(data);

          if (data.length == 0) {
            alert("Invalid Login Credentials");
        }
        else {
            const user = data[0];
            localStorage.setItem("Logged_in_users", JSON.stringify(user));
            console.log("Role:", role);

            if (role == "admin") {
              alert("Login succesful");
              console.log("alert completed");
              // setTimeout(function () {
                  window.location.href = "adminhead.html"
              // }, 3000);
            }

            else if (role == "user") {
              alert("login succesful");
              // setTimeout(function () {
                  window.location.href = "list_train.html"
              // }, 3000);

          }
      }


    }).catch(err=>{
      console.error(err.message);
      alert("Unable to Login");
    });
    }

        catch(err)
        {
          console.error(err.message);
          toastr.error("Error: " + err.message);
          
      }
    
        
}    
    

  