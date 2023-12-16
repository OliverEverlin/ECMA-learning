//permite tener una funcion que itera,retorna valores especiales
//no requiere tanta robustes
//permite manterner un estado

function* iterate(array){
    for (let value of array){
        yield value;//retorna cada uno de los valores
    }
}

const it = iterate(['Oscar', 'David', 'Ana', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//itera y se detiene pero recuerda lo que avanzó 
//si ya no hay más valores en el array pone undefined
