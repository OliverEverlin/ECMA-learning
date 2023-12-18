const promise1= new Promise((resolve, reject)=> reject("Reject")); //en ese me da const promise2= new Promise((resolve, reject)=> resolve("resolve")); por que no corre
const promise2= new Promise((resolve, reject)=> resolve("resolve")); //const promise2= new Promise((resolve, reject)=> resolve("resolve")); este y los demás no corren
const promise3= new Promise((resolve, reject)=> resolve("resolve 2"));

//permite correr varias promesas de golpe, y ejecuta la primera en cumplir su objetivo
Promise.any([promise1, promise2, promise3])
    .then(response=>console.log(response));