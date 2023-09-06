let username=document.getElementById('username');
username.onblur=function(){   
    if(username.value=='')
    {
        document.getElementById('user_error').innerHTML="Please enter username"
    }
    
}
username.onfocus=function(){
    document.getElementById('user_error').innerHTML=""
}

$('#email').on('blur',function(){
    if($('#email').val()=='')
    {
        $('#email_error').html('please enter email')
    }
    else{
        let email=$('#email').val();
        $.ajax({
            method:'post', //get or post
            url:'check.php', // php file name or http....
            data:{emailvalue:email},
            success:function(response){
                    //alert(response)
                    $('#email_error').html(response)
            },
            error:function(){

            }

        })
    } 
})

$('#phone').on('blur',function(){
    if($('#phone').val()=='')
    {
        $('#phone_error').html('Please enter phone number')
    }
})

$('#address').on('blur',function(){
    if($('#address').val()=='')
    {
        $('#address_error').html('Please enter address')
    }
})

$('#register').on('click',function(){
    console.log("valid");
    var valid=validate();
    var username=$('#username').val();
    var email=$('#email').val();
    var phone=$('#phone').val();
    var address=$('#address').val();
    if(valid)
    {
        
       $.ajax({
        method:'post',
        url:'store.php',
        data:{username:username,email:email,phone:phone,address:address},
        success:function(response){
            //alert(response)
            console.log("Hi")
        },
        error:function(){

        }
       })
    }
    else{

    }
})

function validate()
{
    let status=true;
    if($('#username').val()=='')
    {
        status=false;
    }
    if($('#email').val()=='')
    {
        status=false;
    }
    if($('#phone').val()=='')
    {
        status=false;
    }
    if($('#address').val()=='')
    {
        status=false;
    }

    return status;
} 
