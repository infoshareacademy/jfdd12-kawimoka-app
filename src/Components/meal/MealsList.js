import React, { useState, useRef } from 'react'
import { MealCardFull } from './MealCardFull'
import Slider from 'react-slick'
import Paper from 'material-ui/Paper'
import { PlanConsumer } from '../../contexts/PlanContext.js'
import { MealCardShort2 } from './MealCardShort'
import { Icon } from 'semantic-ui-react'
import { MotivationView } from '../MotivationView/MotivationView'
import { NoMealsInfo } from '../NoMealsInfo/NoMealsInfo'

const settings = {
  className: 'center carousel-container',
  centerMode: true,
  infinite: true,
  speed: 250,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  transform: true
}

function SampleNextArrow(props) {
  const { onClick, style } = props
  return (
    <Icon
      style={{
        ...style,
        position: 'absolute',
        zIndex: '1',
        top: '50%',
        right: '-30px',
        cursor: 'pointer'
      }}
      name='angle double right'
      size='large'
      color='teal'
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { onClick, style } = props
  return (
    <Icon
      style={{
        ...style,
        position: 'absolute',
        zIndex: '1',
        top: '50%',
        left: '-30px',
        cursor: 'pointer'
      }}
      name='angle double left'
      size='large'
      color='teal'
      onClick={onClick}
    />
  )
}

export function MealsList() {
  const [choosenMeal, setchoosenMeal] = useState(0)
  const carousel = useRef()

  return (
    <PlanConsumer>
      {value => {
        if (value.filteredMeals.length === 0) {
          if (value.displayMotivationView) {
            return <MotivationView />
          } else {
            return <NoMealsInfo />
          }
        } else {
          return (
            <Paper className='mealsList' zDepth={0}>
              <Paper zDepth={3}>
                <h2
                  style={{
                    textAlign: 'center',
                    textTransform: 'capitalize',
                    fontSize: '20px',
                    margin: '4px'
                  }}>
                  {value.mealFilter}
                </h2>
              </Paper>

              <Slider
                {...settings}
                slidesToShow={Math.min(value.filteredMeals.length, 3)}
                afterChange={index => {
                  setchoosenMeal(index)
                }}
                ref={carousel}>
                {value.filteredMeals.map((filteredMeal, index) => (
                  <div
                    style={{ maxWidth: '300px', maxHeight: '350px' }}
                    key={index}
                    onClick={() => carousel.current.slickGoTo(index)}>
                    <MealCardShort2
                      key={filteredMeal.id}
                      meal={filteredMeal}
                      style={{ maxWidth: '300px', maxHeight: '350px' }}
                    />
                  </div>
                ))}
              </Slider>

              <div>
                <MealCardFull meal={value.filteredMeals[choosenMeal]} />
              </div>
            </Paper>
          )
        }
      }}
    </PlanConsumer>
  )
}
