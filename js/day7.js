let event1=document.querySelector('.event1');
event1.innerHTML="<h2>Event1</h2>";
event1.innerHTML+="<img src='images/1.jpg' width='100%' height='200px'>";

let heading2=event1.querySelector('h2');
heading2.style.fontSize='40px';
heading2.style.color="red";

heading2.classList.add('heading2');

let img=document.querySelector('img');
console.log(img);

let event2=document.querySelector('.event2');
event2.innerHTML="<h2>Event2</h2>";
event2.appendChild(img);

//how to create element & append in parent element
let ul=document.createElement('ul');
let li=document.createElement('li');
li.innerText='New List Item';
ul.appendChild(li);

event1.appendChild(ul);

let buylist=document.createElement('ul');

let toBuyLists=['fruit','cosmetic','shoes','accessories'];
toBuyLists.forEach(element => {
    let li=document.createElement('li');
    li.innerText=element;
    let button=document.createElement('button');
    button.classList.add('btn');
    button.classList.add('btn-success')
    button.innerText="Done";
    buylist.appendChild(li);
    li.appendChild(button);
})
event1.appendChild(buylist);


let popular=document.querySelector('.popular');

for(let i=0;i<4;i++){
    let column=document.createElement('div');
    column.classList.add('col-md-3');
    let textbox=document.createElement('input');
    let type=textbox.setAttribute('type','text');
    textbox.classList.add('form-control');

    column.appendChild(textbox);
    popular.appendChild(column);
}

console.log(buylist.firstChild);
console.log(buylist.lastChild);
console.log(buylist.firstElementChild);
console.log(buylist.lastElementChild);

let firstItem=document.querySelector('li:first-child');//tagname-pseudo element
console.log(firstItem);

