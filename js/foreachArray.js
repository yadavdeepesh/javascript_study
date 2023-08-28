var arr =[1,2,3,4,5,66];

var res = arr.forEach(function (values , index){
    document.write("index "+index+" values = "+values+"<br>");
})

document.write("<br> Another way to use loop <br>");
caches
var res = arr.forEach(loop);

function loop(values , index){
    document.write("index "+index+" values = "+values+"<br>");
}

