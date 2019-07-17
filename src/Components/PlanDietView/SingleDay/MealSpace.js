import React from 'react'
import './SingleDay.css'
import {MealCardShort} from '../../meal/MealCardShort.js'
import meals from '../../../meals.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { PlanConsumer } from '../../../contexts/PlanContext';

library.add(faTimesCircle);

const addMealButtonStyle = {
    width: '56px',
    height: '56px', 
    position: 'relative', 
    left: 'calc(450px - 28px)', 
    top: '20%'
}

export function MealSpace (props) {
    const { mealId, mealTypeTitle, onDelete } = props;
    const addedMeal = meals.find(meal => meal.id === mealId);
    return (
			<PlanConsumer>
				{value => (<div className="mealSpaceContainer">
					<h3 className="mealTypeTitle">{mealTypeTitle}</h3>
					<div className="mealSpace">
							{mealId && <div className="mealSpaceFormatter">
									<MealCardShort meal={addedMeal} />
									<FontAwesomeIcon icon={["fas","times-circle"]} size='3x' className='removeMealIcon' onClick={() => onDelete(addedMeal)}/>
							</div>}
							<FloatingActionButton style={addMealButtonStyle} backgroundColor={'#08ada0'} onClick={() => value.setMealFilter(mealTypeTitle)}>
									<ContentAdd />
							</FloatingActionButton>
					</div>
				</div>)}
    	</PlanConsumer>
    )
}

