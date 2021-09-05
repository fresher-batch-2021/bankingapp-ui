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
          let data=res.data.docs[0];
          console.log(data);
          // alert(data.role);

          if (data.role == "ADMIN") {
            toastr.success("","login successful",{
              // preventDuplicates=true
            });

            console.log("toastr completed");
            setTimeout(function () {
              localStorage.setItem("userData",JSON.stringify(data));
                window.location.href = "adminhead.html"
            }, 1000);     
        }
        else if (data.role == "USER") {
            toastr.success("login Successful");
            setTimeout(function () {
              localStorage.setItem("userData",JSON.stringify(data));
                window.location.href = "index.html"
            }, 1000);

        }

          if (data.length == 0) {
            toastr.error("Invalid Login Credentials");
            setTimeout(function () {}, 1000)
        }
        // else {
        //     const user = data[0];
        //     toastr.success("Login Successful");
        //     setTimeout(function(){
        //       window.location.href = "index.html";
        //     }, 2000);
        //      localStorage.setItem('userName', JSON.stringify(user));
           
        // }



      })


    }catch(err)
    {
        console.error(err.message);
        toastr.error("Unable to Login");
        toastr.error(err.message);

    }


  }

  