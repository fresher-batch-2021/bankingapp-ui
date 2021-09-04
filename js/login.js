function login() {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  

  try{
      Validator.isValidString(email,"Email Cannot be Blank");
      Password.isValidPassword(password,"Password must contain atleast 8 Charcter");

      let userObj={
          "email":email,
          "password":password,
            
      };
      console.log(userObj);
      UserService.login(email,password).then(res=>{
          let data=res.data.docs;
          console.log(data);


        //   if (role == "admin") {
        //     toastr.success("login succesful");
        //     console.log("toastr completed");
        //     setTimeout(function () {
        //         window.location.href = "adminhead.html"
        //     }, 3000);     
        // }
        // else if (role == "USER") {
        //     toastr.success("login succesful");
        //     setTimeout(function () {
        //         window.location.href = "index.html"
        //     }, 3000);

        // }

          if (data.length == 0) {
            toastr.error("Invalid Login Credentials");
            setTimeout(function () {}, 1000)
        }
        else {
            const user = data[0];
            toastr.success("Login Successful");
            setTimeout(function(){
              window.location.href = "index.html";
            }, 2000);
             localStorage.setItem('userName', JSON.stringify(user));
           
        }



      })


    }catch(err)
    {
        console.error(err.message);
        toastr.error("Unable to Login");
        toastr.error(err.message);

    }


  }

  