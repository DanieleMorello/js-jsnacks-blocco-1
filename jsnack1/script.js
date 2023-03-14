/*
  L’utente inserisce due numeri in successione, con due prompt.
  Il software stampa il maggiore.
*/

// Tool
// -prompt
// If ...else

// L’utente inserisce due numeri in successione, con due prompt.
const userNumber = Number(prompt('inserisci un numero'))
// console.log(userNumber)
const otherNumber = Number(prompt('inserisci un\' altro numero'))
// console.log(otherNumber)
// Il software stampa il maggiore.
if(userNumber > otherNumber) {
  console.log('userNumber è più grande',userNumber)
} else if (otherNumber > userNumber) {
  console.log('otherNumber è più grande', otherNumber)
} else {
  console.log('I 2 numeri sono uguali');
}