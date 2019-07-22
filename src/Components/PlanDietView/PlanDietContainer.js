import React from "react";
import SingleDay from "./SingleDay";
import { MealsList } from "../meal/MealsList";
import "./PlanDietContainer.css";
import { Nutrition } from "./Nutrition/Nutrition";

export class PlanDietContainer extends React.Component {
  render() {
    return (
      <div className="planDietContainer">
        <Nutrition />
        <SingleDay />
        <MealsList />
      </div>
    );
  }
}
