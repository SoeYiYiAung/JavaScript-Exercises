let students=[
    [45,66,78,69,52],
    [88,78,98,80,100],
    [67,77,58,98,50]
];

function avgmark(marks) {
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
    let avg=avgmark(students[i]);
    if(avg>80){
        console.log("Grade A");
    }
    else if(avg>65){
        console.log("Grade B");
    }
    else if(avg>50){
        console.log("Grade C");
    }
    else{
        console.log("Grade D");
    }
}

let present=[
    [1,1,1,1,0,1,1,0,1,0],
    [1,1,1,0,0,1,1,1,1,1],
    [1,0,1,0,1,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
]

function checking(arr){
    let attendence=0;
    let absent=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]==1){
            attendence++;
        }
        else{
            absent++;
        }
    }
    console.log("attendence is "+attendence)
    console.log("absent is "+absent)
    let percentage=(attendence/arr.length)*100;
    console.log(percentage)
    return percentage;
}

for(let j=0;j<present.length;j++)
{
    let result=checking(present[j]);

    if(result==100)
    {
        console.log("You get bonus 2000MMK!!");
    }
    else if(result>80)
    {
        console.log("You get bonus 1000MMK!!");
    }
    else
    {
        console.log("You don't get bonus !!");
    }
}