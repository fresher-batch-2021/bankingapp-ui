function account() {
    event.preventDefault();
    alert("haai");
        const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const fatherName = document.querySelector("#fatherName").value;
    const gender = document.querySelector("#gender").value;
    const dob = document.querySelector("#dob").value;
    const mobilenumber=document.querySelector("#mobilenumber").value;
    const state = document.querySelector("#state").value;
    const currentAddress = document.querySelector("#currentAddress").value;
    const permanentAddress = document.querySelector("#permanentAddress").value;
    const branch = document.querySelector("#branch").value;
    const religion = document.querySelector("#religion").value;
    const community = document.querySelector("#community").value;
    const aadhar = document.querySelector("#aadhar").value;

    if (firstName == "" || firstName.trim() == "") {
        alert("FirstName cannot be blank");
        return false;
    } else if (lastName == "" || lastName.trim() == "") {
        alert("LastName cannot be blank");
        return false;
    } else if (fatherName == "") {
        alert("Fathername cannot be blank");
        return false;
    } 
    else if (dob == "") {
        alert("DateOfBirth cannot be blank");
        return false;
    }
    else if (mobilenumber == "") {
        alert("mobilenumber cannot be blank");
        return false;
    }
     else if (gender == "") {
        alert("Gender cannot be blank");
        return false;
    } else if (state == "") {
        alert("State cannot be blank");
    } else if (currentAddress == "") {
        alert("Current Address cannot be blank");
        return false;
    } else if (permanentAddress == "") {
        alert("Permanent Address cannot be blank");
        return false;
    } else if (branch == "") {
        alert("Branch cannot be blank");
        return false;
    } else if (religion == "") {
        alert("Religion cannot be blank");
        return false;
    } else if (aadhar.length != 12) {
        alert("Aadhar number contain 12digit");
        return false;
    } else {
        alert("Registration Successful");
        const userObj = {
            "firstName": firstName,
            "lastName": lastName,
            "fatherName": fatherName,
            "DOB": dob,
            "mobilenumber":mobilenumber,
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
        window.location.href = "profile.html";
    }
}

function address() {
    const permanentaddress1 = document.getElementById("currentAddress").value;
    document.getElementById("permanentAddress").innerHTML = permanentaddress1;
}