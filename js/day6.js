let heading=document.getElementById('heading');
console.log(heading);

heading.innerHTML="<a href='#'>Covid-19</a>";

let heading1=document.getElementById('heading1');
heading1.innerHTML="hello";

let heading3=document.getElementById('heading3');
heading3.innerHTML="hi";

let events=document.getElementsByClassName('event'); //array html collection

let contents=["event1","event2","event3"];
let photos=["1.jpg","2.jpg","3.jpg"];
for(let i=0;i<events.length;i++){
    events[i].innerHTML="<h2>"+contents[i]+"</h2>";
    events[i].innerHTML+="<img src='images/"+photos[i]+"' width=100% height=100%>";
    events[i].innerHTML+="<button class='mt-3 btn btn-primary'>see more</button>";

    if(i%2==0){
        events[i].classList.add('even');
    }
    else{
        events[i].classList.add('odd');
        }
}

let buttons=document.getElementsByTagName('button');
console.log(buttons);

let rows=document.querySelector('.row');
console.log(rows);


let flash=document.getElementById('photo');
//console.log(flash)

let photo1=["1.jpg","2.jpg","3.jpg","1.jpg","2.jpg","3.jpg"];
for (let j=0;j<photo1.length;j++){
    if(j%2==0){
        flash.innerHTML+="<div class='col-2 even'> <img src=images/"+photo1[j]+" width=100%></div>";

    }
    else{
    flash.innerHTML+="<div class='col-2 odd'> <img src=images/"+photo1[j]+" width=100%></div>";

    }
}
flash.style.backgroundColor="red";
