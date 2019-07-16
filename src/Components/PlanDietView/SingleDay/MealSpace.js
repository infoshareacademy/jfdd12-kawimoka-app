import React from 'react'
import './SingleDay.css'
import {MealCardShort} from '../../meal/MealCardShort.js'
import meals from '../../../meals.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faTimesCircle);

export function MealSpace (props) {
    const { mealId, mealTypeTitle, onDelete } = props;
    const addedMeal = meals.find(meal => meal.id === mealId);
    return (
    <div className="mealSpaceContainer">
        <h3 className="mealTypeTitle">{mealTypeTitle}</h3>
        <div className="mealSpace">
            {mealId && <div className="mealSpaceFormatter">
                <MealCardShort meal={addedMeal} />
                <FontAwesomeIcon icon={["fas","times-circle"]} size='3x' className='removeMealIcon' onClick={() => onDelete(addedMeal)}/>
            </div>}
        </div>
    </div>)
}

