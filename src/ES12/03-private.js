class user{
    //constructor
    constructor(name,age){
        this.name = name;
        this.age =age;
    }

    //methods with "#" identificamos como metodo privado
    #speak(){
        return 'Hello';
    }

    greeting(){
        return `${this.speak()} ${this.name}`;
    }

    get #uAge(){
        return this.age;
    }

    set #uAge(n){
        this.age=n;
    }
}


const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge);
//hace uso del set, modifca valor
console.log(bebeloper1.uAge = 20); 

