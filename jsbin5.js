let operaHouse1 = 'Mozart'
let operaHouse2 = 'Verdi'

/* Replace Verdi by Mozart in opera
house number 2 and replace
Mozart by Verdi in house number 2*/

let emptyOperaHouse = operaHouse1
operaHouse1 = operaHouse2
operaHouse2 = emptyOperaHouse

console.log('operaHouse1:' + operaHouse1)
console.log('operaHouse2:' + operaHouse2)
