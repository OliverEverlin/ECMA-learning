const button = document.getElementById('btn');
//hace que tengamos un control de lo que ejecutarà para no correr todo de golpe
button.addEventListener("click", async function (){
    const module = await import('./module.js');
    console.log(module);
    module.hello();
});