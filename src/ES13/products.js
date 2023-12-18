import fetch from "node-fetch"; 

//await:
//nos ayuda a esperar a que regresen la info del servidor
const response = await fetch('https://api.escuelajs.co/api/v1/products');
//transforma la info de una manera que la pueda usar y los muestra
const products = await response.json();

export { products };