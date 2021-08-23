const dbusername = "apikey-v2-zyhv5j7i61imeby1qya0ma2ejrc0fkf9n4e4bl3w5gn";
const dbpassword="ec6094ae0714dc7a5ffc50a86924bef3";
const basicAuth = "Basic " + btoa(dbusername + ":" + dbpassword);
class userService {
    /**
     * 
     * @param {String} email 
     * @param {String} password 
     * @returns 
     */
    static login(email, password) {
alert("im in")
        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bankingapp_user/_find";

        const requestData = {
            selector: {
                email: email,
                password: password
            },
            fields: ["email","_id"]
        };
        
        console.log(requestData);

        axios.post(url, requestData, {
            headers: { Authorization: basicAuth }}).then(res=>{
                console.log(res.data)
                let data=res.data.docs;
                console.log(data)
                console.log("amri"+data);

                if(data==undefined)
                {
                    alert("invalid credentials");
                }
                else if(data.length==0)
                {
                    alert("invalid credentials");
                    return"Invalid credentials";
                }
                else{
                    const user=data;
                    localStorage.setItem("LOGGED_IN_USER",JSON.stringify(data));
                    localStorage.setItem("IsLoggedIn",true);
                    alert("Login successful");
                    window.location.href="index.html"
                }

            }).catch(err=>
                {
                    console.log(err.response.data);
                    if(err.response.data.errorMessage)
                    {
                        alert(err.response.data.errorMessage);
                    
                    }
                    else{
                        alert("login failed");
                    }
                    window.location.href="login.html";
                });
    }

    static register(registerObj) {

        const url = "https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bankingapp_user";
        console.log(basicAuth);


        return axios.post(url, registerObj, {
            headers: { Authorization: basicAuth },
        });
    }
}
























        //       {
        //              static register(email,password)
        //             {
        //                 const url="https://fffdcced-9a09-44ae-aa2f-e27add7efeb7-bluemix.cloudantnosqldb.appdomain.cloud/bankingapp_user"
        //                 const registerObj = {
        //             "email": email,
        //             "password": password,
        //             "confirmpassword": confirmpassword
        //               };

        //       return axios.post(url, registerObj,{ headers: {'Authorization':basicAuth}});
        //     }
        // }