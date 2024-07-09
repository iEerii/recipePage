const endpoint = 'http://localhost:4000/api/recipes/6684ac4f9ef8a399fa63c3e4';
const nameRecipe = document.getElementById('titleRecipe');
const ingredienstContainer = document.getElementById('ingredientsContainer');

const getNameDesert = (nameDesert) => {
    nameRecipe.textContent = nameDesert;
}

const getInstruction = (ingredients) => {
    ingredients.forEach((ingredient) => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredienstContainer.appendChild(li);
    });
}

const getData = async() => {    
    try {
        const answer = await fetch(endpoint);
        const data = await answer.json();
        
        const nameDesert = data?.recipe?.name;
        const ingredients = data?.recipe?.ingredients;
        
        getInstruction(ingredients);
        getNameDesert(nameDesert);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
};
getData();
