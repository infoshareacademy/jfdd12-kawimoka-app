import React, {useState } from 'react'
import { MealCardFull } from './MealCardFull'
import Slider from "react-slick";
import Paper from 'material-ui/Paper';
import { PlanConsumer } from '../../contexts/PlanContext.js';
import {MealCardShort2} from './MealCardShort';
import {Icon } from 'semantic-ui-react'


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
      style={{...style, position: 'absolute',  top: '50%', right: '-40px',  cursor: 'pointer'}}
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
      style={{...style, position: 'absolute',  top: '50%', left: '-40px', cursor: 'pointer'}}
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
          return null
          } else {
            return (
            
            <Paper className='mealsList' zDepth={0}>
            <h2 style={{textAlign: "center", textTransform: "uppercase"}}>{value.mealFilter}</h2>

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
