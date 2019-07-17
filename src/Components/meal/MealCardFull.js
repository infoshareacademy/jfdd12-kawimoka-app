import React from 'react'
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus);
library.add(faArrowLeft);

export function MealCardFull(props) {
  const { meal, onAdd } = props;
  const { name, time, image, kcal, nutritions, recipe, ingradients } = meal;
  const { fat, carbs, protein } = nutritions;

  return (
    <div className='mealCardFull'>
      <div className='mealCardTop'>
        <div className='mealCardFullInfo'>
          <h1> {name} </h1>
          <h2>Calories: {kcal} kcal</h2>
          <h2>Prep Time: {time} min </h2>
        </div>
        <img className='mealPhoto' src={image} alt={"tu jest tekst"}/>
      </div>

      <div className='mealCardMain'>
        <div className='mealCardMainLeft'>
          <div className='nutritions'>
            <h3>Nutritions</h3>
            <p>fat: {fat}g</p>
            <p> carbs: {carbs}g </p>
            <p>protein: {protein}g </p>
          </div>
          <div className='ingradients'>
            <h3>Ingradients:</h3>
            <p>{ingradients}</p>
          </div>
        </div>

        <div className='recipe'>
          <h3> Recipe</h3>
          <p>{recipe}</p>
        </div>
      </div>
      <div className='mealCardFooter'>
        <FontAwesomeIcon
          icon={['fas', 'arrow-left']}
          size='3x'
          style={{ color: '#c0cbcc', padding: '15px' }}
          onClick={() => props.onMealClose()}
        />
        <FontAwesomeIcon icon={['fas', 'plus']} size='3x' className='addMealButton' onClick={() => onAdd(meal)}/>
      </div>
    </div>
  )
}

//TODO: Dopisać elementy nutritions, recipe, ingradients
