let amountInAccount = 0;
let deposit = 0;
let withdraw = 0;

//check balance
function checkBalance() {
 let amount = document.getElementById('amount'); //returns the <p> tag with id 'amount'
    amount.innerText ="Your available balance is Rs" + amountInAccount;
}

$("#bank-actions").change(function(){
    console.log($(this).val());

    let selectboxVal = $(this).val();
    switch (selectboxVal) {
        case "check":
            checkBalance();
            break;
        case "withdraw":
            withdrawMoney();
            break;
        case "deposit":
            depositMoney();
            break;
        default: 
            break;
    }
});

//deposit money
function depositMoney() {
    let deposit = prompt("How much are you depositing today?");
    amountInAccount = amountInAccount + parseInt(deposit);
    checkBalance();
}

//withdraw money
function withdrawMoney(){
  let withdraw = prompt("how much are you taking out today?");
  
  if(amountInAccount <= 0 || withdraw > amountInAccount){
    alert("Please make a deposit. Your account does not have sufficient funds");
  }
  else{
    amountInAccount = amountInAccount - parseInt(withdraw);
     checkBalance();
  }
}