import React from 'react'
import s from './SingleDay.module.css'
import meals from '../MealList/meals.json'
import {MealCardShort} from '../MealList/MealCardShort'

export function MealSpace (props) {
    const { mealType, selectedMealId } = props
    
    return <div className={s.mealSpaceContainer}>
        <h3 className={s.mealTypeTitle}>{mealType}</h3>
        <div className={s.mealSpace}>
            {selectedMealId &&
                <MealCardShort key={selectedMealId} /> 
            }
        </div>
    </div>
}

