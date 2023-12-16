const user = {
    username: 'gndx',
    age: 34,
    country: 'CO'
};

const { username, ... values} = user; 
//separa mi user en sus componentes
console.log(username);
console.log(values);