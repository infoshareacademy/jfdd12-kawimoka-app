import React from "react";
import { MealSpace } from "./MealSpace";
import { DayPicker } from "./DayPicker";
import "./SingleDay.css";
import Paper from "material-ui/Paper";
import { PlanConsumer } from "../../../contexts/PlanContext";

function SingleDay() {
  return (
    <PlanConsumer>
      {value => {
        const { getMealsByDay } = value;
        const { lunchId, dinnerId, snackId, breakfastId } = getMealsByDay();
        return (
          <Paper zDepth={3} className="singleDayContainer">
            <DayPicker date={value.activeDate} />
            <MealSpace mealTypeTitle={"breakfast"} mealId={breakfastId} />
            <MealSpace mealTypeTitle={"lunch"} mealId={lunchId} />
            <MealSpace mealTypeTitle={"snack"} mealId={snackId} />
            <MealSpace mealTypeTitle={"dinner"} mealId={dinnerId} />
          </Paper>
        );
      }}
    </PlanConsumer>
  );
}

export default SingleDay;
