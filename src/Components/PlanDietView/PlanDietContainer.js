import React from 'react'
import SingleDay  from './SingleDay'
import { MealsList } from './MealList/MealsList';
import {DragDropContext} from 'react-beautiful-dnd';

export class PlanDietContainer extends React.Component{

    render(){
        return <div style={{display: "flex", flexDirection: "row"}}>
            <MealsList />
            <SingleDay date = {this.props.date} />
        </div>
    }
    
}