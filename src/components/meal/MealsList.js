import React, { Component } from "react";
import meals from "./meals.json";
import { MealCardShort } from "./MealCardShort";
import { MealCardFull } from "./MealCardFull";  // tutaj meal card short
import styles from './Meal.module.css';
import {MealsTypesList} from './MealsTypesList';




export class MealsList extends Component {

state={
  selectedMeal: meals[0]
}


  render() {
    return (
      <div className={styles.bothCardsVisible}>
       <div>          
            <MealsTypesList  />     
        </div>
      

      <div>
        {meals.map(mealFromJson => (
          <div onClick={()=> {this.setState({selectedMeal: mealFromJson})}}>             
            <MealCardShort key={mealFromJson.id} meal={mealFromJson} /> 
          </div>
        ))}
      </div>

      <div>
          <MealCardFull meal={this.state.selectedMeal}/>
      </div>
      </div>
    );
  }
}
