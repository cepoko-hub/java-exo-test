// exercice 2

let fruits = ["apple", "banana", "cherry"];
console.log(fruits[2]);  

//L'indice [2] permet d'accéder au troisième élément du tableau, qui est "cherry"

//exercice 3

let fruitss = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// La boucle for permet de parcourir tous les éléments du tableau fruits.
//La variable i représente l'indice de l'élément en cours, et on utilise fruits[i] pour accéder à chaque élément.
//La méthode fruits.length renvoie la taille du tableau, ce qui permet d'itérer sur tous les éléments sans avoir à connaître le nombre exact à l'avance.
//Cela rend le code plus flexible et plus facile à maintenir, surtout si le tableau change de taille.

// exercice 7

function reverseWords(sentence) {
    let mots = sentence.split(" ");
    
    let motsInverses = mots.reverse();
    
    return motsInverses.join(" ");
}

let sentence = "I love programming";
console.log(reverseWords(sentence));  

// split(" ") : Divise la chaîne de caractères sentence en un tableau de mots en se basant sur les espaces.
// reverse() : Inverse l'ordre des éléments du tableau.
// join(" ") : Joins les mots du tableau inversé pour reformer une chaîne de caractères avec des espaces entre les mots.
