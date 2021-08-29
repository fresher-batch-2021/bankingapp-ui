 //Get values from Personal Information File
 let userData = JSON.parse(localStorage.getItem('userData'));
 console.log("value",userData);
 console.log(userData.firstName);
 document.querySelector("#firstName").innerHTML = userData.firstName;
 document.querySelector("#lastName").innerHTML = userData.lastName;
 document.querySelector("#fatherName").innerHTML = userData.fatherName;
 document.querySelector("#dateOfBirth").innerHTML = userData.DOB;
 document.querySelector("#gender").innerHTML = userData.gender;
 document.querySelector("mobilenumber").innerHTML=userData.mobilenumber;
 document.querySelector("#currentAddress").innerHTML = userData.communicationAddress;
 document.querySelector("#permanentAddress").innerHTML = userData.permanentAddress;
 document.querySelector("#state").innerHTML = userData.state;
 document.querySelector("#district").innerHTML = userData.district;
 document.querySelector("#religion").innerHTML = userData.religion;
 document.querySelector("#community").innerHTML = userData.community;
 document.querySelector("#aadharNumber").innerHTML = userData.aadharNumber;


 //Get Values from Edit option
 let formDetails = JSON.parse(localStorage.getItem('editform'));

 document.querySelector("#firstName").innerHTML = formDetails.firstName;
 document.querySelector("#lastName").innerHTML = formDetails.lastName;
 document.querySelector("#fatherName").innerHTML = formDetails.fatherName;
 document.querySelector("#dateOfBirth").innerHTML = formDetails.DOB;
 document.querySelector("mobilenumber").innerHTML=userData.mobilenumber;
 document.querySelector("#gender").innerHTML = formDetails.gender;
 document.querySelector("#communicationAddress").innerHTML = formDetails.communicationAddress;
 document.querySelector("#permanentAddress").innerHTML = formDetails.permanentAddress;
 document.querySelector("#state").innerHTML = formDetails.state;
 document.querySelector("#branch").innerHTML = formDetails.district;
 document.querySelector("#religion").innerHTML = formDetails.religion;
 document.querySelector("#community").innerHTML = formDetails.community;
 document.querySelector("#aadharNumber").innerHTML = formDetails.aadharNumber;

 
 

 let formObj = {
     "PersonalInformation": {
         "firstName": formDetails.firstName,
         "lastName": formDetails.lastName,
         "fatherName": formDetails.fatherName,
         "dateOfBirth": formDetails.DOB,
         "mobilenumber":formDetails.mobilenumber,
         "gender": formDetails.gender,
         "religion": formDetails.religion,
         "community": formDetails.community,
         "aadharNumber": formDetails.aadharNumber,
     },
     "address": {
         "currrentAddress": formDetails.communicationAddress,
         "permanentAddress": formDetails.communicationAddress,
         "state": formDetails.state,
         "branch": formDetails.district,
     }

 }
 console.log(formObj);

 try {
     let viewApplication = {
         "name": registerDetails.regName,
         "mobilenumber": formDetails.district,
         "email": registerDetails.regEmail,
         "status": "pending"
     }
     console.log("View-Application", viewApplication);

     let applicationData = {
         name: registerDetails.regName,
         branch: registerDetails.branch,
         district: formDetails.district,
         mobilenumber: formDetails.mobilenumber,
         email: registerDetails.regEmail,
         status: "Pending"
     }

     UserService.addService(applicationData).then(res => {
         let data = res.data;
         console.log(data);
         alert("Please Logout Before Leaving");
     })
 } catch (err) {
     console.error(err.message);
     alert(err.message);
     alert("Unable to register");
 }

