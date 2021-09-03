let tableValues = [];
UserService.listService().then(res => {
    let data = res.data;
    console.log("response : ", data);
    tableValues = data.rows;
    console.log("table list :", tableValues);
    displayTasks(tableValues);
}).catch(err => {
    let errorMessage = err;
    console.error(errorMessage);
    console.log("failed");
    alert("Error-" + errorMessage);
});

function displayTasks(tableData) {
    
    let content = "";
    for (let taskObj of tableData) {
        content =
            content +
            `<tr>
            <td>${taskObj.doc._id}</td>
            <td>${taskObj.doc.name}</td>
            <td>${taskObj.doc.branch}</td>
            <td>${taskObj.doc.email}</td>
            <td>${taskObj.doc.status}</td>
            <td>${taskObj.doc.initialBalance}</td>
       

            <td><button type='button' onclick="updateStatus('${taskObj.doc._id}','ACCEPTED')">Accept
                </button>&nbsp;&nbsp;&nbsp;<button type='button' onclick="updateStatus('${taskObj.doc._id}','REJECTED')">Reject</button></td>
                
                <td><button type='button' onclick="deleteFun('${taskObj.doc._id}','${taskObj.doc._rev}')">Delete</button></td>




            </tr>`;
        document.querySelector("#applicationTable").innerHTML = content;
    }
    
}


function updateStatus(id, status) {
    //call backend api and update status
    //Update customeraccounts
    const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
    const dbpassword="ec6094ae0714dc7a5ffc50a86924bef3";
    const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

    const url="https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/newaccountregister/"+id;
    console.log('Update ' + id + ',status=' + status);

    //get by id
   
    axios.get(url, { headers: { 'Authorization': basicAuth } }).then(res => {
        const applicationObj = res.data;

        applicationObj.status = status;

        //update status api
        const updateURL = url + "?rev=" + applicationObj._rev;
        console.log(updateURL);
        axios.put(updateURL, applicationObj, { headers: { 'Authorization': basicAuth } }).then(result => {
            console.log("Update row", result.data);
            alert("Updated");
            window.location.reload();

        });

    }).catch(err => {
        let errorMessage = err.response.data;
        console.error(errorMessage);
        console.log("failed");
        alert("Error-" + errorMessage);
    });
}


function deleteFun(id, revId) {
    alert("Function Works")
    console.log('Delete' + id + " " + revId);

    const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
    const dbpassword="ec6094ae0714dc7a5ffc50a86924bef3";
    const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

    const url="https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/newaccountregister/"+id+ "?rev=" + revId;
    axios.delete(url, { headers: { 'Authorization': basicAuth } }).then(res => {
        console.log("success");
        window.location.reload();
    }).catch(err => {
        let errorMessage = err.response.data.errorMessage;
        console.error(errorMessage);
        console.log("failed");
        alert("Error-" + errorMessage);
    });
}
