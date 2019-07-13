import React from 'react'
import s from './SingleDay.module.css'
import {MealCardShort} from '../../meal/MealCardShort.js'
import meals from '../../meal/meals.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';


library.add(faTimesCircle)



export function MealSpace (props) {
    const { mealId, mealTypeTitle, onDelete } = props

    const addedMeal = meals.find(meal => meal.id === mealId)

    return (
    <div className={s.mealSpaceContainer}>
        <h3 className={s.mealTypeTitle}>{mealTypeTitle}</h3>
        <div className={s.mealSpace}>
            {mealId && <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginLeft: "10px", marginRight: "30px"}}>
            <MealCardShort meal={addedMeal} />    
            <FontAwesomeIcon
            icon={["fas","times-circle"]}
            size='3x'
            style={{ color: '#c0cbcc', margin: "5px" }}
            onClick={() => onDelete(addedMeal)}
          />
                
            </div>} 
        </div>
    </div>)
}

