// while loop 

var a = 10;

while(a >= 1){
    document.write(a+ " Hi Deepesh ");
    document.write("<br>");
    a = a - 1;
}

// do while loop 

document.write("DO WHILE LOOP <br>");
var b = 1;

do {
    document.write(b+ " Hi Deepesh ");
    document.write("<br>");
    b++;
}while(b<=10);

num =prompt("Enter the Number");

// for loop print table 
if(num!==null){
    for (var i = 1 ;i<=10 ; i++){
        document.write(num+" * "+i+" = "+num*i);
        document.write("<br>");
    }
}
else{
    document.write(" You are not enter the number ");
}
