//Template Literals

let hello='Hello';
let world ='World';
//antes de ES6
let epicPhrase = hello + ' ' + world+'!';
console.log(epicPhrase);

//Ahora con ES6
let epicPhrase2 = `${hello} ${world}!`;

console.log(epicPhrase2);

//Multi-line strings ---------------------------
//antes de ES6
let lorem ='esto es un string\n' + 'esto es otra linea';
//ahora con ES6
let lorem2=`Esta es una frase epica
    la continuacion de la frase epica`

console.log(lorem);
console.log(lorem2);