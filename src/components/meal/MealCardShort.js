
import React from 'react';
import {MealInfo} from './MealInfo';
import {MealPhoto} from './MealPhoto';




export function MealCardShort(props) {
const {meal} = props;
const {mealType, name, time, image} = meal;

  
    return (
        <div >
        <MealInfo name={name} mealType={mealType} time={time} />
        <MealPhoto src={image} alt={"tu jest tekst"} />

      </div>
       

    );
  }
  
