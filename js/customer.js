function loginCheck(){
  let isLoggedIn=JSON.parse(localStorage.getItem("isLoggedIn"));
if(isLoggedIn==undefined||isLoggedIn==null||isLoggedIn==false){
alert("needed to login first");
  
  localStorage.setItem("isLoggedIn",JSON.stringify(false));
  window.location.href="Login.html";
}
}
loginCheck();

var account = function (name, balance){

   account.name = name;
   account.balance = balance;
 
   account.deposit = function (depositAmount) {
     newBalance = account.balance - depositAmount;
     console.log("Your balance is now " + newBalance);
     if (newBalance <= 0) {
       console.log("You have insufficient funds!!!");
     }
   };
 
   account.withdraw = function (withdrawAmount){
     newBalance = account.balance - withdrawAmount;
     console.log("Your balance is now " + newBalance);
     if (newBalance <= 0) {
       console.log("You have insufficient funds!!!");
     }
 
   };
 
   account.transfer = function (transferAmount){
 //got stuck here
   }
 
   console.log("Name: " + name + "; Balance: " + balance);
 }














































// let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);
// console.log(myAccountBalance);
// localStorage.setItem("senderBalance",myAccountBalance);

// function sendMoney(){
//    var enterName = document.getElementById("enterName").value;
//    var enterAmount = parseInt(document.getElementById("enterAmount").value);

//    if (enterAmount > 10000) {
//       alert("Insufficient Balance.")
//    } else {
//       var findUserBankAccount = enterName + "BankBalance";
//       var finalAmount = parseInt(document.getElementById("").innerHTML) - enterAmount;
//       var myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount
//       document.getElementById("myAccountBalance").innerText = myAccountBalance
//       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
//       alert(`Successful Transaction !!
//       Rs${enterAmount} is sent to ${enterName}@email.com.`);
//    }
//       // transaction history
//       var createPTag = document.createElement("li");
//       var textNode = document.createTextNode(`Rs${enterAmount} is sent to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
//       createPTag.appendChild(textNode);
//       var element = document.getElementById("transaction-history-body");
//       element.insertBefore(createPTag, element.firstChild);
   
//       let accObj={
//          senderName:localStorage.getItem("senderEmail"),
//          senderBalance:myAccountBalance,//after sent amount
//          sentAmount:enterAmount,
//          receiverName:findUserBankAccount
//       };
         
//       // alert(accObj.senderName);
//       //    alert(accObj.receiverName);
//       //    alert(accObj.senderBalance);
//       //    alert(accObj.sentAmount);
         
//          console.log(accObj);

//        const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
//       const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
//       // one space after Basic
//       const basicAuth='Basic '+ btoa(dbUserName+':'+dbPassword);
//       const url = "https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/netbanking"

//       axios.post(url, accObj,{ headers: {'Authorization':basicAuth}}).then(res => {

//          console.log(res);//printing in console // for user purpose
//          alert("Transaction is Successful");
//          window.location.href = "Login.html";
//      }).catch(err => {
//          console.error(err.response.data);
//          alert("Unable to transact");
//      });
//    }

// // enterName,finalAmount,myAccountBalance