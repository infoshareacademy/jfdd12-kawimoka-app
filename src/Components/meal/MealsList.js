import React, { Component } from 'react'
import meals from '../../meals.json'
import { MealsTypes } from './MealsTypes'
import { MealCardShort } from './MealCardShort'
import { MealCardFull } from './MealCardFull'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {MealModal} from "./MealModal"
import Slider from "react-slick";

import Paper from 'material-ui/Paper';
import { PlanConsumer } from '../../contexts/PlanContext.js';
import {MealCardShort2} from './MealCardShort';


library.add(faPlus);

const settings = {
className: "carousel-container",
centerMode: true,
infinite: true,
centerPadding: "40px",
slidesToShow: 2,
speed: 500
};

export function MealsList() {

  return (
    <PlanConsumer>
      {value => {
        if (value.filteredMeals.length === 0) {
          return null
          } else {
            return (
            
            <Paper className='mealsList' zDepth={0}>
              <Slider {...settings}>
              {value.filteredMeals
                .map(filteredMeal => 
                  <>
                  <MealCardShort2
                                    key={filteredMeal.id}
                                    meal={filteredMeal}

                />
                <button onClick={() => value.addOrRemoveMeal(filteredMeal, true)}>ADD</button>
                </>)} 
                </Slider>
            </Paper>)
          }
        }
      }
    </PlanConsumer>)
}
