// import axios from "axios";


const dbUserName='apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
const dbPassword='3bc2893c0a2a1ec42d9b17840b18447b';
var   endpoint='https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/netbanking';
const basicAuth='Basic '+btoa(dbUserName+':'+dbPassword);
    

// export class crud{

    // add
      function addData(obj,urlEnd) {

      const url=endpoint+urlEnd;
      console.log(url);
        axios.post(url,obj,{headers:{Authorization:basicAuth}}).then(res =>{
            alert("data added succesfully");
            return res.data;
        }).catch(err =>{
            console.log(err.response.data);
            alert("failed");
            
        });
    }

    // delete
    function deleteData(database,id,rev,success){
        const url=endpoint+database+'/'+id+'?rev='+rev;

        axios.delete(url,{headers:{Authorization:basicAuth}}).then(res=>{
            alert("deleted succesfully");
            window.location.href=succes;
            
        }).catch(err =>{
            alert("error in deleting");
            console.log(err.response.data);
            
        });
    }

    // getData
    
    