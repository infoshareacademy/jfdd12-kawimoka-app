import React from 'react'
import s from './SingleDay.module.css'

export function MealSpace (props) {
    let { mealType } = props
    return <div className={s.MealSpace}>
        <h3>{mealType}</h3>
    </div>
}
// TODO: 
// czy gdy props ma tylko jedna zmienna to czy mozna od razu wrzucac mealType zamiast props ? 
