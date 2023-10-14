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

    users.push(user)    
})
