import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#FFED66", "#FF5E5B", "#00CECB"];

export function NutritionsPieChart(props) {
  const { data } = props;

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
