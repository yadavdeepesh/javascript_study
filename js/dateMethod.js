// javascript date 
// JavaScript Math Methods
// toDateString();
// getDate();
// getFullYear();
// getMonth();
// getDay();
// getHours();
// getMinutes();
// getSeconds();
// getMilliseconds();
// setDate();
// setFullYear();
// setHours();
// setMilliseconds();
// setMinutes();
// setMonth();
// setSeconds();


var now = new Date();

document.write(now+"<br>");
document.write("<br>");
document.write(now.toDateString());
document.write("<br>");
document.write(now.getDate());
document.write("<br>");
document.write(now.getFullYear());
document.write("<br>");
document.write(now.getMonth());
document.write("<br>");
document.write(now.getHours());
document.write("<br>");
document.write(now.getMinutes());
document.write("<br>");
document.write(now.getSeconds());
document.write("<br>");
document.write(now.getMilliseconds());

document.write("<br>+++++++++++++++++++++set Date Method+++++++++++++++======<br>");

var now2 = new Date();
document.write("<br>");
document.write(now2.setDate(22)+"<br>");
document.write(now2.toDateString());

document.write(now2.setFullYear(2202)+"<br>");
document.write(now2.setHours(14)+"<br>");
document.write(now2.setMilliseconds(20000002)+"<br>");
document.write(now2.setMinutes(36)+"<br>");
document.write(now2.setMonth(12)+"<br>");

document.write(now2.setSeconds(33333335)+"<br>");

document.write("<br> set date <br>");

document.write(now2);