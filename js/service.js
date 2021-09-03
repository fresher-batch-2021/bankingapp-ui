class UserService {
    static login(email, password) {
        const selectedData = {
            selector:
            {
                email: email,
                password: password,
            
            },
            fields: ["id", "email","mobilenumber"]

        };

        const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
        const dbpassword = "ec6094ae0714dc7a5ffc50a86924bef3";
        const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);
        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bankingapp_user/_find";
        return (axios.post(url, selectedData, { headers: { 'Authorization': basicAuth } }));
    }



    static register(registerObj) {

        const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
        const dbpassword = "ec6094ae0714dc7a5ffc50a86924bef3";
        const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);
        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bankingapp_user";
        return (axios.post(url, registerObj, { headers: { 'Authorization': basicAuth } }));

    }


    static listuser(email) {

        const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
        const dbpassword = "ec6094ae0714dc7a5ffc50a86924bef3";
        const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

        const userData = {
            selector: {
                email: email
            },
            fields: ["_id", "name", "branch", "email", "status", "initialBalance"]
        }

        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/newaccountregister/_find";
        return (axios.post(url, userData, { headers: { 'Authorization': basicAuth } }));
    }


    static listService() {
        const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
        const dbpassword = "ec6094ae0714dc7a5ffc50a86924bef3";
        const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);

        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/newaccountregister/_all_docs?include_docs=true";
        return (axios.get(url, { headers: { 'Authorization': basicAuth } }));

    }



    static transactionHistory(emailId) {
        const dbUserName = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
        const dbPassword = "ec6094ae0714dc7a5ffc50a86924bef3";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);
        const userData = {
            selector: {
                email: emailId
            },
            fields: ["_id", "name", "branch", "emailId", "initialBalance", "credit", "date", "debit", "mobilenumber", "amount"]
        }
        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/transactionhistory/_find";
        return (axios.post(url, userData, { headers: { 'Authorization': basicAuth } }));
    }

    static transactionHistoryList() {
        const dbUserName = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
        const dbPassword = "ec6094ae0714dc7a5ffc50a86924bef3";
        const basicAuth = 'Basic ' + btoa(dbUserName + ':' + dbPassword);

        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/transactionhistory/_all_docs?include_docs=true";
        return (axios.get(url, { headers: { 'Authorization': basicAuth } }));
    }
}



