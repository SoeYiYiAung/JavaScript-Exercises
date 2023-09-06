//Assignment-1
let num_textile1=12;
let num_textile2=5500;
let price1;
let price2;
let cost1; 
let cost2;
let total_cost=0;

if(num_textile1>10){
    price1=23000;
    cost1=num_textile1*price1;
    total_cost+=cost1;
    console.log(cost1);
}
else{
    price1=24500;
    cost1=num_textile1*price1;
    total_cost+=cost1;
    console.log(cost1);
}

if(num_textile2>5000){
    price2=230;
    cost2=num_textile2*price2;
    total_cost+=cost2;
    console.log(cost2);
}
else{
    price2=242;
    cost2=num_textile2*price2;
    total_cost+=cost2;
    console.log(cost2);
}

console.log("Total cost is --> "+total_cost);


//Assignment-2
let employee=[
    ['Aung Aung',1200],
    ['Mg Mg',1200],
    ['Tun Tun',1200],
    ['Su Su',1200],
    ['Ni Ni',1200]
];
let total=0;
for(let row=0;row<employee.length;row++){
    let value=employee[row][1];
    total+=value;
}
let average_salary=total/employee.length;
console.log("Average salary is --> "+average_salary);


//Assignment-3
let numbers=[15,5,7,8,1];
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%5==0){
        console.log(numbers[i]+" is factor of 5");
    }
}


//Assignment-4
let discount;
let total_point=3002;
let balance=50000;

if(total_point>3000){
    discount=1500;
}
else if(total_point>2000 && total_point<3000)
{
    discount=1000;
}
else if(total_point>1000 && total_point<2000){
    discount=500;
}
else{
    discount=0;
}
console.log("Total balance is --> "+ balance);
balance=balance-discount;
console.log("Balance after discoun is --> "+balance);