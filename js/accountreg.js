

$(document).ready(function() { 
  
    $("#account-select").change(function() {
      $("#show-address").show('slide');
      window.scrollTo(0,document.body.scrollHeight);
    });
    
    $("#show-address").click(function(){
      $("#address-history").show('slide');
      window.scrollTo(0,document.body.scrollHeight);
    });
    
    $("#yes").click(function(){
      $("#current-address").show('slide');
      $("#non-Indian").hide();
      window.scrollTo(0,document.body.scrollHeight);
    });
    
    $("#no").click(function(){
      $("#non-Indian").show('slide');
      $("#current-address").hide();
      window.scrollTo(0,document.body.scrollHeight);
    });
    
    $("#yes-prev").click(function(){
      $("#previous-address").show('slide');
      $("#get-consent").show('slide');
      window.scrollTo(0,document.body.scrollHeight);
    });
    
     $("#no-prev").click(function(){
      $("#get-consent").show('slide');
      $("#previous-address").hide();
      window.scrollTo(0,document.body.scrollHeight);
    });
    
    $("#get-consent").click(function(){
      $("#your-consent").show('slide');
      window.scrollTo(0,document.body.scrollHeight);
    });
    
    $("#credit-click").click(function() {
      $("#info-request").show('slide');
      window.scrollTo(0,document.body.scrollHeight);
    });
    
    $("#info-click").click(function() {
      $("#submit-app").show('slide');
      window.scrollTo(0,document.body.scrollHeight);
    });
    
    $('#app-form').on('submit', function(){
      var arr = $(this).serializeArray();
      console.log(arr);
      return false;
  });
  });




  function logValues() {
    // event.preventDefault();
    // const firstname = document.querySelector("#firstname").value;
    // const middlename = document.querySelector("#middlename").value;
    // const lastname = document.querySelector("#lastname").value;
    // const dateofbirth = document.querySelector("#dob").value;
    // const mobilenumber = document.querySelector("#phone").value;

    // if (mobilenumber.length != 10) {
    //     window.alert("Phone number must be 10 digits.");
    //     mobilenumber.focus();
    //     return false;
    // } 



    //  const address = document.querySelector("#address").value;
    // const district = document.querySelector("#district").value;
    // const branch = document.querySelector("#branch").value;
    // const state = document.querySelector("#state").value;
    // const pincode = document.querySelector("#pincode").value;


    // //    console.log(fname+" "+mname+" "+lname+" "+email+" "+dob);
    // //    console.log(mobno+" "+aadharno+" "+pancardno+" "+address+" "+district+" "+branch+" "+state+" "+pincode);

    // let userobj = {
    //     "Firstname": firstname,
    //     "middlename": middlename,
    //     "lastname": lastname,
    //     // "email": email,
    //     "dob": dateofbirth,
    //     "mobno": mobilenumber,
    //     // "aadharno": aadharnumber,
    //     // "pancardno": pancardnumber,
    //     "address": address,
    //     "district": district,
    //     "branch": branch,
    //     "state": state,
    //     "pincode": pincode
    // };
    // console.log(userobj);
    alert("Registration Successfully");
    window.location.href = "aboutus.html";

  }

 

// function loginCheck(){
//     let isLoggedIn=JSON.parse(localStorage.getItem("isLoggedIn"));
// if(isLoggedIn==undefined||isLoggedIn==null||isLoggedIn==false){
//   alert("Needed to login first");
//     localStorage.setItem("isLoggedIn",JSON.stringify(false));
//     window.location.href="Login.html";
// }
// }
// loginCheck();