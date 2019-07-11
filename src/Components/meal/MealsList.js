import React, { Component } from "react";
import meals from "./meals.json";
import { MealCardShort } from "./MealCardShort";
// import {Droppable, Draggable} from 'react-beautiful-dnd'
import { MealCardFull } from "./MealCardFull";
import styles from "./Meal.module.css";

export class MealsList extends Component {
  state = {
    selectedMeal: {},
    mealFilter: ""
  };

  setMealFilter = filterName => {
    this.setState({
      mealFilter: filterName
    });
  };

  clearMeal = () => {
    this.setState({
      selectedMeal: {}
    });
  };

  render() {
    return (
      <div className={styles.mealsList}>
        <div className={styles.mealsTypes}>
          <div>
            <h1 onClick={() => this.setMealFilter("breakfast")}> Breakfast</h1>
          </div>
          <div>
            <h1 onClick={() => this.setMealFilter("lunch")}> Lunch</h1>
          </div>
          <div>
            <h1 onClick={() => this.setMealFilter("dinner")}> Dinner</h1>
          </div>
          <div>
            <h1 onClick={() => this.setMealFilter("snack")}> Snacks</h1>
          </div>
        </div>

        <div className={styles.mealsShortCardsList}>
          <div>
            {meals
              .filter(meal => meal.type === this.state.mealFilter)
              .map(filteredMeal => (
                <div
                  onClick={() => {
                    this.setState({ selectedMeal: filteredMeal });
                  }}
                >
                  {" "}
                  <MealCardShort
                    key={filteredMeal.id}
                    meal={filteredMeal}
                    onAdd={this.props.onAdd}
                  />{" "}
                </div>
              ))}
          </div>

          <div>
            {this.state.selectedMeal.id && (
              <MealCardFull
                meal={this.state.selectedMeal}
                onAdd={this.props.onAdd}
                onMealClose={this.clearMeal}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
