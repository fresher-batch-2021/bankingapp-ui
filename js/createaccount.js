function account() {
    event.preventDefault();

    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const fatherName = document.querySelector("#fatherName").value;
    const email = document.querySelector("#email").value;
    const gender = document.querySelector("#gender").value;
    const dob = document.querySelector("#dob").value;
    const mobilenumber = document.querySelector("#mobilenumber").value;
    const state = document.querySelector("#state").value;
    const currentAddress = document.querySelector("#currentAddress").value;
    const permanentAddress = document.querySelector("#permanentAddress").value;
    const branch = document.querySelector("#branch").value;
    const religion = document.querySelector("#religion").value;
    const community = document.querySelector("#community").value;
    const aadhar = document.querySelector("#aadhar").value;
    try {
        Validator.isValidString(firstName, "FirstName cannot be blank");
        Validator.isValidString(lastName, "LastName cannot be blank");
        Validator.isValidString(fatherName, "Fathername cannot be blank")
        Validator.isValidString(dob, "DateOfBirth cannot be blank");
        Validator.isValidContact(mobilenumber, "MobileNumber must contain 10 digit");
        
        Validator.isValidString(gender, "Gender cannot be blank");
        Validator.isValidString(state, "State cannot be blank");
        Validator.isValidString(currentAddress, "Current Address cannot be blank");
        Validator.isValidString(permanentAddress, "Permanent Address cannot be blank");
        Validator.isValidString(branch, "Branch cannot be blank");
        Validator.isValidString(religion, "Religion cannot be blank");
        Validator.isValidNumber(aadhar, "Aadhar number must contain 12 digit");

        const userObj = {
            "firstName": firstName,
            "lastName": lastName,
            "fatherName": fatherName,
            "email": email,
            "DOB": dob,
            "mobilenumber": mobilenumber,
            "gender": gender,
            "state": state,
            "currentAddress": currentAddress,
            "permanentAddress": permanentAddress,
            "branch": branch,
            "religion": religion,
            "community": community,
            "aadharNumber": aadhar
        };
        console.log(userObj);
        localStorage.setItem('userData', JSON.stringify(userObj));
        toastr.success("Successfully Created");
        setTimeout(function(){
            window.location.href = "profile.html";  
        }, 2000);
       
    } catch (err) {
        console.error(err.message);
        toastr.error(err.message);
        toastr.error("Account Creation has been Failed");
    };
}
function address() {
    const permanentaddress1 = document.getElementById("currentAddress").value;
    document.getElementById("permanentAddress").innerHTML = permanentaddress1;
}


function setDate() {
    let previousDay = dayjs().subtract(15, 'year').toDate();

    let today = previousDay.toJSON().substr(0, 10);
    document.querySelector("#dob").setAttribute("max", today);

}
setDate();