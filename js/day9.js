let newradio=document.getElementById('new');

newradio.addEventListener('click',function(){
    let business=document.querySelector('.business');
    if(!business.classList.contains('hide')){
        business.classList.add('hide');
    }
    if(business.classList.contains('show')){
        business.classList.remove('show');
    }
    
})

let customer=document.querySelectorAll('input[name=customer]');
console.log(customer);
customer.forEach(element =>{
    element.addEventListener('change',function(){
        console.log("change in event listener");
    })
});

/* function change(event){
    console.log(event.value);
    if(event.value=='new'){
        console.log("New Customer");
    }
    else{
        console.log("Existing Customer");
    }
} */

let country=document.getElementById('country');
country.addEventListener('change',function(){
    console.log("change in select");
    console.log(country.value);
    console.log(country.options[country.selectedIndex].value)
})

document.getElementById('html').addEventListener('change',function(){
    if(document.getElementById('html').checked)
    {
        console.log("HTML is checked");
    }
    else{
        console.log("No checked");
    }
})
/*
let item1=document.getElementById('item1');
item1.addEventListener('change',function(){
    let list=document.getElementById('list');
    if(item1.checked){
        let listitem=item1.parentElement;
        list.removeChild(listitem);
    }
})
*/

let list=document.getElementById('list');
list.addEventListener('change',function(){
    console.log(event.target)
    list.removeChild(event.target.parentElement);
})