import React from 'react'
import s from './SingleDay.module.css'


export function Summary(props) {
    let { sumCalories, kcalGoal, leftCalories } = props
    leftCalories = kcalGoal - sumCalories
    
    return <div className={s.summaryContainer}>
        <div>
            <h3>calories / kcal goal:</h3>
            <h3>{sumCalories} / {kcalGoal}</h3>
        </div>
        <div>
            <h3>calories left:</h3>
            <h3>{leftCalories}</h3>
        </div>
    </div>
}