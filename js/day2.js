let name=document.getElementById('name');
console.log(name);
name.innerHTML="Ji";

let email=document.getElementById('email');
email.innerHTML="ii";

//arthmetic operator
let sub1=70;
let sub2=50;
let sub3=85;
let total_marks=sub1+sub2+sub3;
console.log(total_marks);

let marks=[10,20,50,40];
let total=0;
for (let i=0;i<marks.length;i++){
    total+=marks[i];
}
console.log(total);

let noodle=380;
let noodle_qty=12;
let knor=1800;
let knor_qty=1;
let water=1850;
let water_qty=3;

let total_amount=0;
total_amount=(noodle*noodle_qty+knor*knor_qty+water*water_qty);
let discount=500;
console.log(total_amount-discount);


let fahrenheit=120;
let celcius;
celcius=(fahrenheit-32)*5/9;
console.log(celcius);

let value=2**3;
console.log(value);

let count=0;
count++;
console.log(count);
console.log(++count);

let qty=count++;
console.log("qty is "+qty);
console.log(count);

let index=++count;
console.log(index);

//assignment operator
var amount=0;
var balance=70;
amount+=balance;
console.log(amount);

console.log(120==12);
console.log("a"=='A');

let a=500000;
let isValid=true;
console.log((a>500000) || (isValid==true));
console.log((a<700000) && (isValid==true));

let mark1=20;
if(mark1>=50){
    console.log(mark1+" is pass");
    console.log(`${mark1} pass!`);
}
else{
    console.log(`${mark1} fill!`);
}

let mark2=20;
if(mark2>=80){
    console.log(`${mark2} is A!`);
}
else if(mark2>=60){
    console.log(`${mark2} is B!`);
}
else{
    console.log(`${mark2} is C!`);
}


let balance1=38000000;
let rate;
 
 if(balance1>=50000000){
    rate=0.035;
 }
 else if(balance1>=30000000){
    rate=0.03;
 }
 else if (balance1>=10000000){
    rate=0.02;
 }
 else{
    rate=0;
 }
 let interest= (balance1*rate)/12;
 //let monthlyAmount=balance+(balance*monthlyRate);
 console.log(interest);