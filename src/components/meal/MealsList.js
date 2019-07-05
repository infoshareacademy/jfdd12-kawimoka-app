import React, { Component } from "react";
import meals from "./meals.json";
import { MealCardShort } from "./MealCardShort";
import { MealCardFull } from "./MealCardFull";  // tutaj meal card short

export class MealsList extends Component {
  render() {
    return (
      <div>
        {meals.map(mealFromJson => (
          <MealCardShort key={mealFromJson.id} meal={mealFromJson} />
        ))}
      </div>
    );
  }
}
