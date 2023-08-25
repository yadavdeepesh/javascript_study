//   Example of continue statement
document.write("Using continue statement loop <br>");
for (let i = 1; i < 5; i++) {
    if (i == 3){
       continue;
    }
     document.write(i);
    document.write("<br>");
  }

document.write("<br>");
document.write("Using break statement loop <br>");
//   Example of break statement

for (let i = 1; i < 5; i++) {
    if (i == 3){
       break;
    }
     document.write(i);
    document.write("<br>");
  }