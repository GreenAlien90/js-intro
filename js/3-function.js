function empty(){
    //logika
}

// Jonas -> Labas, Jonas!
// Maryte -> Labas, Maryte!
// Petras -> Labas, Petras!
// Ona -> Labas, Ona!

function hiPerson(name) {
    // return 'Labas, ' + name + '!';
    return `Labas, ${name}!`;
}

console.log(hiPerson('Jonas'));
console.log(hiPerson('Maryte'));
console.log(hiPerson('Petras'));
console.log(hiPerson('Ona'));

// 2+2 = 4
// 7+5 = 12

function sum (a, b){
    return a + b
}

const e = sum (2, 2);
console.log (e);

const f = sum (7, 5)
console.log(f);

const g= sum (-7,15);
console.log(g);

console.clear();

//100 -> 121 Eur
//200 -> 242 Eur
// 73 -> 88.33 Eur

function priceWithVAT (price){
   const updatedPrice = price * 1.21;

    return updatedPrice + ' Eur';
}

const p1= priceWithVAT(100);
console.log(p1);

const p2 = priceWithVAT(200);
console.log(p2)

const p3 = priceWithVAT(73);
console.log(p3);

console.clear();

function nameLength(name){
const size = name.length;
return `Zodis "${name}"yra sudarytas is ${size} raidziu.`;


}

const nl1 = nameLength('Jonas');
console.log(nl1);

// 5 -> Gautas skaicius: 5.
// -13 -> Gautas skaicius: -13.
// 777 -> Gautas skaicius: 777.

function gotNumber (n){
//return 'Gautas skaicius: ' + n + '.';
return `Gautas Skaicius:${n}.`;

}

const gn1 = gotNumber(5);
const gn2 = gotNumber(-13);
const gn3 = gotNumber(777);

console.log(gn1);
console.log(gn2);
console.log(gn3);

console.clear();

// 2, 2 -> 2 +2 = 4
// 7, 5 -> 7 + 5 = 12
// -7, 15 -> -7 +15 = 8

function sum (a, b) {
    const result = a + b;
    return `${a} + ${b} = ${result}`;
}

console.log(sum(2, 2));
console.log(sum(7, 15));
console.log(sum(-7, 15));

console.clear();
// ND - perdaryti analogiskai su -, * ir / operacijomis

function subtract (a, b) {
    const result = a - b;
    return `${a} - ${b} = ${result}`;
}

console.log(subtract(2, 2));
console.log(subtract(7, 15));
console.log(subtract(-7, 15));
;

function multiply (a, b) {
    const result = a * b;
    return `${a} * ${b} = ${result}`;
}

console.log(multiply(2, 2));
console.log(multiply(7, 15));
console.log(multiply(-7, 15));

function divide  (a, b) {
    const result = a / b;
    return `${a} / ${b} = ${result}`;   
}

console.log(divide(2, 2));
console.log(divide(7, 15));
console.log(divide(-7, 15));



