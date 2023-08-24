// write program for student percentage

var per = 32;

if(per >= 80 && per <= 100){
    document.write("You are in Merit");
}
else if(per >= 60 && per < 80){
    document.write("You are in 1st division");
}
else if(per >= 45 && per < 60 ){
    document.write("You are in 2nd division");
}
else if(per >= 33 && per < 45 ){
    document.write("You are in 3rd division");
}
else if(per < 33 ){
    document.write("You are fail");
}
else{
    document.write("Please Enter the valid percentage::");
}

// get the time of javascript

const d = new Date();
let hour = d.getHours();
console.log(hour);
hour =19;
document.write("<br>");
if(hour<=12){
    document.write("Good Morning ");
}
else if( hour <= 18){
    document.write("Good Afternoon ");  
}
else if( hour >= 18){
    document.write("Good evening ");  
}
else{
    document.write("Good Night ");  
}

