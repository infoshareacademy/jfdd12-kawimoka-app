import React from 'react'
import FlatButton from 'material-ui/FlatButton';
import './Meal.css'

const flatButtonStyle = {
  color: "black"
}


export function MealsTypes(props) {
  const { setMealFilter } = props
    return (
        <div className='mealsTypes'>
          <FlatButton label="Breakfast" primary={true} style={flatButtonStyle} onClick={() => setMealFilter('breakfast')} />
          <FlatButton label="Lunch" primary={true} style={flatButtonStyle} className='mealFilterButton' onClick={() => setMealFilter('lunch')} />
          <FlatButton label="Snack" primary={true} style={flatButtonStyle} className='mealFilterButton' onClick={() => setMealFilter('snack')}/>
          <FlatButton label="Dinner" primary={true} style={flatButtonStyle} className='mealFilterButton' onClick={() => setMealFilter('dinner')}/>
        </div>
    )
}