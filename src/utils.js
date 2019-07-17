import meals from './meals.json'

export function findMeal(id){
    return meals.find(meal => meal.id === id);
}