
let tableData = [];
let userData = JSON.parse(localStorage.getItem('userName'));
console.log("userdata :", userData);
let emailId = userData.email;
console.log(emailId);
userService.listuser(emailId).then(res => {
    let data = res.data;
    console.log("response : ", data);
    tableData = data.docs;
    console.log("table list :", tableData);
    displayTasks(tableData);
}).catch(err => {
    alert("List Failed");
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
                <td>${taskObj.initialBalance}</td>
                <td><button type='button' onclick="depositAmount('${taskObj._id}','${taskObj.initialBalance}','CREDIT')">Deposit
                </button></td>
                <td><button type='button' onclick="withdrawAmount('${taskObj._id}','${taskObj.initialBalance}','DEBIT')">Withdraw
                </button></td>
                
                </tr>`;
    }
    document.querySelector("#applicationTable").innerHTML = content;

}

const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
const dbpassword = "ec6094ae0714dc7a5ffc50a86924bef3";
const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

function depositAmount(id, balance, action) {
    const deposit = document.querySelector("#deposit").value;
    const amount = `${deposit}`
    const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/newaccountregister/" + id;
    console.log('Update ' + id + ',Deposit=' + balance);

    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(result => {
        const applicationObj = result.data;
        applicationObj.action = action;
        applicationObj.initialBalance = parseInt(applicationObj.initialBalance) + parseInt(amount);
        const updateURL = url + "?rev=" + applicationObj._rev;
        console.log(updateURL);
        axios.put(updateURL, applicationObj, { headers: { 'Authorization': basicAuth } }).then(result => {
            console.log("Update row", result.data);
            alert("Amount credited Successfully");
            window.location.reload();

        });

    }).catch(err => {
        alert("Failed");
    });
}
function withdrawAmount(id, balance, action) {

    const withdraw = document.querySelector("#withdraw").value;
    const withdrawAmount = `${withdraw}`
    const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/newaccountregister/" + id;
    console.log('Update ' + id + ',Deposit=' + balance);

    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(result => {
        const applicationObj = result.data;
        applicationObj.action = action;
        applicationObj.initialBalance = parseInt(applicationObj.initialBalance) - parseInt(withdrawAmount);
        const updateURL = url + "?rev=" + applicationObj._rev;
        console.log(updateURL);
        axios.put(updateURL, applicationObj, { headers: { 'Authorization': basicAuth } }).then(result => {
            console.log("Update row", result.data);
            alert("Amount Withdrawed Successfully");
            window.location.reload();

        });

    }).catch(err => {
        alert("Failed");
    });
}