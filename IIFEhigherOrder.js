function niks(){
    console.log("this is a higher order function");
    
}

function niks2(){
    console.log("anather function")
}

niks();
//---------------------------------------------------------------------------------------

function nikhil(){
   
    return function nikhil2(){
        console.log("anather function")
    }
}



nikhil()()

