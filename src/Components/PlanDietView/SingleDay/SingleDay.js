import React from 'react'
import { MealSpace } from './MealSpace'
import { SummaryDay } from './SummaryDay'
import { DayPicker } from './DayPicker'
import s from './SingleDay.module.css'
import meals from '../../meal/meals.json'


function SingleDay (props) {
    const addedMeal = meals.filter((meal) => meal.id === props.selectedMealId )
    const addedMealType = addedMeal.type

    return (
        <div className={s.singleDayContainer}>
        <DayPicker date = {props.date} />
            <MealSpace mealType = {"Breakfast"} addedMeal = {addedMeal} addedMealType = {addedMealType}/>
            <MealSpace mealType = {"Lunch"} addedMeal = {addedMeal} addedMealType = {addedMealType}/>
            <MealSpace mealType = {"Snacks"} addedMeal = {addedMeal} addedMealType = {addedMealType}/>
            <MealSpace mealType = {"Dinner"} addedMeal = {addedMeal} addedMealType = {addedMealType}/>
            <SummaryDay sumCalories = {"1230"} kcalGoal = {"1800"} leftCalories />
        </div>
        )
    }


export default SingleDay