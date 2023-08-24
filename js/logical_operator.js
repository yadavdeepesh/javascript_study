// logical operator

var age =12;
// logical AND
if(age >= 18 && age <= 21){
    document.write("<br>");
    console.log("you are eligible for vote");
    document.write("you are eligible for vote");
}
else{
    document.write("<br>");
    console.log("you are not eligible for vote");
    document.write("you are not eligible for vote");
}

// logical OR
if(age >= 18 || age <= 21){
    document.write("<br>");
    console.log("you are eligible for vote");
    document.write("you are eligible for vote");
}
else{
    document.write("<br>");
    console.log("you are not eligible for vote");
    document.write("you are not eligible for vote");
}

// Logical Not Operator 
age = 12;
console.log(!age==12);
console.log(age==12);
console.log(!true);
if(!age == 12){
    document.write("<br>");
    console.log("you are valid person ");
    document.write("you are valid person ");
}
else{
    document.write("<br>");
    console.log("you are not valid person ");
    document.write("you are not valid person ");
}


// if else statement 

var name = "Deepesh Yadav";

if(name == "Deepesh Yadav"){
    document.write("<br> If <br>");
    document.write(name);
    console.log("My name is "+name);
}
else{
    document.write("<br> Else <br>");
    document.write(name);
    console.log("My name is "+name); 
}
