import React, { useContext } from "react";
import { NutritionsPieChart } from "./PieChart/NutritionsPieChart";
import Paper from "material-ui/Paper";
import "./Nutrition.css";
import { PlanConsumer, PlanContext } from "../../../contexts/PlanContext";
import { SummaryDay } from "../SingleDay/SummaryDay";

export function Nutrition() {
  const { sumNutrition } = useContext(PlanContext);

  const data = [
    { name: "Fat", value: sumNutrition("fat") || 1 },
    { name: "Carbs", value: sumNutrition("carbs") || 1 },
    { name: "Protein", value: sumNutrition("protein") || 1 }
  ];

  return (
    <Paper zDepth={3} className="nutritionContainer">
      <h2>Nutrition summary</h2>
      <div>
        <NutritionsPieChart sumNutrition={sumNutrition} data={data} />
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignSelf: "flex-start"
        }}
      >
        <li className="nutritionItem">
          <div className="squareFat" />
          <h5>Fat:</h5>
        </li>
        <li className="nutritionItem">
          <div className="squareCarbs" />
          <h5>Carbs:</h5>
        </li>
        <li className="nutritionItem">
          <div className="squareProtein" />
          <h5>Protein:</h5>
        </li>
      </ul>

      <SummaryDay sumNutrition={sumNutrition} kcalGoal={"1800"} />
    </Paper>
  );
}
