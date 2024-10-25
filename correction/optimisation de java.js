// exercice 12 :

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// exercice 13:

let a = 5;
let b = "5";

if (a === b) {
    console.log("Les nombres sont égaux");
} else {
    console.log("Les nombres sont différents");
}

// exercice 14:

let number = 10;
console.log(number + " est " + (number % 2 === 0 ? "pair" : "impair"));

// exercice 15:

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// exercice 16:

let numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// exercice 17:

let color = "rouge";

switch (color) {
    case "rouge":
        console.log("Couleur rouge");
        break;
    case "bleue":
        console.log("Couleur bleue");
        break;
    case "jaune":
        console.log("Couleur jaune");
        break;
    default:
        console.log("Couleur non reconnue");
}