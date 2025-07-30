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

let weight = 0;
let iterationCount = 0;
while (weight <= 1000) {
  // chiedo all`utente di pesarsi
  // convertiamo la stringa in numero
  //incrementiamo il peso totale
  const userinput = prompt("quanto peso stai aggiungendo?");
  console.log("userInput", userinput);
  const addedWeight = parseFloat(userinput);
  console.log("addedWeight", addedWeight);
  weight += addedWeight; //weight=weight+addedWeight
  console.log("il pesom attuale è:", weight);
  iterationCount++;
}
console.log("la bilancia segna:", weight);
console.log("hai pesato", iterationCount, "volte");

// do...while

/*let num = 100;

while (num < 100) {
  console.log("while eseguito");
  num++;
}

let num2 = 100;
do {
  console.log("do...while eseguito");
  num++;
} while (num2 < 100);
 */

const animals = ["eagles", "dog", "cat", "rabbit", "canary"];
console.log("pre", animals);
let animalsIndex = animals.length - 1;

while (animals.length > 0 && animals[animalsIndex] !== "cat") {
  console.log("inner element", animals[animalsIndex]);
  animals.pop();
  console.log("inner", animals);

  animalsIndex--;
}
console.log("post", animals);
