import React from 'react'
import SingleDay  from './SingleDay'
import { MealsList } from './MealList/MealsList';
// import {DragDropContext} from 'react-beautiful-dnd';
// import meals from './MealList/meals.json'


export class PlanDietContainer extends React.Component{

    selectedMealId;

    onAdd = (id) => {
        return this.selectedMealId = id
    }

    render(){
        return <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                
                <SingleDay date = {this.props.date} selectedMealId = {this.selectedMealId} />
                <MealsList onAdd = {this.onAdd}/>
            </div>
        
    }
    
}