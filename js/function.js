function helloWorld(){
    document.write("hello world");
    document.write("<br>");
}

/*
helloWorld();
helloWorld();
helloWorld();
helloWorld();
helloWorld();
helloWorld();
helloWorld();
helloWorld();
helloWorld();
*/

// for(i=1;i<=100;i++){
//     helloWorld();
//     document.write(i);
//     document.write("<br>");
// }

// parameterized function
// default value
function firstLastName(first="Tushar",last="Yadav"){
    document.write("hello "+first+" "+last);
    document.write("<br>");
}

firstLastName("Deepesh","Yadav");
firstLastName("khushi","Yadav");
firstLastName();
