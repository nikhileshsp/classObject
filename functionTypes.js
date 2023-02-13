// there are a four type of function
/*
first = simple function caling function
swcond = function parameter 
third = function argument (there is parameter and function argumnet os diffrent, function parameter is defined to the next to the arametersapterate  by comas,)
fourth = function expression 
fifth is the = return keywords
sixth = anonymous function
*/

// simple function

function fun(){
    console.log("this is the simple function");
}
fun();

function add(){
    var a=12,b=10;
    var result= a+b;
    console.log(a+b);
}

add();


// parameter function

function addition(num1,num2){
 res=num1+num2;
    console.log(res);
}

addition(12,12);


// function expression


// function addi(num1,num2){
//     res=num1+num2;
//        console.log(res);
//    }
   
//     var funExp =addi(54,12);
//     funExp;


    // return Keywords in jscript

    function multi(a,b){
        return total= a*b;

    }

var funExpr =multi(12,12)
console.log(funExpr);


function teacher(){
ans= student(20);
console.log(ans)

}

function student(assignment){

   return assignment*assignment;
}

// anonymous Function in java script

var funExpr= function(x,y){
    return  subs=x-y;
}

var res=funExpr(120,25);
var resi=funExpr(12,2);
console.log(res,resi);

