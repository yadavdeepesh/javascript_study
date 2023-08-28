// create the object  to another way..

var person = new Object();

person.name = "Deepesh";
person.age = 24;
person.profession = "Software Engineer ";

console.log(person);

document.write(person+"<br>");
document.write(person.name+"<br>");
document.write(person.age+"<br>");
document.write(person.profession+"<br>");

// get the object values to another way 
document.write("<br> Print Object values in another way of "+person+"<br>");
document.write(person['name']+"<br>");
document.write(person['age']+"<br>");
document.write(person['profession']+"<br>");
