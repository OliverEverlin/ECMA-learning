//ECMA solo dificó la sintaxis 

//declaracion
//class declaraUser {};
//instanciación de clase
//const newUser = new User();

class user {
    //metodos
    greeting(){
        return 'Hello';
    }
};

const gndx =new user();
console.log(gndx.greeting());

const bebeloper = new user();
console.log(bebeloper.greeting);

//constructor 

class user {
    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }

    greeting(){
        return 'Hello';
    }
}

const david = new user();

//this 
class user{
    constructor(name){
        this.name = name;
    }
    //methods
    speak(){
        return 'Hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana= new user('Ana');
console.log(ana.greeting());

//setters getters

class user{
    //constructor
    constructor(name,age){
        this.name = name;
        this.age =age;
    }

    //methods
    speak(){
        return 'Hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(n){
        this.age=n;
    }
}


const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
//hace uso del set
console.log(bebeloper1.uAge = 20); 

