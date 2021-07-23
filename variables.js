//let  have block scope range and cannot be used outside. We should usually use this method
//var  can be mentioned and called in whole code so it can generate bugs we shouldnt use this method!
//const  is safe way to declare something what must be constant
//hoisting  is lifting code blocks to the top

function greeting(){
   var goon = true;
   if(goon===true){
        var fName="general_Kenobi";//var
   }

console.log("Hello "+ fName); //everything fine var have long range 
   
}
greeting()


// down here I will use let with shorter range 
function helloLet(){
   var goOn = true;
   if(goOn===true){
        let secName="Bob"; //let
   }

console.log("Hello "+ secName); //as we see! program throws error because 
//let has been called out of block!
   
}
helloLet()


//const    it will throw error because of const
const constName="Adrian";
constName="NoAdrian";
console.log(constName);
//ok I must mention that we can cheat const command with .push probably .shift too :D
