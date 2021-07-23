var value0=0;
var value1=0;
var value2=0;
var label0=0;
var label1=0;
var label2=0;
function timeAdder(value0,value1,value2){
    
    
    switch(value0){
        case typeof value0!=Number:
            const error=console.log("error m8");
            return console.log(error);
        break;
        case value0===1:
            label0=" Day ";
        break;
         default: label0=" Days ";
        break;
    }
    switch(value1){
        case typeof value1!=Number:
            const error=console.log("error m8");
            return console.log(error);
        break;
        case value1===1:
            label1=" Hour ";
        break;
        case value1===24:
            value0=value0+1;
        
        default: label1=" Hours ";
        break;
    }
    switch(value2){
        case typeof value2!=Number:
            const error=console.log("error m8");
            return console.log(error);
        break;
        case value2===1:
            label2=" Minute ";
        break;
        default: label2=" Minutes ";
        break;
    }

   /* if(value0===1){
         label0=" Day ";                
    } else{                             //old idea using if statement....
         label0=" Days "
    }  
    if(value1===1){
        label1=" Hour ";
    } else{
        label1=" Hours "
    }
    if(value2===1){
        label2=" Minute ";
    } else{
        label2=" Minutes "
    } */
    const timee=(value0+label0+value1+label1+value2+label2);
        console.log("Operation of adding time completed succesfully, the final result is= "+timee);
} 

console.log("Data adder will show you the result. It will have format like this: Day/s|Hour/s|Minute/s")
console.log("I actually code some examples");
timeAdder(3,25,0);
timeAdder(4,0,1)

timeAdder(15,23,0);
timeAdder(4,2,59);





















//Never mind old switch case ideas 
/*    switch(label0){
        case value0===1:
            label0=" Day ";
        break;
        default: label0=" Days ";
        break;

    }
    switch(label1){
        case value1===1:
            label1=" Hour ";
        break;
        case value1===24:
            value0++;
        break;
        default: label1=" Hours ";
        break;

    }
    switch(label2){
        case value2===1:
            label2=" Minute ";
        break;
        default: label0=" Minutes ";
        break;
    }
*/ 