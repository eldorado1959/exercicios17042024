const data = new Date(); // momento atual 
const horas = data.getHours().toString().padStart(2, '0');
const minutos = data.getMinutes().toString().padStart(2, '0');
const segundos = data.getSeconds().toString().padStart(2, '0');

const hhmmmss = [horas, minutos, segundos].join(':');
console.log(hhmmmss.padStart(120, ' ')); 

