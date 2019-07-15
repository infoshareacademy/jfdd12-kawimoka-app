import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28']

export function NutritionsPieChart(props) {
  const { sumFat, sumCarbs, sumProtein } = props

  const data = [
    { name: 'Fat', value: sumFat() || 1 },
    { name: 'Carbs', value: sumCarbs() || 1 },
    { name: 'Protein', value: sumProtein() || 1 }
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
