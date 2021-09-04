/**
 * This method used to check whether email is already exists in DB
 * 
 * @param {string} email 
 * @returns true/false
 */


 async function isEmailExists(email) {
  
    const dbUsername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
    const dbPassword = "ec6094ae0714dc7a5ffc50a86924bef3";
    const basicAuth = "Basic " + btoa(dbUsername + ":" + dbPassword);
    let endPoint = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/";

    const myUrl = endPoint + "bankingapp_user/_find";
    let emailObj =
    {
        selector:
        {
            email: email
        },
        fields: ["email"]
    };
    console.log("email ", email);
    

    return axios.post(myUrl, emailObj, { headers: { 'Authorization': basicAuth } });
}
