let students=[
    [45,66,78,69,52],
    [88,78,98,80,100],
    [67,77,58,98,50]
];

let average= (marks)=> {
    let total=0;
    marks.forEach(mark => {
        total+=mark;
    });
    let average=total/marks.length;
    console.log("avg is "+average);
    return average;
}

for(let i=0;i<students.length;i++)
{
    console.log(average(students[i]));
}


let result=(a,b,c)=>{
    return a+b+c;
}
alert(result(5,17,298));

let ans=(d,e,f)=>{
    return (d+e+f)/3;
}
console.log(ans(1,1,1));

let even=(number)=>{
    if(number%2==0)
    {
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
even(5);