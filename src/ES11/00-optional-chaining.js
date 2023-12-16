const users = {
    gndx: {
        country:'MX',
    },
    ana: {
        country: 'CO'
    }
}
console.log(users.gndx.country);//me permite 
console.log(users.gndx.age);//si le pido algo que no tiene me saldrá undefined
//optional chaining nos permite
//poner un "si es que existe", cosa que si no tengo lo que pido no rompo la aplicación
//console.log(users.bebeloper.country); ->esto no correría
console.log(users?.bebeloper?.country);


