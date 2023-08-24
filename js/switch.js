var day = 7;

switch(day){
    case 1:
        document.write("Today is Monday");
        break;
    case 2 :
        document.write("Today is Tuesday");
        break;
    case 3 :
        document.write("Today is wednesday");
        break;
    case 4 :
        document.write("Today is thusday");
        break;
    case 5 :
        document.write("Today is Friday");
        break;
    case 6 :
        document.write("Today is Saturday");
        break;
    case 7 :
        document.write("Today is Sunday");
        break;
    default :
        document.write("Enter the valid Day::");                
}


// write a program greater of two number

var a = 190;
var b = 2220;
var c = 330;

document.write("<br>");

switch(true){
    case(a>b && a>c):
       document.write("a is greater");
       break;
    case(b>a && b>c):
       document.write("b is greater");
       break;
    default:
       document.write("c is greater");
}