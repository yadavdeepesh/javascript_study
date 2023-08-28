
// constant variable with object and array 

const a = [22,34,33,67];
console.log(a);

 //a= [99,77]; // that is not possible ,do not reassign constant array , that statement througth the error  
console.log("after override the array values");
 // but this way is use to change the const array values 
 a[0] = 100;
 a[1] = 200;
 console.log(a);
 
 // const object 

 const obj = {
    name :"Deepesh ",
    age : 24
 } 
 console.log(obj);

//  obj = {
//     city : "muzaffarnagar" // that is not possible ,do not reassign constant object  , that statement througth the error  
//  }
console.log("after override the objects values");
 // but this way is use to change the const object values 

 obj.name ="shubham";
 obj.age = 23;
 console.log(obj);
