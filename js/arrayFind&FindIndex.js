// Array find() method

document.write("<br> +++++++++++++++++++++ <br>");


var ages = [14,34,18,22]; 

document.write(ages+"<br>");

var res = ages.find(adultAge);

document.write("value of array "+res); // the value of array pass the first condition  

function adultAge(age){
    return age>=18;
}


// Array findIndex() method

document.write("<br> +++++++++++++++++++++ <br>");


var ages = [14,11,18,22]; 

document.write(ages+"<br>");

var res = ages.findIndex(adultAge);

document.write("Index value of array "+res); // the Index value of array pass the first condition  

function adultAge(age){
    return age>=18;
}
