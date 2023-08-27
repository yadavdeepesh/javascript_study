
// Array some() and every() method

// var ages = [12,14,17,12]; // this array output false

var ages = [12,14,18,12]; // this array output true

document.write(ages+"<br>");

var res = ages.some(adultAge);

document.write(res);

function adultAge(age){
    return age>=18;
}

// Array every() method

document.write("<br> +++++++++++++++++++++ <br>");

//var ages = [12,14,18,12]; // this array output false
var ages = [44,34,18,22]; // this array output true

document.write(ages+"<br>");

var res = ages.every(adultAge);

document.write(res);

function adultAge(age){
    return age>=18;
}
