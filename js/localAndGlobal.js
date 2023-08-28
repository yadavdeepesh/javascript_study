var a =10 ; // global variable

function printValue(){
    document.write(a + "<br>");// 10
    var b = 20 ; // local variable
    document.write(b+ "<br>");
}

printValue();

document.write(b);// b is not defined error 
// local variable is not access the outside of the function