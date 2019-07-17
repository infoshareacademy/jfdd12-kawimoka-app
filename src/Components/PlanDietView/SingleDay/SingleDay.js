import React from 'react'
import { MealSpace } from './MealSpace'
import { SummaryDay } from './SummaryDay'
import { DayPicker } from './DayPicker'
import './SingleDay.css'
import Paper from 'material-ui/Paper';

function SingleDay(props) {
  const {
    breakfastId,
    lunchId,
    snackId,
    dinnerId,
    sumNutrition,
    onDelete,
  } = props;

  return (
    <Paper zDepth={3} className="singleDayContainer">
      <DayPicker date={props.date} />
      <MealSpace mealTypeTitle='Breakfast' mealId={breakfastId} onDelete={onDelete} />
      <MealSpace mealTypeTitle={'Lunch'} mealId={lunchId} onDelete={onDelete} />
      <MealSpace mealTypeTitle={'Snacks'} mealId={snackId} onDelete={onDelete} />
      <MealSpace mealTypeTitle={'Dinner'} mealId={dinnerId} onDelete={onDelete} />
      <SummaryDay sumNutrition={sumNutrition} kcalGoal={'1800'} />
    </Paper>
  )
}

export default SingleDay
