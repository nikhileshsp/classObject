// loop statement in java script  that is for loop
document.write("here are we printing star pattern in for loop statement <br>")

// for(var row=1;row<=4;row++) //outer loop
// {
//     for(var col=1;col<=4;col++){
//         if(col<=row)
//                 document.write("*")
//                 else
//                 console.log(" ")
//     }  
//     document.write("<br > ")
    

// }



// for(var row=1;row<=4;row++) //outer loop
// {
//     for(var col=1;col<=row;col++){
//         console.log("* ")
//     }  
//     document.write("<br > ")
    

// }


// for(var a=1;a<=5;a++){
// for(var b=1;b<=a;b++){
//     for(c=1;c<=b;c++){
//         document.write(" ")
//     }
// document.write("*  ")
// }
// document.write("<br>")
// }



for(var row=1;row<=3;row++)
{
    for(var col=1;col<=row;col++){
       document.write(row)
    }
    document.write("<br> ");
}