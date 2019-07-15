import React from 'react'
import { AddMealButton } from './AddMealButton'
import { MealPhoto } from './MealPhoto'
import styles from './Meal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft)

export function MealCardFull(props) {
  const { meal, onAdd, selectedMealId } = props
  const { name, type, time, image, kcal, nutritions, recipe, ingradients } = meal
  const { fat, carbs, protein } = nutritions

  return (
    <div className={styles.mealCardFull}>
      <div className={styles.mealCardTop}>
        <div className={styles.mealCardFullInfo}>
          <h1> {name} </h1>
          <h2>Calories: {kcal} kcal</h2>
          <h2>Prep Time: {time} min </h2>
        </div>

        <MealPhoto image={image} alt={'tu jest tekst'} />
      </div>

      <div className={styles.mealCardMain}>
        <div className={styles.mealCardMainLeft}>
          <div className={styles.nutritions}>
            <h3>Nutritions</h3>
            <p>fat={fat}g</p>
            <p> carbs={carbs}g </p>
            <p>protein={protein}g </p>
          </div>
          <div className={styles.ingradients}>
            <h3>Ingradients:</h3>
            <p>{ingradients}</p>
          </div>
        </div>

        <div className={styles.recipe}>
          <h3> Recipe</h3>
          <p>{recipe}</p>
        </div>
      </div>
      <div className={styles.mealCardFooter}>
        <FontAwesomeIcon
          icon={['fas', 'arrow-left']}
          size='3x'
          style={{ color: '#c0cbcc', padding: '15px' }}
          onClick={() => props.onMealClose()}
        />
        <AddMealButton onAdd={onAdd} meal={meal} selectedMealId={selectedMealId} />
      </div>
    </div>
  )
}

//TODO: Dopisać elementy nutritions, recipe, ingradients
