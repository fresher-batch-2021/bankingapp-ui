function login() {
  event.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;


  try{
      Validator.isValidString(email,"Email Cannot be Blank");
      Password.isValidPassword(password,"Password must contain atleast 8 Charcter");

      let userObj={
          "email":email,
          "password":password
      };
      console.log(userObj);
      userService.login(email,password).then(res=>{
          let data=res.data.docs;
          console.log(data);

          if (data.length == 0) {
            alert("Invalid Login Credentials");
        }
        else {
            const user = data[0];
            alert("Login Successful");
            // localStorage.setItem('userName', JSON.stringify(email));
            window.location.href = "index.html";
        }



      })


    }catch(err)
    {
        console.error(err.message);
        alert("Unable to Login");
        alert(err.message);

    }


  }

  