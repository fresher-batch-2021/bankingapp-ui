let tableData = [];
UserService.transactionHistoryList().then(res => {
    let data = res.data;
    console.log("response : ", data);
    tableData = data.rows;
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
