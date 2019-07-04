import React from 'react'

export function MealInfo(props) {

    const { mealType, name, time} = props;
    
  
    return (
     
       
        <div>
            <h1> {name}</h1>
            <h2>Rodzaj posiłku: {mealType}</h2>
            <h2>Czas przygotowania: {time} </h2>
        </div>
     
    );
  }
  