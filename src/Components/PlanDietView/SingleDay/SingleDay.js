import React from 'react'
import { MealSpace } from './MealSpace'
import { Summary } from './Summary'
import s from './SingleDay.module.css'

export const SingleDay = () => {
    return <div className={s.singleDayContainer}>
        <MealSpace mealType = {"Breakfast"} />
        <MealSpace mealType = {"Lunch"}/>
        <MealSpace mealType = {"Snacks"}/>
        <MealSpace mealType = {"Dinner"}/>
        <Summary sumCalories = {"1230"} kcalGoal = {"1800"} leftCalories />
    </div>
}