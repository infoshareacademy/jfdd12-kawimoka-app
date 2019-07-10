import React from 'react'
import s from './SingleDay.module.css'

import {MealCardShort} from '../../meal/MealCardShort.js'

export function MealSpace (props) {
    const { mealType, addedMeal, addedMealType } = props

    return <div className={s.mealSpaceContainer}>
        <h3 className={s.mealTypeTitle}>{mealType}</h3>
        <div className={s.mealSpace}>
            {addedMealType === mealType.toLowerCase() ? <MealCardShort meal={addedMeal} /> : null}
        </div>
    </div>
}

