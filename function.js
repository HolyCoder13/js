// Choose if entered value is a name of mortal or something else 
function checkerIf(name){
   console.log("Entered value is"+" "+name);
   console.log("Value you entered is a "+(typeof name));
   if(typeof name==="string"){
      console.log(name+" is a name of Mortal")
      console.log("because its string :)");
   }else{
      console.log("Its not a humans name!")}
}
checkerIf("Socrates");


// function that choose if you have entered chocolate or vanilla donut
var myArray =["chocolate","vanilla"];

function donut(type){
   var myArray =["chocolate","vanilla"];
   var chocolate="chocolate";
   var vanilla="vanilla";
   if(type==="chocolate"){
      console.log("You choose chocolate flavor")
   }else if(type==="vanilla"){
      console.log("You choose vanilla flavor")
   }else(console.log("Wrong! We have only"+myArray));
}
var chocolate="chocolate";
var vanilla="vanilla";
donut(chocolate);

