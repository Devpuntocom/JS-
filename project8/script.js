let papaStop = document.getElementById("papaquieto");
let botonAudio = new Audio('C:/Users/SENA/Documents/project8/sound/sonido.mp3');
let botonPlay = document.getElementById("play");
let botonPause = document.getElementById("pause");

botonPlay.disabled = true;
botonPause.disabled = true;

function son(num)
{
    if (num == 1)
    {
        botonAudio.play();
    } else
    {
        botonAudio.pause();
    }
}


function obteberTiempoFaltante(fechaLimite)
{
    let hora = new Date();
    tiempoFaltante = (new Date(fechaLimite) - hora + 1000) / 1000;
    segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ('0' + Math.floor(tiempoFaltante / 60 % 60)).slice(-2);
    horaFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horaFaltantes,
        diasFaltantes,
        tiempoFaltante,

    }

};


function cuentaRegresiva(tiempoFaltante, reloj, mensaje)
{
    const e = document.getElementById(reloj);
    const titulo = document.getElementById("titulo");
    const dias = document.getElementById("dias");
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    const tiempoActual = setInterval(() =>
    {
        let t = obteberTiempoFaltante(tiempoFaltante);
        dias.innerHTML = t.diasFaltantes;
        horas.innerHTML = t.horaFaltantes;
        minutos.innerHTML = t.minutosFaltantes;
        segundos.innerHTML = t.segundosFaltantes;

        if (t.tiempoFaltante <= 1)
        {
            clearInterval(tiempoActual);
            dias.innerHTML = "00";
        horas.innerHTML = "00";
        minutos.innerHTML = "00";
        segundos.innerHTML = "00";
            titulo.innerHTML = mensaje;
            papaStop.classList.add("on");
            botonPlay.classList.remove('hover');
            botonPlay.disabled = false;
            botonPause.disabled = false;
        }
    }, 1000);
}

cuentaRegresiva('Nov 08 2023 17:28:00', 'cuentaRegresiva', 'FELIZ NAVIDAD')