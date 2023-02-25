const loadMeals = (searchMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .catch(error => console.log(error))
}

const loadMeals2 = async (searchMeal) => {
    try {
        const res = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchMeal}`)
        const data = await res.json();
        loadMeals(data)
    } catch (error) {
        console.log(error);
    }
}

const displayMeals = meals => {
    console.log(meals);
    const mealsContainer = document.getElementById('meals-container');
    mealsContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal.strInstructions);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button type="button" onclick="loadModalDetail(${meal.idMeal})" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button>
            </div>
            </div>
        `
        mealsContainer.appendChild(mealDiv)
    });

}
document.getElementById('meal-search-btn').addEventListener('click', function () {
    const searchValue = document.getElementById('meal-search-filed').value;
    loadMeals(searchValue)
})
const loadModalDetail = (idMeal) => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealsDetail(data.meals[0]))

}
const displayMealsDetail = detail => {
    document.getElementById('exampleModalLabel').innerText = detail.strMeal;
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
    <img class="img-fluid" src="${detail.strMealThumb}" class="card-img-top" alt="...">
    `
    console.log(detail);
}




loadMeals('rice')