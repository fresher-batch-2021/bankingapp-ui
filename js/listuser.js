
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
                <td>${taskObj.status}</td></tr>`;
    }
    document.querySelector("#applicationTable").innerHTML = content;

}
