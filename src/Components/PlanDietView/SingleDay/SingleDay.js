import React from 'react'
import { MealSpace } from './MealSpace'
import { Summary } from './Summary'

export const SingleDay = () => {
    return <div>
        <MealSpace mealType = {"Breakfast"} />
        <MealSpace mealType = {"Lunch"}/>
        <MealSpace mealType = {"Snacks"}/>
        <MealSpace mealType = {"Dinner"}/>
        <Summary />
    </div>
}