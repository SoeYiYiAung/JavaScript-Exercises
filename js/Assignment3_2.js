let list=document.getElementById('list');

let dolist=document.createElement('ul');

let toDoLists=['to attend the class','to date with friends','to do homework','to watch KSeries'];
toDoLists.forEach(element => {
    let li=document.createElement('li');
    li.innerText=element;
    dolist.appendChild(li);
})
list.appendChild(dolist);