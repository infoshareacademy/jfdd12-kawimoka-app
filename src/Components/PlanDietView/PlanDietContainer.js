import React from 'react'
import SingleDay  from './SingleDay'
import { MealsList } from './MealList/MealsList';
import {DragDropContext} from 'react-beautiful-dnd';
import meals from './MealList/meals.json'


export class PlanDietContainer extends React.Component{

    

    onAdd = (id) => {
        return console.log(id)
    }

    render(){
        return <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                
                <SingleDay date = {this.props.date} />
                <MealsList onAdd = {this.onAdd}/>
            </div>
        
    }
    
}