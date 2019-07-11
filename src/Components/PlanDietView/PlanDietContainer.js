import React from "react";
import SingleDay from "./SingleDay";
import { MealsList } from "../meal/MealsList";
// import {DragDropContext} from 'react-beautiful-dnd';
// import meals from './MealList/meals.json'

export class PlanDietContainer extends React.Component {
  state = {
    breakfastId: undefined,
    breakfastKcal: 0,
    lunchId: undefined,
    lunchKcal: 0,
    snackId: undefined,
    snackKcal: 0,
    dinnerId: undefined,
    dinnerKcal: 0
  };

  onAdd = meal => {
    let mealKcalNumber = parseInt(meal.kcal);
    let stateChange = null;
    if (meal.type === "breakfast") {
      stateChange = { breakfastId: meal.id, breakfastKcal: mealKcalNumber };
    } else if (meal.type === "lunch") {
      stateChange = { lunchId: meal.id, lunchKcal: mealKcalNumber };
    } else if (meal.type === "snack") {
      stateChange = { snackId: meal.id, snackKcal: mealKcalNumber };
    } else if (meal.type === "dinner") {
      stateChange = { dinnerId: meal.id, dinnerKcal: mealKcalNumber };
    }

    if (stateChange !== null) {
      this.setState(stateChange);
      this.props.onMealsStateChange(stateChange);
    }
  };

  onDelete = meal => {
    if (meal.type === "breakfast") {
      this.setState({ breakfastId: undefined, breakfastKcal: 0 });
    } else if (meal.type === "lunch") {
      this.setState({ lunchId: undefined, lunchKcal: 0 });
    } else if (meal.type === "snack") {
      this.setState({ snackId: undefined, snackKcal: 0 });
    } else if (meal.type === "dinner") {
      this.setState({ dinnerId: undefined, dinnerKcal: 0 });
    }
  };

  sumCalories = () => {
    let countedCalories =
      this.state.breakfastKcal +
      this.state.lunchKcal +
      this.state.snackKcal +
      this.state.dinnerKcal;
    return countedCalories;
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <SingleDay
          date={this.props.date}
          breakfastId={this.state.breakfastId}
          lunchId={this.state.lunchId}
          snackId={this.state.snackId}
          dinnerId={this.state.dinnerId}
          sumCalories={this.sumCalories}
          onDelete={this.onDelete}
        />
        <MealsList onAdd={this.onAdd} />
      </div>
    );
  }
}
