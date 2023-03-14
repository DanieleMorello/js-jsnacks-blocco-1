/*
  L’utente inserisce due parole in successione, con due prompt.
  Il software stampa prima la parola più corta, poi la parola più lunga.
*/

// L’utente inserisce due parole in successione, con due prompt.
const word = prompt('Inserisci una parola')
console.log(word)
const otherWord = prompt('Inserisci una seconda parola')
console.log(otherWord)

// Il software stampa prima la parola più corta, poi la parola più lunga.
if(word.length < otherWord.length) {
  console.log(`La prima parola ${word} è più corta della seconda parola ${otherWord}`);
} else if (otherWord.length < word.length) {
  console.log(`La seconda parola ${otherWord} è più corta della seconda parola ${word}`);
} else {
  console.log('Le 2 parole hanno la stessa lunghezza');
}