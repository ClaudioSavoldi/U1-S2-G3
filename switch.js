// switch, alternativa a if in caso di tante possibilità da confrontare

const fruit = "litches";

/* if (fruit === "apple") {
  console.log("una mela al gioprno...");
} else if (fruit === banana) {
  console.log("piacciono alle scimmie");
} else if (fruit === mango) {
  console.log("giallo è dolce");
} else if (fruit === "litches") {
  console.log("durissimi");
} else {
  alert("nessuno dei frutti");
}*/

switch (fruit) {
  case "apple":
    console.log("una mela al gioprno...");
    break;
  case "banana":
    console.log("piacciono alle scimmie");
    break;
  case "mango":
    console.log("giallo è dolce");
    break;
  case "litches":
    console.log("durissimi");
    break;
  default:
    alert("nessuno dei frutti");
}

const num = 11;

switch (true) {
  case num > 5 && num < 10:
    console.log("il numero è maggiore di 5 ma minore di 10");
    break;
  case num >= 10:
    console.log("il numero è maggiore uguale di 10");
    break;
  default:
    console.log("il numero è fuori range");
}
