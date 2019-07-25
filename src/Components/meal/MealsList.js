import React, {useState } from 'react'
import { MealCardFull } from './MealCardFull'
import Slider from "react-slick";
import Paper from 'material-ui/Paper';
import { PlanConsumer } from '../../contexts/PlanContext.js';
import {MealCardShort2} from './MealCardShort';
import {Icon } from 'semantic-ui-react';
import {MotivationView} from '../MotivationView/MotivationView';



// function numOfCards() {
//   const[numberOfCards, setNumberOfCards]=useState()

//  let screenWidth = window.innerWidth;

//  if(screenWidth < 1000){
//   setNumberOfCards(numberOfCards===1)
//   }else{
//     setNumberOfCards(numberOfCards===3)
//   }

// return{numberOfCards}
// }

const settings = {
className: "center carousel-container",
centerMode: true,
infinite: true,
slidesToShow: 3,
speed: 250,
nextArrow: <SampleNextArrow />,
prevArrow: <SamplePrevArrow />,
transform: true
};


function SampleNextArrow(props) {
  const {onClick, style, className} = props;
  return(
    <Icon
      style={{...style, position: 'absolute', zIndex: "1", top: '80%', right: '-10px',  cursor: 'pointer'}}
      name='angle double right' 
      size='large' 
      color='teal'
      onClick={onClick}
    />
  )
  }


function SamplePrevArrow(props) {
  const {onClick, style} = props;
  return(
    <Icon
      style={{...style, position: 'absolute',zIndex: "1",  top: '80%', left: '-10px', cursor: 'pointer'}}
      name='angle double left' 
      size='large' 
      color='teal'
      onClick={onClick}
    />
  )
}


export function MealsList() {

const[choosenMeal, setchoosenMeal]=useState(0)

  return (
    <PlanConsumer>
      {value => {
        if (value.filteredMeals.length === 0) {
          return <MotivationView />
          } else {
            return (
            
            <Paper className='mealsList' zDepth={0}>
           <Paper zDepth={3}><h2 style={{textAlign: "center", textTransform: "capitalize", fontSize: "20px", margin: "4px"}}>{value.mealFilter}</h2></Paper> 

        <Slider  {...settings} afterChange={index => {setchoosenMeal(index)}}>
              {value.filteredMeals
                .map((filteredMeal, index) => 
                  <div key={index}  >
                    <MealCardShort2
                      key={filteredMeal.id}
                      meal={filteredMeal}                    
                    />
                  </div>
                )} 
              </Slider>

              <div>
              <MealCardFull meal={value.filteredMeals[choosenMeal]}/>
              </div>
              
            </Paper>)
          }
        }
      }
    </PlanConsumer>)
}
