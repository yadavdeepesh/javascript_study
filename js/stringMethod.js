// javaScript String Methods

str ="Javascript is best is language";
len= str.length;
lowercase = str.toLowerCase();
uppercase = str.toUpperCase();
document.write(lowercase+"<br>");
document.write(uppercase+"<br>");

document.write(len+"<br>");

flag = str.includes("is");
document.write(flag+"<br>");


startsWith = str.startsWith("Java");

document.write(startsWith+"<br>");

endsWith = str.endsWith("language");

document.write(endsWith+"<br>");

search = str.search("language");

document.write(search+"<br>");

match = str.match(/is/g);

document.write(match+"<br>");

indexPostion = str.indexOf("is");

document.write(indexPostion+"<br>");
lastIndexPostion = str.lastIndexOf("is");

document.write(lastIndexPostion+"<br>");

replace = str.replace("is","are");// replace only first occurence 
//replace = str.replace(/is/g,"are");// replace all postion 

document.write(replace+"<br>");
str2 = "           dk        ";
console.log(str2);
trim = str2.trim();// replace only first occurence 
//replace = str.replace(/is/g,"are");// replace all postion 
console.log(trim);
document.write(trim+"<br>");

