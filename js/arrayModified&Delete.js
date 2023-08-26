// how to delete and modified the array element

var arr = ["harry" , 12 , true , 4.5];

document.write(arr + "<br>");

document.write("After Modified Array element <br>");
arr[0] = "deepesh yadav";
arr[1] = 334;

document.write(arr + "<br>");

document.write("<br>After Delete Array element <br>");
delete arr[1]; // only delete the value 

document.write(arr + "<br>");
document.write("<br>"+arr[1] + "<br>"); // index is not delete


