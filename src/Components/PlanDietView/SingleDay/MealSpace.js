import React from 'react'

export function MealSpace (props) {
    let { mealType } = props
    return <div>
        <h3>{mealType}</h3>
    </div>
}
// TODO: 
// czy gdy props ma tylko jedna zmienna to czy mozna od razu wrzucac mealType zamiast props ? 
