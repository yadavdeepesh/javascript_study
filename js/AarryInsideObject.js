// Create Array inside Object 

var student = [
 {Name : "Deepesh", age : 25},
 {Name : "Shubham", age : 24},
 {Name : "Aashish", age : 26},
];

console.log(student);

for(var i = 0 ; i < student.length ; i++){
    document.write(student[i].Name + "  " + student[i].age + " <br>");
}
