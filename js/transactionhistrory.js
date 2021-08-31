userService.transactionHistory().then(res => {
    let data = res.data.rows;
    content = '';
    let userData = JSON.parse(localStorage.getItem('userName'));
    console.log("userdata :", userData);
    let emailId = userData.email;
    console.log(emailId);
    for (let history of data) {
        console.log(history)
        if (history.doc.email == emailId) {
            content += `
            <tr>
            <td>${history.doc._id}</td>
            <td>${history.doc.name}</td>
            <td>${history.doc.branch}</td>
            <td>${history.doc.mobilenumber}</td>
            <td>${history.doc.initialBalance}</td>
            <td>${history.doc.action}</td>
            <td>${histroy.doc.date}</td>
            </tr>
            `;
        }
    }
    document.querySelector("#transactionDetails").innerHTML = content;
}).catch(err => {
    alert("failed");
})