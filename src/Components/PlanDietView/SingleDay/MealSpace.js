import React from 'react'
import s from './SingleDay.module.css'
import {MealCardShort} from '../../meal/MealCardShort.js'
import meals from '../../meal/meals.json'


export function MealSpace (props) {
    const { mealId, mealTypeTitle } = props

    const addedMeal = meals.find(meal => meal.id === mealId)

    return <div className={s.mealSpaceContainer}>
        <h3 className={s.mealTypeTitle}>{mealTypeTitle}</h3>
        <div className={s.mealSpace}>
            {mealId && <MealCardShort meal={addedMeal} />} 
        </div>
    </div>
}

