// for in loop with object

var obj = {
    name : "Deepesh",
    age : 25,
    city : "muzaffarnagar"
}

console.log(obj);

// using for in loop 

for(var key in obj){
    document.write("key :  "+ key +" value  : "+ obj[key]+"<br>");
}