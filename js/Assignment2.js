let Hotel={
    name:'Hotel Lovely',
    address:'Ngwe Saung',
    contact:'+959789456321'
}

let available=[];
let not_available=[];
let hotel=new Object();
hotel.name="Jusmine";
hotel.address="Kalaw";
hotel.contact="123654789";
hotel.check=function(total_room,booked_room){
    for(let i=0;i<total_room.length;i++){
        if(booked_room.includes(total_room[i]))
        {
            not_available.push(total_room[i]);
        }
        else{
            available.push(total_room[i]);
        }
    }
    return available;
}
console.log("Name --> "+ hotel.name+" hotel");
console.log("Location --> "+hotel.address);
console.log("Available rooms --> "+hotel.check(['R1','R2','R3','R4','R5','R6','R7'],['R3','R1','R5','R7']));



let Employee={
    firstname:"david",
    lastname:"Peter",
    email:"david@gmail.com",
    phone:"09456871238",
    address1:"Ygn",
    basic_salary:300000,
    leaves:2
};
let employee=new Object();
let extra_money;
employee.firstname="Phyu";
employee.lastname="Sin";
employee.email="phyu@gmail.com";
employee.basic_salary=500000;
employee.leaves=0;
    if(employee.leaves==0){
        extra_money=(employee.basic_salary)*(10/100);
    }
    else{
        extra_money=0;
    }  
console.log(employee.email+" -- Your bonus money is "+extra_money);
