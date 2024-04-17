const readline = require('readline-sync')

const data = new Date(); // momento atual 
const horas = data.getHours();
const minutos = data.getMinutes();
const segundos = data.getSeconds();
const milissegundos = data.getMilliseconds()

const hhmmmss = [horas, minutos, segundos].join(':');
console.log(hhmmmss);


let total = 0

let number = Number(readline.question("Digite [ 1 ] CARA   [ 2 ]  COROA "))

   total = number * milissegundos

   //if number =  1
   console.log( "                       " )
   console.log( "Sua escolha foi " , number )
   console.log( "                       " )
   
   //if nummber =  2
   //console.log( "Sua escolha foi COROA " , number )
   

   if (total % 2 === 0)
        console.log( "2" , "Coroa Venceu")

        if (total % 2 !== 0)
        console.log( "2" , "Cara Venceu")

console.log( "                       " )
console.log( "[ F i m ]")