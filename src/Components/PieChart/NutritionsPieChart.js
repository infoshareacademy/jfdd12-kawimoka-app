import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

export function NutritionsPieChart(props) {
  const { sumFat, sumCarbs, sumProtein } = props

  const data = [
    { name: 'Fat', value: sumFat() },
    { name: 'Carbs', value: sumCarbs() },
    { name: 'Protein', value: sumProtein() }
  ]

  return (
    <PieChart width={300} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={200}
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
