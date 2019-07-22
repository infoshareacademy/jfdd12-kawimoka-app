import React from "react";
import { NutritionsPieChart } from "./PieChart/NutritionsPieChart";
import Paper from "material-ui/Paper";
import "./Nutrition.css";
import { PlanConsumer } from "../../../contexts/PlanContext";
import { SummaryDay } from "../SingleDay/SummaryDay";

export function Nutrition(props) {
  return (
    <PlanConsumer>
      {value => {
        return (
          <Paper zDepth={3} className="nutritionContainer">
            <h2>Nutrition summary</h2>
            <div>
              <NutritionsPieChart sumNutrition={value.sumNutrition} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <span
                style={{
                  color: "#FFED66"
                }}
              >
                Fat
              </span>
              <span
                style={{
                  color: "#FF5E5B"
                }}
              >
                Carbs
              </span>
              <span style={{ color: "#00CECB" }}>Protein</span>
            </div>

            <SummaryDay sumNutrition={value.sumNutrition} kcalGoal={"1800"} />
          </Paper>
        );
      }}
    </PlanConsumer>
  );
}
