let loginbtn=document.getElementById('login');
loginbtn.addEventListener('click',function(){
    event.preventDefault();
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    if(username==""){
        document.getElementById('user_error').innerHTML="Please enter";
    }
    else{
        document.getElementById('user_error').innerHTML="";
    }
    if(password==""){
        document.getElementById('pwd_error').innerHTML="Please enter";
    }
    else{
        document.getElementById('user_error').innerHTML="";
    }
})

let user=document.getElementById('username');
user.addEventListener('focus',function(){
    document.getElementById('user_error').innerHTML="Enter";
})

user.addEventListener('blur',function(){
    let username=document.getElementById('username').value;
    if(username==""){
        document.getElementById('user_error').innerHTML="Please enter";
    }
    else{
        document.getElementById('user_error').innerHTML="";
    }  
})