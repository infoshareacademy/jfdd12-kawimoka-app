import React from 'react'

export function MealSpace (props) {
    let { mealType } = props
    return <div>
        <h3>{mealType}</h3>
    </div>
}