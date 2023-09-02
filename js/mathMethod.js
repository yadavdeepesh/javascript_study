 // javascript math method

//  ceil(x);
// floor(x);
// round(x);
// trunc(x);
// max(x,y,z,...,n);
// min(x,y,z,...,n);
// sqrt(x);
// cbrt(x);
// pow(x,y);
// random();
// abs(x);
// PI

document.write("<br>++++++++++++++++ceil()+++++++++++++++++++++++++<br>")
var a = Math.ceil(-1.99);
document.write(a+"<br>");

document.write("<br>++++++++++++++++floor()+++++++++++++++++++++++++<br>")
var a = Math.floor(2.59);
document.write(a+"<br>");

document.write("<br>++++++++++++++++round()+++++++++++++++++++++++++<br>")
var a = Math.round(-2.59);
document.write(a+"<br>");

document.write("<br>++++++++++++++++trunc()+++++++++++++++++++++++++<br>")
var a = Math.trunc(5.590000);
document.write(a+"<br>");

document.write("<br>++++++++++++++++max(n1,n2,n3)+++++++++++++++++++++++++<br>")
var a = Math.max(-5,-6,-7,-88,-90);
document.write(a+"<br>");

document.write("<br>++++++++++++++++min(n1,n2,n3)+++++++++++++++++++++++++<br>")
var a = Math.min(-6,-88,-99);
document.write(a+"<br>");

document.write("<br>+++++++++++++++++++++++sqrt(x)++++++++++++++++++<br>")
var a = Math.sqrt(36);
document.write(a+"<br>");

document.write("<br>+++++++++++++++++++++++cbrt(x)++++++++++++++++++<br>")
var a = Math.cbrt(125);
document.write(a+"<br>");


document.write("<br>+++++++++++++++++++++++power(x,y)++++++++++++++++++<br>")
var a = Math.pow(4,2);
document.write(a+"<br>");


document.write("<br>+++++++++++++++++++++++random()++++++++++++++++++<br>")
var a = Math.floor(Math.random()*10+1);
document.write(a+"<br>");

document.write("<br>+++++++++++++++++++++++abs()++++++++++++++++++<br>")
var a = Math.abs(23);
document.write(a+"<br>");

document.write("<br>+++++++++++++++++++++++PI++++++++++++++++++<br>")
var a = Math.PI;
document.write(a+"<br>");