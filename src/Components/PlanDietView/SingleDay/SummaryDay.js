import React from 'react'
import s from './SingleDay.module.css'


export function SummaryDay(props) {
    let { sumNutrition: sumCalories, kcalGoal } = props;

    const sumCaloriesCount = sumCalories('kcal');
    let leftCalories = kcalGoal - sumCaloriesCount;

    if (leftCalories < 0) {
        leftCalories = 0
    }

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
