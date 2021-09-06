let userData = JSON.parse(localStorage.getItem('userData'));
let emailId = userData.email;
let tableData = [];
UserService.transactionHistory(emailId).then(res => {
    let data = res.data;
    console.log("response : ", data);
    tableData = data.docs;
    console.log("table list :", tableData);
    displayList(tableData);
}).catch(err => {
    toastr.error("List Failed");
});

function displayList(tableValue) {
    console.log("history :", tableValue)
    let content = "";
    for (let history of tableValue) {
        content =
            content + `
                <tr>
                <td>${history.date}</td>
                <td>${history._id}</td>
                <td>${history.name}</td>
                <td>${history.branch}</td>
                <td>${history.mobilenumber}</td>
                <td>${"₹ "+history.initialBalance}</td>
                <td>${history.amount}</td>
                <td>${history.credit}</td>
                <td>${history.debit}</td>
                
                </tr>`;
    }
    document.querySelector("#transactionDetails").innerHTML = content;
}

