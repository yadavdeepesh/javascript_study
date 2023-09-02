document.write("++++++++++++++Number+++++++++++++++");
var num ="30";

var res = Number(num);

document.write("<br>");
document.write(res);
document.write("<br>");
document.write("<br>++++++++++++++parseInt+++++++++++++++<br>");

var num1 = "45.34";

var res = Number.parseInt(num1);

document.write("<br>");
document.write(res);

document.write("<br>++++++++++++++parseInt+++++++++++++++<br>");

var num1 = "45.77";

var res = Number.parseFloat(num1);

document.write("<br>");
document.write(res);

document.write("<br>++++++++++++++isFinite()+++++++++++++++<br>");

// var num3 = Infinity; // false

var num3 = "hlo";
// var num3 = "888.00009";// true
document.write("<br>");
var res = Number.isFinite(num3);
document.write(res);


document.write("<br>++++++++++++++isInteger()+++++++++++++++<br>");

// var num3 = Infinity; // false

// var num3 = 23;//true
var num3 = "888.00009";// false
document.write("<br>");
var res = Number.isInteger(num3);
document.write(res);


document.write("<br>++++++++++++++isFixed()+++++++++++++++<br>");

let a = 5.56789;
let n = a.toFixed(2);
document.write(n);

document.write("<br>++++++++++++++toPrecision()+++++++++++++++<br>");

let b = 5.56789;
let n1 = a.toPrecision(3);
document.write(n1);



