import React from 'react'
import s from './SingleDay.module.css'


export function SummaryDay(props) {
    let { sumCalories, kcalGoal, leftCalories } = props

    const sumCaloriesCount = sumCalories()
    leftCalories = kcalGoal - sumCaloriesCount

    return <div className={s.summaryContainer}>
        <div>
            <h3 className={s.summaryText}>calories / kcal goal:</h3>
            <h3 className={s.summaryText}>{sumCaloriesCount} / {kcalGoal}</h3>
        </div>
        <div>
            <h3 className={s.summaryText}>calories left:</h3>
            <h3 className={s.summaryText}>{leftCalories}</h3>
        </div>
    </div>
}