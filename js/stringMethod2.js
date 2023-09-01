var str = "javascript";
var postion = str.charAt(7);

document.write(postion+"<br>");

var postion = str.charCodeAt(6);// return asci code 

document.write(postion+"<br>");


var formchar = String.fromCharCode(65);


document.write(formchar);

// concat 2 and more strings 

var fname ="Deepesh ";
var mname =" Kumar";

var lname =" Yadav";

var merge = fname.concat(mname,lname);


document.write("<br>++++++++++ concat() method +++++++++++++<br>");


document.write(merge+"<br>");

document.write("<br>++++++++++ split() method +++++++++++++<br>");

var cricketers = "Virat  babar Surya Rohit bumrah Afridi";
document.write(cricketers+"<br>");
var cricketersArray = cricketers.split("i")
document.write(cricketersArray);
console.log(typeof cricketersArray);
console.log(cricketersArray);

document.write("<br>++++++++++ repeat(2) method +++++++++++++<br>");
var str ="Deepesh Yadav";

var repeat = str.repeat(2);

document.write(repeat+"<br>");

document.write("<br>++++++++++ slice(start,end) method +++++++++++++<br>");

var str = "My name is deepesh yadav";
// var slice = str.slice(0,5);
var slice = str.slice(-2);
document.write(slice +"<br>");



document.write("<br>++++++++++ substr(start,end) method +++++++++++++<br>");

var str = "My name is deepesh yadav";
// var slice = str.slice(0,5);
var substr2 = str.substr(1,5);
document.write(substr2 +"<br>");

document.write("<br>++++++++++ substring(start,end) method +++++++++++++<br>");

var str = "My name is deepesh yadav";
// var slice = str.slice(0,5);
var substring = str.substring(1,5);
document.write(substring +"<br>");

document.write("<br>++++++++++ toString() method +++++++++++++<br>");

var num = 30;
 var convertString = num.toString();

document.write(20+convertString+"<br>");

var str = "My name is deepesh yadav";

document.write(str.valueOf());