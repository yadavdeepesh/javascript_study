
function sum (a,b){
    var c = a+b;
    return c;
}

res = sum(22,22);

console.log("sum of two number "+res);


// second program
function totalMarks(pishics,chemistry,math){
  return pishics + chemistry + math;
}
total =totalMarks(67,77,78);
console.log("total of 3 subject "+total);

function percentage(total){
    per = total/300*100;
    return per;
}

per= percentage(total);
console.log("percentage of 3 subject "+per);
