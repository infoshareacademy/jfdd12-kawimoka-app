import React from 'react'
import { NutritionsPieChart } from './PieChart/NutritionsPieChart'
import Paper from 'material-ui/Paper';
import './Nutrition.css'

export function Nutrition(props) {
    return (
        <Paper zDepth={3} className="nutritionContainer">
        <div>
            <span style={{ color: '#FFED66' }}> Fat </span>
            <span style={{ color: '#FF5E5B' }}> Carbs </span>
            <span style={{ color: '#00CECB' }}> Protein </span>
        </div>
        <div>
            <NutritionsPieChart sumNutrition={props.sumNutrition} />
        </div>
        </Paper>
    )
}
