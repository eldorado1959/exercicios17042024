const data = new Date(); // momento atual 
const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();

const hhmmmss = [horas, minutos, segundos].join(':');
console.log(hhmmmss);

