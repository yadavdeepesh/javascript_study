// array map method

var arr = [11,4,5,6];

var b = arr.map(test);
document.write(b);

function test(x){
    return x*2;
}

document.write("+++++++++++++++++++++++++++++<br>");
document.write("<br> Array of Object <br> ");
// map method  use aray of object 

var arrObj =[
    {fname: "deepesh", lname:"yadav"},
    {fname: "aashish", lname:"nainwal"},
    {fname: "shubham", lname:"sharma"},
    {fname: "shubham", lname:"pandit"}
];

var obj = arrObj.map(printValue);
document.write("<br>"+obj);

function printValue(value){
    return value.fname +" "+ value.lname;
}