import React from 'react'
import { MealSpace } from './MealSpace'
import { SummaryDay } from './SummaryDay'
import { DayPicker } from './DayPicker'
import s from './SingleDay.module.css'
import meals from '../../meal/meals.json'


function SingleDay (props) {
   const { breakfastId, lunchId, snacksId, dinnerId } = props
    
    return (
        <div className={s.singleDayContainer}>
        <DayPicker date = {props.date} />
            <MealSpace mealTypeTitle="Breakfast" mealId={breakfastId}/>
            <MealSpace mealTypeTitle = {"Lunch"} mealId={lunchId} />
            <MealSpace mealTypeTitle = {"Snacks"} mealId={snacksId} />
            <MealSpace mealTypeTitle = {"Dinner"} mealId={dinnerId} />
            <SummaryDay sumCalories = {"1230"} kcalGoal = {"1800"} leftCalories />
        </div>
        )
    }


export default SingleDay