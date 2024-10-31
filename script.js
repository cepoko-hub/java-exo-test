async function fetchCocktails(categoryId) {
    const url = `https://thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryId}`;
    const response = await fetch(url);
    const data = await response.json();
    displayCocktails(data.drinks);
}

function displayCocktails(cocktails) {
    const container = document.getElementById("cocktail-list");
    container.innerHTML = ''; 

    cocktails.forEach(cocktail => {
        const listItem = document.createElement("div");
        listItem.className = "list-item";
        listItem.textContent = cocktail.strDrink;
        listItem.onclick = () => fetchCocktailDetails(cocktail.idDrink);
        container.appendChild(listItem);
    });
}

async function fetchCocktailDetails(cocktailId) {
    const url = `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`;
    const response = await fetch(url);
    const data = await response.json();
    displayCocktailDetails(data.drinks[0]);
}

function displayCocktailDetails(cocktail) {
    const detailsContainer = document.getElementById("cocktail-details");
    detailsContainer.innerHTML = `
        <h2>${cocktail.strDrink}</h2>
        <img class="thumbnail" src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
        <p><strong>Catégorie:</strong> ${cocktail.strCategory}</p>
        <p><strong>Instructions:</strong> ${cocktail.strInstructions}</p>
    `;
}

document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", (event) => {
        const categoryId = event.target.id;
        fetchCocktails(categoryId);
        document.querySelectorAll(".nav-item").forEach(nav => nav.classList.remove("active"));
        event.target.classList.add("active");
    });
});

