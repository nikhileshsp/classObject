//switch sttement of java script

var area = 'trangle';
var pi=3.143, r=5,l=8, b=6;
switch(area){
    case 'circle' :
    console.log("the area of circle is "+ pi*r**2);
    break;
    
    case 'trangle' :
    console.log("the area of trangle  is "+ (l*b)/2);
    break;


    case 'rectangle' :
    console.log("the area of rectangle   is "+ l*b);
    break;


    case 'default':
        console.log("please enter valid text")

}

