



const readline = require('readline-sync')

let total = 0

for (let i = 0; i < 5; i++) {
    let number = Number(readline.question("Digite um num"))
    total += number
}

    let average = total /5      ///average>> media
    console.log("Media >>" , average)

