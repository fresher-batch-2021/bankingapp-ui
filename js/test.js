let details =[{name:"yesh",email:"yesh@email",amount:1000},{}];
let count=1;
var content=`
<table class="table table-hover table-bordered">
   <caption>table created</caption>
   <thead>
       <tr class="table-danger">
           <th scope="col">Sr. No.</th>
           <th scope="col">Name</th>
           <th scope="col">E-mail</th>
           <th scope="col">Bank Balance(in Rs)</th>
       </tr>
   </thead>
   <tbody>
   ` ;
for(let detail of details){
   content +=`
   <tr class="table-info">
   <td scope="row">${count}</td>
   <td>${detail.name}</td>
   <td>${detail.email}</td>
   <td>
    <p id="BankBalance">${detail.amount}</p>
   </td>
</tr>`
count++;
}
let end=`</tbody>
</table>`;
content+=end;
document.querySelector(".table-responsive").innerHTML=content;