// Array findIndex() method

document.write("<br> Array Filter  +++++++++++++++++++++ <br>");


var ages = [14,11,23,18,22]; 

document.write(ages+"<br>");

var res = ages.filter(adultAge);

document.write("filter array  elements "+res); // return the array  pass the condition  

function adultAge(age){
    return age>=18;
}