// example 1

document.write("<br> Example 1 <br><br>");

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(j + " ");
    }
    document.write("<br>");
}

document.write("<br> Example 2 <br><br>");

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(i + " ");
    }
    document.write("<br>");
}

document.write("<br> Example 3 <br><br>");

for (var i = 5; i >= 1; i--) {
    for (var j = i; j >= 1; j--) {
        document.write(i + " ");
    }
    document.write("<br>");
}

document.write("<br> Example 4 <br><br>");

for (var i = 5; i >= 1; i--) {
    for (var j = i; j >= 1; j--) {
        document.write(j + " ");
    }
    document.write("<br>");
}