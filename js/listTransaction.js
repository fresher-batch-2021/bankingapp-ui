let tableData = [];
userService.transactionHistoryList().then(res => {
    let data = res.data;
    console.log("response : ", data);
    tableData = data.rows;
    console.log("table list :", tableData);
    displayList(tableData);
}).catch(err => {
    alert("List Failed");
});

function displayList(tableData) {
    console.log("history :", tableData)
    let content = "";
    for (let history of tableData) {
        content =
            content + `
                <tr>
                <td>${history.doc.date}</td>
                <td>${history.doc._id}</td>
                <td>${history.doc.name}</td>
                <td>${history.doc.branch}</td>
                <td>${history.doc.mobilenumber}</td>
                <td>${history.doc.initialBalance}</td>
                <td>${history.doc.amount}</td>
                <td>${history.doc.credit}</td>
                <td>${history.doc.debit}</td>
                
                </tr>`;
    }
    document.querySelector("#transactionDetails").innerHTML = content;
}
