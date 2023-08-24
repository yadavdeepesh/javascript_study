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

for(i=1;i<=100;i++){
    helloWorld();
    document.write(i);
    document.write("<br>");
}