import React from 'react'
import s from './SingleDay.module.css'

export function MealSpace (props) {
    let { mealType } = props
    return <div className={s.mealSpaceContainer}>
        <h3 className={s.mealTypeTitle}>{mealType}</h3>
        <div className={s.mealSpace}></div>
    </div>
}

