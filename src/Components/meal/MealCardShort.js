import React from "react";
import "./Meal.css";
import { PlanConsumer } from "../../contexts/PlanContext";

export function MealCardShort(props) {
  const { meal } = props;
  const { name, time, image, kcal } = meal;

  return (
    <PlanConsumer>
      {value => (
        <div className="mealCardShort">
          <img className="mealPhoto" src={image} alt={"tu jest tekst"} />
          <div className="mealCardShortInfo">
            <h1> {name} </h1>
            <h2>Calories: {kcal} kcal</h2>
            <h2>Prep Time: {time} min </h2>
            <button onClick={() => value.addMealToPlan(meal)}>ADD</button>
          </div>
        </div>
      )}
    </PlanConsumer>
  );
}
