import React from 'react'
import { NutritionsPieChart } from './PieChart/NutritionsPieChart'

export function Nutrition(props) {
    return (
        <>
        <div>
            <span style={{ color: '#0088FE' }}> Fat </span>
            <span style={{ color: '#00C49F' }}> Carbs </span>
            <span style={{ color: '#FFBB28' }}> Protein </span>
        </div>
        <div>
            <NutritionsPieChart sumNutrition={props.sumNutrition} />
        </div>
        </>
    )
}

