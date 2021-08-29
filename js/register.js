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
        alert(userName);
        alert(mobilenumber);
        let registerObj = {
            reguserName:userName,
            regmobilenumber: mobilenumber,
            regemail: email
        };
        let formData = {
            username: userName,
            dob: dob,
            email: email,
            mobilenumber: mobilenumber,
            password: userPassword,
        };

        //Validate Form Fields...

        Validator.isValidString(mobilenumber, "Mobile Number Cannot be Blank");
        Validator.isValidString(dob, "Date Of Birth Cannot be Blank");
        Validator.isValidString(email, "Email Cannot be Blank");
        Validator.isValidString(userName, "UserName Cannot be Blank");
        Password.isValidPassword(userPassword, "Password must contain atleast 8 Characters");
        Password.isValidPassword(confirmPassword, "Password must contain atleast 8 Characters");
        alert("haiiii")
        userService.register(formData).then(res => {
            let data = res.data;
            console.log(data);
            alert("Successffully Register");
            localStorage.setItem('registerData', JSON.stringify(res.data));
            window.location.href = "login.html";
        }).catch(err => {
            alert(err.message);
            alert("Unable to register");
        });
    } 
    catch (err) {
        console.log(err.response);
        alert(err.response);
        alert("Unable to register by try");
    }
}

function setDate() {
     let previousDay = dayjs().subtract(1, 'day').toDate();
    let today = previousDay.toJSON().substr(0, 10);
    document.querySelector("#dob").setAttribute("max", today);

}
setDate();