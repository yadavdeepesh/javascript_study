// even and odd nember program.
var num =  prompt("Enter the number");

if(num % 2 == 0){
    document.write(num +" even number");
}

else{
    document.write(num +" odd number");
}

// even and odd nember program using loop .

document.write("<br><br> Even and Odd program using loop <br> <br>");

for(var i = 1 ; i <= num; i++){
    if(i % 2 == 0){
        document.write(i + " Number is even <br>");
    }
    else{
        document.write(i + " Number is odd <br>");
    }
}