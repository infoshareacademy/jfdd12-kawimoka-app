import React, { Component } from 'react'
import meals from './meals.json'
import { MealCardShort } from './MealCardShort'
// import {Droppable, Draggable} from 'react-beautiful-dnd'
import { MealCardFull } from './MealCardFull'
import styles from './Meal.module.css'
import { AddMealButton } from './AddMealButton.js'
import {MealModal} from "./MealModal"

export class MealsList extends Component {
  state = {
    selectedMeal: {},
    mealFilter: ''
  }

  setMealFilter = filterName => {
    this.setState({
      mealFilter: filterName
    })
  }

  clearMeal = () => {
    this.setState({
      selectedMeal: {}
    })
  }

  render() {
    return (
      <div className={styles.mealsList}>
        <div className={styles.mealsListHeader}> Choose and add meals from the list </div>

        <div className={styles.mealsTypes}>
          <div>
            <h1
              onClick={() => {
                this.setMealFilter('breakfast')
                this.clearMeal()
              }}>
             
              Breakfast
            </h1>
          </div>

          <div>
            <h1
              onClick={() => {
                this.setMealFilter('lunch')
                this.clearMeal()
              }}>
              
              Lunch
            </h1>
          </div>

          <div>
            <h1
              onClick={() => {
                this.setMealFilter('snack')
                this.clearMeal()
              }}>
              
              Snacks
            </h1>
          </div>

          <div>
            <h1
              onClick={() => {
                this.setMealFilter('dinner')
                this.clearMeal()
              }}>
          
              Dinner
            </h1>
          </div>
        </div>

        <div className={styles.mealsShortCardsList}>
          <div>
            {meals
              .filter(meal => meal.type === this.state.mealFilter)
              .map(filteredMeal => (
                <div style={{display: "flex", flexFlow: "row"}}
                  className={styles.mealsShortCardOne}
                  onClick={() => {
                    this.setState({ selectedMeal: filteredMeal })
                  }}>
                  {' '}
                  <MealCardShort
                    key={filteredMeal.id}
                    meal={filteredMeal}
                    onAdd={this.props.onAdd}
                  />{' '}
                  <div style={{justifyContent: "center"}}>
                  <AddMealButton
                    onAdd={this.props.onAdd}
                    meal={filteredMeal}
                    selectedMealId={filteredMeal.id}
                  />
                  <MealModal    meal={this.state.selectedMeal}
                onAdd={this.props.onAdd}
                onMealClose={this.clearMeal} />
                </div>
            
                </div>
              ))}
          </div>

        </div>
      </div>
    )
  }
}
