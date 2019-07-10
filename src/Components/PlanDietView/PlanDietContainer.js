import React from 'react'
import SingleDay  from './SingleDay'
import { MealsList } from '../meal/MealsList';
// import {DragDropContext} from 'react-beautiful-dnd';
// import meals from './MealList/meals.json'


export class PlanDietContainer extends React.Component{

    state = {
        breakfastId: undefined,
        lunchId: undefined,
        snackId: undefined,
        dinnerId: undefined
    }

    onAdd = (meal) => {
        if (meal.type === "breakfast") {
            this.setState({breakfastId: meal.id}) 
        } else if (meal.type === "lunch") {
            this.setState({lunchId: meal.id})
        } else if (meal.type === 'snack') {
            this.setState({snackId: meal.id})
        } else if (meal.type === "dinner") {
            this.setState({dinnerId: meal.id})
        }
    }

    render(){
        return <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                
                <SingleDay 
                date = {this.props.date} 
                breakfastId = {this.state.breakfastId} 
                lunchId = {this.state.lunchId} 
                snackId = {this.state.snackId} 
                dinnerId = {this.state.dinnerId} />
                <MealsList onAdd = {this.onAdd}/>
            </div>
        
    }
    
}