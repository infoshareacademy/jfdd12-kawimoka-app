import React, { useContext } from 'react'
import './SingleDay.css'
import { MealCardShort } from '../../meal/MealCardShort.js'
import meals from '../../../meals.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import { PlanContext } from '../../../contexts/PlanContext'

library.add(faTimesCircle)

const addMealButtonStyle = {
  width: '56px',
  height: '56px',
  margin: '10px',
  position: 'absolute',
  right: '5px',
  top: '13%'
}

export function MealSpace(props) {
  const { mealId, mealTypeTitle } = props
  const addedMeal = meals.find(meal => meal.id === mealId)

  const { addOrRemoveMeal, setMealFilter } = useContext(PlanContext)

  return (
    <div className='mealSpaceContainer'>
      <h2 onClick={() => setMealFilter(mealTypeTitle)}>{mealTypeTitle}</h2>
      <div className='mealSpace'>
        {mealId && (
          <div className='mealSpaceFormatter'>
            <MealCardShort meal={addedMeal} />
            <FontAwesomeIcon
              icon={['fas', 'times-circle']}
              size='3x'
              className='removeMealIcon'
              onClick={() => addOrRemoveMeal(addedMeal, false)}
            />
          </div>
        )}

        {!mealId && (
          <FloatingActionButton
            style={addMealButtonStyle}
            backgroundColor={'#9CDED9'}
            onClick={() => setMealFilter(mealTypeTitle)}>
            <ContentAdd />
          </FloatingActionButton>
        )}
      </div>
    </div>
  )
}
