import React, { Component, Fragment, useState } from 'react'

import { MealCardFull } from './MealCardFull'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

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
slidesToShow: 3,
speed: 500,
nextArrow: <SampleNextArrow />,
prevArrow: <SamplePrevArrow />,

};

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "black" }}
      onClick={onClick}
    />
      
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{ display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}


export function MealsList() {

const[x, setX]=useState(0)

  return (
    <PlanConsumer>
      {value => {
        if (value.filteredMeals.length === 0) {
          return null
          } else {
            return (
            
            <Paper className='mealsList' zDepth={0}>
            <h2 style={{textAlign: "center", textTransform: "uppercase"}}>{value.mealFilter}</h2>
              <Slider {...settings} afterChange={index => {
                //TODO: logika od wyśiwetlania duzego posilku
                setX(index)




                console.log(value.filteredMeals)
              }}>
              {value.filteredMeals
                .map((filteredMeal, index) => 
                  <div key={index}>
                    <MealCardShort2
                      key={filteredMeal.id}
                      meal={filteredMeal}

                    />
                    <button onClick={() => value.addOrRemoveMeal(filteredMeal, true)}>ADD</button>
                  </div>
                )} 
              </Slider>
              <div>
              <MealCardFull meal={value.filteredMeals[x]}/>
              </div>
            </Paper>)
          }
        }
      }
    </PlanConsumer>)
}
