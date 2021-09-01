let userData = JSON.parse(localStorage.getItem('userName'));
let emailId = userData.email;
let tableData = [];
userService.transactionHistory(emailId).then(res => {
    let data = res.data;
    console.log("response : ", data);
    tableData = data.docs;
    console.log("table list :", tableData);
    displayList(tableData);
}).catch(err => {
    alert("List Failed");
});

function displayList(tableData) {
    console.log("history :",tableData)
    let content = "";
    for (let history of tableData) {
        content =
            content + `
                <tr>
                <td>${history.date}</td>
                <td>${history._id}</td>
                <td>${history.name}</td>
                <td>${history.branch}</td>
                <td>${history.mobilenumber}</td>
                <td>${history.initialBalance}</td>
                <td>${history.amount}</td>
                <td>${history.credit}</td>
                <td>${history.debit}</td>
                
                </tr>`;
    }
    document.querySelector("#transactionDetails").innerHTML = content;
}

