// Arrays Methods
var arr = ["ravi ","shubham","Ashish" , "Ramesh"];
var numArr = [66,98,22,23,20,49];
// sort array element

document.write("<br> After Sort String , Number Array"+"<br>");

document.write("<br> String Array " + arr + "<br>");

document.write("<br> Number Array " + numArr + "<br>");

document.write("<br> After Sort String , Number Array"+"<br>");

document.write("<br>Sort String Array " + arr.sort() + "<br>");

document.write("<br> Sort Number Array " + numArr.sort() + "<br>");

document.write("<br>Reverse String Array " + arr.sort() + "<br>");

document.write("<br>Reverse Number Array " + numArr.sort() + "<br>");


document.write("<br>Pop Array " + numArr.pop() + "<br>");

document.write("<br>Push Array " + numArr.pop(55) + "<br>");

document.write("<br>Pop Array " + numArr + "<br>");

document.write("+++++++++++++++++++++++++++ ");
var arr2 = ["dd","ty","ss"];
document.write("<br> Array is <br> " + arr2 + "<br>");
arr2.shift();
document.write("<br>shift Array Element  <br>" +arr2 + "<br>");
arr2.unshift("dd");
document.write("<br>Unshift Array Element <br>" + arr2 + "<br>");

// concat() and join() method 

var a = ["deepesh","Eshu ","Shalu"];

var b = a.concat([222,44,66]);
document.write("Concat The Two Array Away One <br> ");
document.write(b+"<br>");
var d =["55",true,false];
var c = ["Ravi ","Aashish" ,"Sumit"];
var f = a.concat(c,d);
document.write("<br>Concat The Three Array (a,<br> ");

document.write(f+"<br>");

// join() this is use to convert the array Element nto string 

var arrJoin = a.join("<br>");
document.write("<br> Join The Array <br>");
document.write(arrJoin+"<br>");
