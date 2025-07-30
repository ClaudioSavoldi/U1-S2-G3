//Loops
// sonos strutture in grado di ripetere il blocco n volte fin quando una condizione non rimane vera

// While--> ci permette di eseguire un blocco per un numero indefinito di volte(non sappiamo il numero di ripetizioni necessarie)
// sarà lui tramite la sua condizione che bloccherà il ciclo

/* while( condizione da verificare) {
codice da eseguire più volte, fino a quano la varriabile rimane vera
}
*/

let counter = 0;
while (counter < 10) {
  console.log("numero attuale:", counter);
  // counter+=1/2/3...
  counter++;
}
