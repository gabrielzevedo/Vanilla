const segundosPonteiro = document.querySelector('.ponteiro-segundos');
const minutosPonteiro = document.querySelector('.ponteiro-minutos');
const horasPonteiro = document.querySelector('.ponteiro-horas');

function setDate() {
    const now = new Date();

    const segundos = now.getSeconds();
    const segundosDeg = ((segundos / 60) * 360) + 90;
    segundosPonteiro.style.transform = `rotate(${segundosDeg}deg)`;

    const minutos = now.getMinutes();
    const minutosDeg = ((minutos / 60) * 360) + 90;
    minutosPonteiro.style.transform = `rotate(${minutosDeg}deg)`;

    const horas = now.getHours();
    const horasDeg = ((horas / 60) * 360) + 90;
    horasPonteiro.style.transform = `rotate(${horasDeg}deg)`;
}

setInterval(setDate, 1000);
