import React from 'react'
import { MealSpace } from './MealSpace'
import { SummaryDay } from './SummaryDay'
import { DayPicker } from './DayPicker'
import s from './SingleDay.module.css'
import meals from '../../meal/meals.json'


function SingleDay (props) {
   const { breakfastId, lunchId, snackId, dinnerId, sumCalories, onDelete } = props
    


    return (
        <div className={s.singleDayContainer}>
        <DayPicker date = {props.date} />
            <MealSpace mealTypeTitle="Breakfast" mealId={breakfastId} onDelete={onDelete}/>
            <MealSpace mealTypeTitle = {"Lunch"} mealId={lunchId} onDelete={onDelete} />
            <MealSpace mealTypeTitle = {"Snacks"} mealId={snackId} onDelete={onDelete} />
            <MealSpace mealTypeTitle = {"Dinner"} mealId={dinnerId} onDelete={onDelete} />
            <SummaryDay sumCalories = {sumCalories} kcalGoal = {"1800"} leftCalories />
        </div>
        )
    
    }

export default SingleDay