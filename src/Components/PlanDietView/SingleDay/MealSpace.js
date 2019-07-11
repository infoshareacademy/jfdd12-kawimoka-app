import React from 'react'
import s from './SingleDay.module.css'
import {MealCardShort} from '../../meal/MealCardShort.js'
import meals from '../../meal/meals.json'


export function MealSpace (props) {
    const { mealId, mealTypeTitle, onDelete } = props

    const addedMeal = meals.find(meal => meal.id === mealId)

    return <div className={s.mealSpaceContainer}>
        <h3 className={s.mealTypeTitle}>{mealTypeTitle}</h3>
        <div className={s.mealSpace}>
            {mealId && <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px", marginRight: "30px"}}>
                <MealCardShort meal={addedMeal} />
                <button style={{height: "50px"}} onClick={() => onDelete(addedMeal)}>DELETE MEAL</button>
                </div>} 
        </div>
    </div>
}

