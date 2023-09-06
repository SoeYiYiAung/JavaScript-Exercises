let employee={
    name:"david",
    age:25,
    email:"david@gmail.com",
    position:"manager"
};
console.log(employee.name);
if(employee.age>30){
    console.log("Upper 30");
}
else{
    console.log("Under 30");
}

let developer=new Object();
developer.name="SU"
developer.email="s@gmail.com"
developer.dob=2000;
developer.checkAge=function () {
    return 2022- this.dob;    
}
console.log(developer.name);
console.log(developer.checkAge());
