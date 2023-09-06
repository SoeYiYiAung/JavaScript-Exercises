let num1=document.getElementById("num1");
let num2=document.getElementById("num2");
let result=document.getElementById("result");

function add(){
    if(checkValidation()){
        alert("Please enter the values");
    }
    else{
        result.innerHTML=(parseInt(num1.value)+parseInt(num2.value));
    }
    
}

let subtract=document.querySelector('.subtract');
subtract.onclick=function(){
    if(checkValidation()){
        alert("Please enter the values");
    }
    else{
        result.innerHTML=(parseInt(num1.value)-parseInt(num2.value));
    }
    
}

let multiply=document.querySelector('.multiply');
multiply.onclick=multliplication;

function multliplication(){
    if(checkValidation()){
        alert("Please enter the values");
    }
    else{
        result.innerHTML=(parseInt(num1.value)*parseInt(num2.value));
    }
    
}


let divide=document.querySelector('.divide');
divide.onclick=division;
    function division(){
        if(checkValidation()){
            alert("Please enter the values");
        }
        else{
            if(num2.value==0){
                alert("Error! Num2 can't be 0! ");
            }
            else{
                result.innerHTML=(parseInt(num1.value)/parseInt(num2.value));
            }
        }
    
        //event listener
    /* divide.addEventListener("click",function(){
        if(checkValidation()){
            alert("Please enter the values");
        }
        else{
            if(num2.value==0){
                alert("Error! Num2 can't be 0! ");
            }
            else{
                result.innerHTML=(parseInt(num1.value)/parseInt(num2.value));
            }
        }
    }) */ 
}



function checkValidation(){
    let error=false;
    if(num1.value=="" || num2.value==""){
        error=true;
    }
    return error;
}