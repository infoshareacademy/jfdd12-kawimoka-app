import React, { Component } from "react";
import meals from "./meals.json";
import { MealCardShort } from "./MealCardShort";
// import {Droppable, Draggable} from 'react-beautiful-dnd'
import { MealCardFull } from "./MealCardFull";  
import styles from './Meal.module.css';


export class MealsList extends Component {

state={
  selectedMeal: {},
  mealFilter: "",
}

  setMealFilter = (filterName) => {
    this.setState({
      mealFilter: filterName
    })
  }

clearMeal =() => {
  this.setState({
    selectedMeal: {},
  })
}




render() {
  console.log(meals)
  return (
    <div className={styles.bothCardsVisible}>
      <div className={styles.mealsList}>
        <div>
          <h1 onClick={() => this.setMealFilter('breakfast')}> Breakfast</h1>
        </div>
        <div>
          <h1 onClick={() => this.setMealFilter('lunch')}> Lunch</h1>
        </div>
        <div>
          <h1 onClick={() => this.setMealFilter('Dinner')}> Dinner</h1>
        </div>
        <div>
          <h1 onClick={() => this.setMealFilter('Snack')}> Snacks</h1>
        </div>
      </div>
      <div>
          {meals.filter(meal => meal.type === this.state.mealFilter)
              .map((filteredMeal) => (
                  <div 
                    onClick={()=> {
                        this.setState({selectedMeal: filteredMeal})
                      }}> 
                      
                      <MealCardShort key={filteredMeal.id} meal={filteredMeal}/> 
                      
                  </div>)
              )
          }
      </div>
      <div>
        {this.state.selectedMeal.id && <MealCardFull selectedMealId={this.state.selectedMeal.id} onAdd ={this.props.onAdd} meal={this.state.selectedMeal} onMealClose={this.clearMeal}/> }
      </div>

    </div>
  )
}

}