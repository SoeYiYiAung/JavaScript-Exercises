let movies=[
    ['Alchemy of Souls','images/1.jpg','This is historical drama.'],
    ['Interest of Love','images/2.jpg','This is office romance drama.'],
    ['Dream High','images/3.jpg','This is musical drama.']
]
let movie=document.getElementById('movie');
let division=document.createElement('div');

movies.forEach(element => {
    
    console.log(element);

    let li2=document.createElement('li');
    li2.innerHTML="<img src='element[1]' height='150px' width=50%>";
    division.appendChild(li2);

    let li1=document.createElement('li');
    li1.innerText=element[0];
    division.appendChild(li1);

    let li3=document.createElement('li');
    li3.innerText=element[2];
    division.appendChild(li3);
    
})

movie.appendChild(division);

