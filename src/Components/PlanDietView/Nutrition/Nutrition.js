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

  function getMacrosValue(macroName) {
    const macro = data.find(macro => {
      return macro.name === macroName;
    });
    const macroValue = macro.value;
    return macroValue === 1 ? 0 : macroValue;
  }

  return (
    <div className="nutritionContainer">
      <h2>Nutrition</h2>
      <Paper zDepth={3} className="nutritionCard">
        <SummaryDay sumNutrition={sumNutrition} kcalGoal={"1800"} />
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
            <h5>Fat: {getMacrosValue("Fat")}</h5>
          </li>
          <li className="nutritionItem">
            <div className="squareCarbs" />
            <h5>Carbs: {getMacrosValue("Carbs")}</h5>
          </li>
          <li className="nutritionItem">
            <div className="squareProtein" />
            <h5>Protein: {getMacrosValue("Protein")}</h5>
          </li>
        </ul>
      </Paper>
    </div>
  );
}
