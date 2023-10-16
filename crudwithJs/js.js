let userName = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let userNumber = document.getElementById('userNumber')
let userMsg = document.getElementById('userMsg')
let sendBtn = document.getElementById('sendBtn')
let formType = document.getElementById('formType')
let curentRow = document.getElementById('curentRow')




let users = [];


sendBtn.addEventListener('click',function () {
    let user = {
        name : userName.value,
        email: userEmail.value,
        number:userNumber.value,
        message : userMsg.value
    }

    users.push(user) ;
    showData()   
})



function showData() {
    let tableRow = '';
    for (let i = 0; i < users.length; i++) {
        tableRow += `<tr>
        <td>`+users[i].name+`</td>
        <td>`+users[i].email+`</td>
        <td>`+users[i].number+`</td>
        <td>`+users[i].message+`</td>
        <td>
        <button   type="button" class="btn btn-danger" onclick='deleteUser(`+i+`)'>Delete</button>
        <button  type="button"class='btn btn-info' onclick='updateUser(`+i+`)'>Update</button>

        </td>
        
        </tr>`;
        
    }
    document.getElementById('tablebody').innerHTML=tableRow
}


function deleteUser(i) {
    users.splice(i,1)
    showData()
    
}
function updateUser(i) {
    userName.value= users[i].name
    userEmail.value=users[i].email
    userNumber.value=users[i].number
    userMsg.value=users[i].message
    formType.value ='update'
    curentRow.value=i
    
}

