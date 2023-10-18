//Crear constante para los grados de los minutos y segundos
const deg = 6;

const horas = document.querySelector('.hora')
const minutos = document.querySelector('.minuto')
const segundos = document.querySelector('.segundo')
//fun intervalo
setInterval(()=>{
    let tiempo = new Date();
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;
    // se configura para que adquiera la funcion de rotar por medio de la operacion sobre la pocision
    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${(min)}deg)`;
    segundos.style.transform = `rotate(${(seg)}deg)`;

})

