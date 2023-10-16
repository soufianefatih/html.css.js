let userName = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let userNumber = document.getElementById('userNumber')
let userMsg = document.getElementById('userMsg')
let sendBtn = document.getElementById('sendBtn')
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
        <button class='btn btn-danger' onclick='deleteUser(`+i+`)'>Delete</button>
        </td>
        
        </tr>`;
        
    }
    document.getElementById('tablebody').innerHTML=tableRow
}


function deleteUser(i) {
    users.splice(i,1)
    showData()
    
}

