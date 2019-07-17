import React, { Component } from 'react'
import meals from '../../meals.json'
import { MealsTypes } from './MealsTypes'
import { MealCardShort } from './MealCardShort'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {MealModal} from "./MealModal"
import './Meal.css'
import Paper from 'material-ui/Paper';


library.add(faPlus);

export class MealsList extends Component {
  state = {
      mealFilter: '',
      selectedMeal: {}
  };

  setMealFilter = filterName => {
    this.setState({
        mealFilter: filterName,
        selectedMeal: {}
    })
  };

  render() {
    return (
      <Paper className='mealsList'zDepth={0}>
 

        <MealsTypes setMealFilter={this.setMealFilter}/>

        <div className='mealsShortCardsList'>
          <div>
            {meals.filter(meal => meal.type === this.state.mealFilter)
              .map(filteredMeal => (
                <div style={{display: "flex", flexFlow: "row"}}
                  className={"mealsShortCardOne"}
                  onClick={() => {
                    this.setState({ selectedMeal: filteredMeal })
                  }}>
                  
                  <MealCardShort
                    key={filteredMeal.id}
                    meal={filteredMeal}
                    onAdd={this.props.onAdd}
                  />
                  <div style={{justifyContent: "center"}}>
                  <FontAwesomeIcon icon={['fas', 'plus']} size='3x' className='addMealButton' onClick={() => this.props.onAdd(filteredMeal)}/>
                  <MealModal    meal={this.state.selectedMeal} onAdd={this.props.onAdd} onMealClose={this.clearMeal} />
                </div>
                </div>
            
                
                  
                
              ))
            }
          </div>

        </div>
      </Paper>
    )
  }
}
