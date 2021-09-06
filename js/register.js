function register() {
    event.preventDefault();

    //Getting values from Forms..
    const userName = document.querySelector("#userName").value;
    const mobilenumber = document.querySelector("#mobilenumber").value;
    const dob = document.querySelector("#dob").value;
    const email = document.querySelector("#email").value;
    const userPassword = document.querySelector("#userPassword").value;
    const confirmPassword = document.querySelector("#confirmPassword").value;
    try {
        let registerObj = {
            reguserName: userName,
            regmobilenumber: mobilenumber,
            regemail: email
        };
        console.log(registerObj);
        let formData = {
            username: userName,
            dob: dob,
            email: email,
            mobilenumber: mobilenumber,
            password: userPassword,
            role: "USER"
        };
        //Validate Form Fields...
        Validator.isValidString(mobilenumber, "Mobile Number Cannot be Blank");
        Validator.isValidString(dob, "Date Of Birth Cannot be Blank");
        Validator.isValidString(email, "Email Cannot be Blank");
        Validator.isValidString(userName, "UserName Cannot be Blank");
        Password.isValidPassword(userPassword, "Password must contain atleast 8 Characters");
        Password.isValidPassword(confirmPassword, "Password must contain atleast 8 Characters");


        isEmailExists(email).then(res => {
            let data = res.data.docs[0];
            console.log(res);
            if (data != null) {

                toastr.error("This email Id is already exists");
                setTimeout(function () {}, 1000)
            } else {


                UserService.register(formData).then(res => {
                    let data = res.data;
                    console.log(data);
                    
                    toastr.success("Successfully Register");
                    setTimeout(function() {
                        window.location.href = "login.html";  
                    }, 1000);
                    localStorage.setItem('registerData', JSON.stringify(res.data));
                    
                }).catch(err => {
                    alert(err.message);
                    alert("Unable to register");
                });

            }
        }

        );
    } catch (err) {
        console.error(err.message);
        alert(err.message);
        alert("Failed");
    };
}

function setDate() {
    let previousDay = dayjs().subtract(15, 'year').toDate();

    let today = previousDay.toJSON().substr(0, 10);
    document.querySelector("#dob").setAttribute("max", today);

}
setDate();