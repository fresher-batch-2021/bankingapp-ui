
let tableData = [];
let userData = JSON.parse(localStorage.getItem('userData'));
console.log("userdata :", userData);
let emailId = userData.email;
console.log(emailId);
UserService.listuser(emailId).then(res => {
    let data = res.data;
    console.log("response : ", data);
    tableData = data.docs;
    console.log("table list :", tableData);
    displayTasks(tableData);
}).catch(err => {
    toastr.error("List Failed");
});

function displayTasks(formValues) {
    console.log(formValues);
    let content = "";
    for (let taskObj of formValues) {
        content =
            content +
            `<tr><td>${taskObj._id}</td>
            <td>${taskObj.name}</td><td>${taskObj.branch}
                </td><td>${taskObj.email}</td>
                <td>${taskObj.status}</td>
                <td>₹ ${taskObj.initialBalance}</td>
                <td><button type='button' onclick="depositAmount('${taskObj._id}','${taskObj.initialBalance}','CREDIT')">Deposit
                </button></td>
                <td><button type='button' onclick="withdraw('${taskObj._id}','${taskObj.initialBalance}','DEBIT')">Withdraw
                </button></td>
                
                </tr>`;
    }
    document.querySelector("#applicationTable").innerHTML = content;

}

const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
const dbpassword = "ec6094ae0714dc7a5ffc50a86924bef3";
const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

function depositAmount(id, balance, credit) {
    const deposit = document.querySelector("#deposit").value;
    if (deposit == null || deposit == undefined) {
        toastr.error("Please Enter the Amount");
    }
    else {

        const amount = `${deposit}`
        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/newaccountregister/" + id;
        console.log('Update ' + id + ',Deposit=' + balance);

        axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
            const applicationObj = res.data;
            applicationObj.credit = credit;
            applicationObj.initialBalance = parseInt(applicationObj.initialBalance) + parseInt(amount);
            const updateURL = url + "?rev=" + applicationObj._rev;
            console.log(updateURL);
            axios.put(updateURL, applicationObj, { headers: { 'Authorization': basicAuth } }).then(result => {
                console.log("Update row", result.data);
                toastr.success("Amount credited Successfully");
                setTimeout(function () {
                    // window.location.reload();
                }, 10000);
                history(applicationObj, credit, deposit);

            });

        }).catch(err => {
            toastr.error("Please try Again");
        });
    }
}

function withdraw(id, balance, debit) {
    event.preventDefault();
    const debitAmount = document.querySelector("#withdraw").value;
    const withdrawAmount = `${debitAmount}`
    const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/newaccountregister/" + id;
    console.log('Update ' + id + ',Deposit=' + balance);

    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
        const applicationObj = res.data;
        applicationObj.debit = debit;
        applicationObj.initialBalance = parseInt(applicationObj.initialBalance) - parseInt(withdrawAmount);
        const updateURL = url + "?rev=" + applicationObj._rev;
        console.log(updateURL);
        axios.put(updateURL, applicationObj, { headers: { 'Authorization': basicAuth } }).then(result => {
            console.log("Update row", result.data);
            toastr.success("Amount Withdrawed Successfully");
            setTimeout(function () {
                // window.location.reload();
            }, 3000);
            console.log(applicationObj, debit, debitAmount);
            history(applicationObj, debit, debitAmount);
        });


    }).catch(err => {
        toastr.error("Please try Again");
    });
}
function history(applicationObj, action, amount) {
    event.preventDefault();
    console.log("value: ", applicationObj);

    if (action == "CREDIT") {
        console.log("amount :", amount);
        applicationObj.amount = amount;
        let debit1 = "-";
        applicationObj.debit = debit1;

        let historyObj = {

            name: applicationObj.name,
            branch: applicationObj.branch,
            credit: applicationObj.credit,
            debit: applicationObj.debit,
            date: applicationObj.date,
            email: applicationObj.email,
            mobilenumber: applicationObj.mobilenumber,
            amount:"+ "+ applicationObj.amount,
            initialBalance: applicationObj.initialBalance
        }
        console.log("history", historyObj);

        let historyurl = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/transactionhistory";
        axios.post(historyurl, historyObj, { headers: { 'Authorization': basicAuth } }).then(result => {
            let data = result.data;
            console.log(data);
            // toastr.success("Credited");
            // setTimeout(function()  {
            //     window.location.reload();  
            // }, 3000);

        }).catch(err => {
            toastr.error("Failed");
        });
    }
    if (action == "DEBIT") {
        console.log("amount :", amount);
        applicationObj.amount = amount;
        applicationObj.credit = credit1;
        let historyObj = {
            name: applicationObj.name,
            branch: applicationObj.branch,
            credit: applicationObj.credit,
            debit: applicationObj.debit,
            date: applicationObj.date,
            email: applicationObj.email,
            mobilenumber: applicationObj.mobilenumber,
            amount:"- "+applicationObj.amount,
            initialBalance: applicationObj.initialBalance
        }
        console.log("history", historyObj);

        let historyurl = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/transactionhistory";
        axios.post(historyurl, historyObj, { headers: { 'Authorization': basicAuth } }).then(result => {
            let data = result.data;
            console.log(data);
            // toastr.success("Debited");
            // setTimeout(function() {
            //     window.location.reload();  
            // }, 3000);

        }).catch(err => {
            toastr.error("Please try Again");
        });
    }

}
