// array in js
// javascript array is an object that represents a collection of similar type of elements.

var arr = [10,20,30,40,50,60];
document.write("Print all Array Elements: <br>"); // undefined
document.write(arr + "<br><br>"); // undefined
document.write(arr[5] + "<br>"); // 60
document.write(arr[6] + "<br>"); // undefined

document.write("<br> Length of Array :"+arr.length+"<br>");

document.write("<br> Print the Array Elements Using for loop ::<br>");
document.write("<ul>");
for (var a = 0 ; a < arr.length ; a++){
    document.write("<li>");
    document.write("Index "+ a + " value = "+arr[a]);
    document.write("</li>");
}
document.write("</ul>");

// array is also contain different types of values
document.write("<br> Print The Array Elements <br>array is also contain different types of values <br><br> "); // undefined
var arrdiff = [12,"deepesh",23.54,"null",true,false,"----"];
document.write("<ul>");
for (var a = 0 ; a < arrdiff.length ; a++){
    document.write("<li>");
    document.write("Index "+ a + " value = "+arrdiff[a]+ "<br>");
    document.write("</li>");
}
document.write("</ul>");