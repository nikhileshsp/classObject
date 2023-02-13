
// var maths=78,eng=87;
// var res=maths+eng;

// var myname=78+"patil";
// console.log(myname);


// var value="78"+97;
// console.log(typeof(value));

// var infinity= null;
// var infinix;
// console.log(typeof(infinity));
// console.log(typeof(infinix));

var MyNameIs= "Nikhilesh PAtil "
var MyPhomeNo=8983247985;

// console.log(MyNameIs);
// console.log(MyPhomeNo);

// console.log(isNaN(MyNameIs) );
// console.log(isNaN(MyPhomeNo) );



// NaN===NaN;
// Number.NaN===NaN;
// isNaN(NaN);
// isNaN(Number.NaN);

// console.log(Number.NaN===NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(NaN===NaN)


// Function Declareation

function niks(){
   console.log("this is a declaration functiom")
}
niks();

// Functon expression.

var nikhil= function (){
    console.log("this is a expression function")

}
nikhil();


// Parameter function in java script

function bankEmployee() {
    var atmPin= 1234667
    accountHolder(atmPin);
}

function loanAccount()
{

}
function accountHolder(atmPin){

console.log("Account Holde your atm pin is"+atmPin)

}

var bank=bankEmployee();
// console.log(bank)




//arrow function

var funexp = ()=> console.log("this is a function arrow");

var funexpr = ()=> 
{
    console.log("this is a function arrow second");
}

funexp();
funexpr();


