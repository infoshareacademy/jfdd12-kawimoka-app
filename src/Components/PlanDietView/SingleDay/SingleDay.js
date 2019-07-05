import React from 'react'
import { MealSpace } from './MealSpace'
import { SummaryDay } from './SummaryDay'
import { DayPicker } from './DayPicker'
import s from './SingleDay.module.css'

const SingleDay = () => {
    return <div className={s.singleDayContainer}>
    <DayPicker day = {15} />
        <MealSpace mealType = {"Breakfast"} />
        <MealSpace mealType = {"Lunch"}/>
        <MealSpace mealType = {"Snacks"}/>
        <MealSpace mealType = {"Dinner"}/>
        <SummaryDay sumCalories = {"1230"} kcalGoal = {"1800"} leftCalories />
    </div>
}

export default SingleDay