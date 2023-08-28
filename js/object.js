// create a object in js 

var obj = {
    fname : " Deepesh ",
    lname : "Yadav ",
    age : 24,
    email :"dk@gmail.com",
    favColor : ["red ","blue","red","yellow"],
    salary : function(){
        return 25000;
    },
    fullName : function() {
        return this.fname + " " + this.lname;
    },
    living : {
        city : "muzaffarnagar",
        country : "India"
    }
}

// Access the values of given object

console.log(obj);
document.write(obj.fname + " <br>"); // print fname
document.write(obj.lname + "<br>");// print lname
document.write(obj.age + "<br>");// print age
document.write(obj.email + "<br>");// print email
document.write(obj.favColor + "<br>"); // print all array
document.write(obj.favColor[0]+ "<br>"); // print the single value of given array 
document.write(obj.salary() + "<br>");// call the salary function
document.write(obj.fullName() + "<br>");// call the fullname function 
document.write(obj.living + "<br>");// print objcet // do not print 

console.log(obj.living); // print the object in console
console.log(obj.living.city); // print city name in console
document.write(obj.living.city + "<br>");// print city of given objcet 
document.write(obj.living.country + "<br>");// print country of given objcet 


