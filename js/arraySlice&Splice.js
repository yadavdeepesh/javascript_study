var arr = ["Dk","Virat","Chris Gayle" ,"ABD villess"];

// slice method

document.write("<br> array is <br>" + arr +"<br>");

document.write("<br> After Using Slice and Splice <br>");
arr2 = arr.slice(1,3);
document.write("<br>" + arr2);

// splice merhod 

document.write("<br> Splice method use <br>");
arr.splice(1,2,"MS DHONI","Ravendra Jadeja");
// this method is use delete and add element specific location 
document.write("<br>" + arr);




