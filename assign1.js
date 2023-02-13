///1. What is the value of y after evaluating the expression given below?
//   y+=++y + y-- + --y; when let y=8

var y=8;
debugger;
y+= ++y + y-- + --y;
console.log(y);


// 2. Give the output of the following expression:
//o a+=a++ + ++a + --a + a--; when a=7


var a=7;
a+= ++a + a-- + --a;
console.log(a);


///3. If let y=10 then find:
///o z=(++y * (y++ +5));


let y=10