import React from "react";
import SingleDay from "./SingleDay";
import { MealsList } from "../meal/MealsList";
import "./PlanDietContainer.css";
import { Nutrition } from "./Nutrition/Nutrition";
import { Filters } from "./SingleDay/Filters";

export class PlanDietContainer extends React.Component {
  render() {
    return (
      <div className="planDietContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexBasis: "300px"
          }}
        >
          <Nutrition />
          <Filters />
        </div>

        <SingleDay />
        <MealsList />
      </div>
    );
  }
}
