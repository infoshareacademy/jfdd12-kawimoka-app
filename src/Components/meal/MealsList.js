import React, { Component } from 'react'
import meals from '../../meals.json'
import { MealsTypes } from './MealsTypes'
import { MealCardShort } from './MealCardShort'
import { MealCardFull } from './MealCardFull'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {MealModal} from "./MealModal"
//import './Meal.css'
import Paper from 'material-ui/Paper';
import { PlanConsumer } from '../../contexts/PlanContext.js';


library.add(faPlus);

export function MealsList() {

  return <PlanConsumer>
    {value => {
      if (value.filteredMeals.length === 0) {
        return null
        } else {
          return (
          <Paper className='mealsList' zDepth={0}>
            {value.filteredMeals
              .map(filteredMeal => 
                <MealCardShort
                  key={filteredMeal.id}
                  meal={filteredMeal}
              />)} 
          </Paper>)
        }
      }
    }
  </PlanConsumer>
}
