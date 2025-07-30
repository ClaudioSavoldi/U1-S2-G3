// si utilizza per eseguire un blocco un numero definito di volte
// utilizzato con gli array

/*for(contatore; condizione da valutare; incremento/decremento){
    blocco di codice da eseguire tot volte
}
*/

for (let i = 0; i < 10; i++) {
  console.log("valore di i:", i);
}

for (let i = 9; i >= 0; i--) {
  console.log("valore di i:", i);
}

console.log("----------------------------------");
//riempire un array vuoto
const myArr = [];
for (let i = 0; i < 10; i++) {
  myArr.push(i);
  // console.log("index processo", myArr);
}
console.log("fine processo", myArr);

console.log("----------------------------------");

const animals = ["eagles", "dog", "cat", "rabbit", "canary"];

for (let i = 0; i < animals.length; i++) {
  console.log("animale", animals[i]);
}

for (let i = animals.length - 1; i >= 0; i--) {
  console.log("animale reverse", animals[i]);
}

console.log("----------------------------------");

const animalsOfThreeLetters = [];

for (let i = 0; i < animals.length; i++) {
  const animal = animals[i];

  console.log("animale", animal);

  if (animal.length <= 3) {
    nimalsOfThreeLetters.push(animal);
  }
}
