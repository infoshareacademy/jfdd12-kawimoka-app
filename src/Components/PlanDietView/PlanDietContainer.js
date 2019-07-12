import React from 'react'
import SingleDay  from './SingleDay'
import { MealsList } from '../meal/MealsList';
import { UiStateLocalStorageService } from '../../ui-state-ls.service';


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
            [this.getDayKey()]: {
                breakfastId: undefined,
                breakfastKcal: 0,
                lunchId: undefined,
                lunchKcal: 0,
                snackId: undefined,
                snackKcal: 0,
                dinnerId: undefined,
                dinnerKcal: 0
            }
        }   
    }    

    componentDidMount() {
        const day = UiStateLocalStorageService.getState(this.getDayKey());
        console.log('day', day);
        this.setState(day);
    }

    saveMealInLocalStorage() {
        UiStateLocalStorageService.updateState({
            [this.getDayKey()]: this.state,
        });
    }

    getDayKey() {
        return this.props.date.format('DD-MM-YYYY');
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

        this.saveMealInLocalStorage();
    
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

        this.saveMealInLocalStorage();

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