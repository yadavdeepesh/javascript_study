var arr = ["Sumit ", "Abhi ", 44 ];
document.write("arr = "+arr + "<br>");
if(Array.isArray(arr)== true){
    document.write("<br> Array <br> ");
}
var arr2 = 45;
document.write("<br> arr2 "+ arr2 + "<br>");
if(Array.isArray(arr2)== false){
    document.write("<br> Not Array");
}

var arrSearch = ["dk","sumit","dk","dk","Aman","Khushi"];
document.write("<br>"+arrSearch+"<br>");
var indexNumber = arrSearch.indexOf("dk",1);

document.write("<br> Index Of Search  "+indexNumber);

var indexNumber1 = arrSearch.lastIndexOf("dk",3);

document.write("<br> Index Of Search  "+indexNumber1);