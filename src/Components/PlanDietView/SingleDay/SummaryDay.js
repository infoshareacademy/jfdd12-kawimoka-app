import React from "react";
import "./SingleDay.css";

export function SummaryDay(props) {
  let { sumNutrition: sumCalories, kcalGoal } = props;

  const sumCaloriesCount = sumCalories("kcal");
  let leftCalories = kcalGoal - sumCaloriesCount;

  if (leftCalories < 0) {
    leftCalories = 0;
  }

  return (
    <div className="summaryContainer">
      <div>
        <h3 className="summaryText numbers left">
          {sumCaloriesCount} / {kcalGoal}
        </h3>
        <h3 className="summaryText right">calories / kcal goal</h3>
      </div>
      <div>
        <h3 className="summaryText numbers left">{leftCalories}</h3>
        <h3 className="summaryText left">calories left</h3>
      </div>
    </div>
  );
}
