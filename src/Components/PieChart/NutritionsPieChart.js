import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export function NutritionsPieChart(props) {
  const { sumNutrition } = props;

  const data = [
    { name: 'Fat', value: sumNutrition('fat') || 1 },
    { name: 'Carbs', value: sumNutrition('carbs') || 1 },
    { name: 'Protein', value: sumNutrition('protein') || 1 }
  ]

  return (
    <PieChart width={250} height={250}>
      <Pie
        data={data}
        cx={100}
        cy={100}
        innerRadius={60}
        outerRadius={80}
        fill='#8884d8'
        paddingAngle={5}
        dataKey='value'>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}
