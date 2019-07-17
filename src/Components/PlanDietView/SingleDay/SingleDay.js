import React from 'react'
import { MealSpace } from './MealSpace'
import { SummaryDay } from './SummaryDay'
import { DayPicker } from './DayPicker'
import './SingleDay.css'
import Paper from 'material-ui/Paper';
import { PlanConsumer } from '../../../contexts/PlanContext';

function SingleDay(props) {
  const {
    breakfastId,
    lunchId,
    snackId,
    dinnerId,
    sumNutrition,
    onDelete,
  } = props;

  // value.getMeals(value.activeDate.format('DD-MM-YYYY'))

  return (
    <PlanConsumer>
      { value => (
        <Paper zDepth={3} className="singleDayContainer">
          <DayPicker date={value.activeDate} />
          <MealSpace mealTypeTitle={'breakfast'} mealId={breakfastId} onDelete={onDelete} />
          <MealSpace mealTypeTitle={'lunch'} mealId={lunchId} onDelete={onDelete} />
          <MealSpace mealTypeTitle={'snacks'} mealId={snackId} onDelete={onDelete} />
          <MealSpace mealTypeTitle={'dinner'} mealId={dinnerId} onDelete={onDelete} />
          <SummaryDay sumNutrition={sumNutrition} kcalGoal={'1800'} />
        </Paper>
      )}
    </PlanConsumer>
  )
}

export default SingleDay
