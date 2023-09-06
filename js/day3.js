let temp=-2;
if(temp<0){
    console.log("freeze");
}
else if(temp<30){
    console.log("low temperature!");
}
else if(temp<50 && temp>30){
    console.log("normal temperature!");
}
else if(temp>50){
    console.log("high temperature!");
}

let value=0;
switch(value){
case value=10: console.log("correct");break;
case value=20: console.log("not correct");break;
default: console.log("default");
}

let brand="honda";
switch(brand){
    case "bmw":console.log("bmw");break;
    case "toyota":console.log("toyota");break;
    case "mecedes":console.log("mecedes");break;
    default:console.log("one of vehicles");
}

let marks=85;
switch(false){
    case (marks>80):console.log('Grade A');break;
    case (marks>65):console.log('Grade B');break;
    case (marks>50):console.log('Grade C');break;
    default:console.log('Grade D');
}


let temp1=50;
let result=(temp1>40)? "greater" :"lower";
console.log(result);

let mark=8;
let result1=(mark>80)? "A":((mark>65)?"B":(mark>50)?"C":"D");
console.log(result1);

let balance=38000000;
let answer;
let result2=(balance>=50000000)? (balance*0.035)/12 : (balance>=30000000)? (balance*0.03)/12 : (balance>=10000000)? (balance*0.02)/12 : balance/12;
console.log(result2);

let majors=new Array('IT','math','english');
for(let i=0;i<majors.length;i++){
    console.log(majors[i]);
}

let products=[
    ['laptop',450,'dell'],
    ['phone',1200,'apple'],
    ['cosmetic',250,'skit']
]
for(let row=0;row<products.length;row++){
    console.log(products[row]);
    for(let col=0;col<products[row].length;col++){
        console.log(products[row][col]);
    }
}

let products1=[
    ['laptop',450,10],
    ['phone',1200,8],
    ['cosmetic',250,15]
];
let total=0;
for(let row=0;row<products1.length;row++){
    let value=products1[row][1]*products1[row][2];
    total+=value;
}
console.log(total);

products.forEach(product => {
    console.log("Products is "+product)
    product.forEach(item =>{
        console.log("item is "+ item);
    })
});

for(const key in products){
    console.log("key is "+key);
    console.log(products[key]);

    for(const key1 in products[key]){
        console.log(products[key][key1]);
    }
}

