//1 
let sum = 0

for (let i = 5; i < 16; i++) {

    sum += i;
}

;
console.log(sum)

//2

for (let i = 0; i < "Vakaras".length;  i++) {
    console.log("Vakaras"[i]);
}


//3

for (let i = 1; i <= 10; i++) {
    console.log(`6 * ${i} = ${6 * i}`);
}

console.clear();

//4 


for (let i = 5; i >0; i--) {
    console.log(i);
}
console.log('BOOM');

//5



for (let sum = 0, i =4; i <= 18; i += 2) {
    sum += i;
    if (i === 18) console.log(sum);
}

console.clear ();


// fUnkcijos 
//1





function sum1 (a, b){
    return a + b
}

const e = sum1 (2, 2);
console.log (e);
//2

function subtract (c, d){
    return c - d
}

const f = subtract (2, 2);
console.log (f);

//3

function multiply (g, h){
    return g * h
}

const z = multiply (2,2);
console.log(z); 

//4

function divide (x, y){
  return x / y  
}
const w = divide (2,2);
console.log(w);

//5

function average (a, b){
return  (a+b)/2
}
console.log(average(10,20));

//6

function arTeigiamas(skaicius) {
    return skaicius > 0;
}

console.log(arTeigiamas(2));  
console.log(arTeigiamas(-1)); 

//7

function arLyginis(skaicius) {
    return skaicius % 2 === 0; 
}

console.log(arLyginis(2));  
console.log(arLyginis(3));  

console.clear();

const numbers = [3, 5, 7, 15];

const result = Math.min(...numbers);

console.log(result);
