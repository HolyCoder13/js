//Firstly I declared my values!
var artistName="Arctic Monkeys";     //Name of band
var typeOfMusic="Rock";            //another var which contains music genre
var title="Are u mine?";          //title
const durationTime="4.43";
var awards = ["NME award", "Music video of the year","Also my personal like :D"];
let musicType ="Energetic indierock";
const yearOfRelase="2012";
let myRating ="My rating: 9/10";

// Here im checking if my values are filled but its commented
/*  console.log("Checking if valueas are filled..") Here im checking if my values are filled

console.log(Boolean(artistName));
console.log(Boolean(typeOfMusic));
console.log(Boolean(title));
console.log(Boolean(durationTime));
console.log(Boolean(awards));
console.log(Boolean(musicType));
console.log(Boolean(yearOfRelase)); 
connsole.log(Boolean(myRating));      */
 
if (artistName){                  //Also added some Booleans :D
    console.log("Artist name filled succesfully!");
}else{console.log("Not filled!");}

// I ll finally print my values in console 

console.log(artistName);
console.log(typeOfMusic);
console.log(title);
console.log(durationTime);
console.log(awards);
console.log(musicType);
console.log(yearOfRelase); 
console.log(myRating);