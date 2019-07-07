import React from 'react'
import { MealSpace } from './MealSpace'
import { SummaryDay } from './SummaryDay'
import { DayPicker } from './DayPicker'
import s from './SingleDay.module.css'
import moment from 'moment';

class SingleDay extends React.Component {
    state = {
        date: moment()
    }


    render () {
        return (
            <div className={s.singleDayContainer}>
            <DayPicker date = {this.state.date} />
                <MealSpace mealType = {"Breakfast"} />
                <MealSpace mealType = {"Lunch"}/>
                <MealSpace mealType = {"Snacks"}/>
                <MealSpace mealType = {"Dinner"}/>
                <SummaryDay sumCalories = {"1230"} kcalGoal = {"1800"} leftCalories />
            </div>
            )
        }
}

export default SingleDay