let patient={
    name:"david",
    email:"david@gmail.com",
    dob:"5-2-1999",
    contact:"09456987123",
    gender:"female"
};
let patient1=new Object();
let patients=[
    [patient1.name="john",patient1.email="john@gmail.com",patient1.dob="4-5-1984",patient1.gender="male"],
    [patient1.name="jin",patient1.email="jin@gmail.com",patient1.dob="4-5-1984",patient1.gender="female"],
    [patient1.name="marry",patient1.email="marryn@gmail.com",patient1.dob="4-5-1984",patient1.gender="female"]
]
let table=document.getElementById('patient');

patients.forEach(element => {
    let tr=document.createElement('tr');
    for(let j=0;j<patients[element].length;j++){
        let td=document.createElement('td');
        td.innerHTML(patients[element][j]);
    }
    tr.appendChild(td);
    table.appendChild(tr);
    
})
