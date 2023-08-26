// create the array to another way 

document.write("Way one use array <br>");

var arr = new Array(1,2,3,4);

document.write(arr +"<br>");

document.write("<br> ");
document.write("Way two use array <br>");
var arr1 = new Array();
arr1[0] = "dk";
arr1[1] = 12;
arr1[2] = true;
for ( var i = 0 ; i < 3 ; i++) {
    document.write(arr1[i] +"<br>");
}

document.write("<br>");
document.write("Way three use array <br>");

var arr2 = new Array();
for (var j =0 ; j < 3 ; j++){
    arr2[j] = prompt("enter the value");
}

for ( var i = 0 ; i < 3 ; i++) {
    document.write(arr2[i] +"<br>");
}
