import React from 'react'
import SingleDay  from './SingleDay'
import { MealsList } from '../meal/MealsList';


// import {DragDropContext} from 'react-beautiful-dnd';
// import meals from './MealList/meals.json'


export class PlanDietContainer extends React.Component{

    constructor(props) {
        super(props)

        // const date = new Date(this.props.date).toLocaleDateString()
        // date.setHours(0);
        // date.setMinutes(0);
        // date.setSeconds(0);
        
        this.state = {
            [this.props.date]: {
                breakfastId: undefined,
                breakfastKcal: 0,
                lunchId: undefined,
                lunchKcal: 0,
                snackId: undefined,
                snackKcal: 0,
                dinnerId: undefined,
                dinnerKcal: 0}
            
        }    }


    componentDidUpdate= () => {
        localStorage[this.props.date] = JSON.stringify(this.state)
    }

    componentDidMount = () => {
        const newState = JSON.parse(localStorage.getItem(`${this.state.date}`))
        this.setState(newState)
    }

    onAdd = (meal) => {
        let mealKcalNumber = parseInt(meal.kcal)
        if (meal.type === "breakfast") {
            this.setState({breakfastId: meal.id, 
            breakfastKcal: mealKcalNumber}) 
        } else if (meal.type === "lunch") {
            this.setState({lunchId: meal.id,
            lunchKcal: mealKcalNumber})
        } else if (meal.type === 'snack') {
            this.setState({snackId: meal.id,
            snackKcal: mealKcalNumber})
        } else if (meal.type === "dinner") {
            this.setState({dinnerId: meal.id,
            dinnerKcal: mealKcalNumber})
        }
    
    }

    onDelete = (meal) => {
        if (meal.type === "breakfast") {
            this.setState({breakfastId: undefined,
            breakfastKcal: 0}) 
        } else if (meal.type === "lunch") {
            this.setState({lunchId: undefined,
            lunchKcal: 0})
        } else if (meal.type === 'snack') {
            this.setState({snackId: undefined,
            snackKcal: 0})
        } else if (meal.type === "dinner") {
            this.setState({dinnerId: undefined,
            dinnerKcal: 0})
        }

    }

    sumCalories = () => {
        let countedCalories = this.state.breakfastKcal + this.state.lunchKcal + this.state.snackKcal + this.state.dinnerKcal
        return countedCalories
    }


    render(){
        return <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                
                <SingleDay 
                date = {this.props.date} 
                breakfastId = {this.state.breakfastId} 
                lunchId = {this.state.lunchId} 
                snackId = {this.state.snackId} 
                dinnerId = {this.state.dinnerId}
                sumCalories = {this.sumCalories} 
                onDelete = {this.onDelete}/>
                <MealsList onAdd = {this.onAdd}/>
            </div>
        
    }
    
}