/*console.log('hello');
//alert('yo');
var b ='smoothie';
console.log(b);
var someNumber = 45;
console.log(someNumber);

var age=prompt('what is your age?');
document.getElementById('someText').innerHTML = age;
*/       
let Fruits = ['apple', 'banana', 'pear' ];
//Fruits = new Array ('apple', 'banana', 'pear' );
console.log(Fruits);
Fruits[0] = 'orange';
console.log(Fruits);
for (let d =1; d<Fruits.length+5; d++){
    console.log(Fruits);
}

    /* const fib = (n)=>{
    if (n<=2) return 1;
    return fib(n-1)+(n-2);
    };
console.log(fib(5));
console.log(fib(2));


console.log(fib(1)); */

console.log(Fruits.join('--'));

console.log(Fruits, Fruits.pop(),Fruits);

console.log(Fruits.unshift('uwuwlenanas'),Fruits);
console.log(Fruits);
console.log(Fruits[4]);
let vegetables = ['asparagus','broccoli'];
let allgroceries = Fruits.concat(vegetables);
console.log(allgroceries);
console.log(allgroceries.slice(1,5));
console.log(allgroceries.reverse());

console.log(allgroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 45, 17];
console.log(someNumbers.sort(function(a, b) {return a-b}  ));


let emptyArray = new Array();
for (let num= 0; num<11; num++){
    emptyArray.push(num);
}
console.log(emptyArray);
 