//Crear constante para los grados de los minutos y segundos
const deg = 6;

const horas = document.querySelector('.hora')
const minutos = document.querySelector('.minuto')
const segundos = document.querySelector('.segundo')
//fun intervalo
setInterval(()=>{
    let tiempo = new Date();
    let hor = tiempo.getHours();
    let hr = tiempo.getHours() * 30;
    let min = tiempo.getMinutes() * deg;
    let seg = tiempo.getSeconds() * deg;
    // se configura para que adquiera la funcion de rotar por medio de la operacion sobre la pocision
    horas.style.transform = `rotate(${(hr)+(min/12)}deg)`;
    minutos.style.transform = `rotate(${(min)}deg)`;
    segundos.style.transform = `rotate(${(seg)}deg)`;

})


function CalcularTiempo(){
    let tiempo = new Date();

    let hora = tiempo.getHours();
    let minuto = tiempo.getMinutes();
    let segundo = tiempo.getSeconds();

    let periodoDia = hora >= 12 ? "PM" : "AM";
    hora = ((hora + 11) % 12 + 1);

    hora = horas <10 ? "0" + hora: hora;
    minuto = minuto <10 ? "0" + minuto: minuto;
    segundo = segundo <10 ? "0" + segundo: segundo;

    let pantallaReloj = hora + ":" + minuto + ":" + segundo + "." + periodoDia;
    let relojDigital = document.querySelector(".relojDigital");
    relojDigital.innerHTML = pantallaReloj;
}
setInterval(CalcularTiempo,1000);

