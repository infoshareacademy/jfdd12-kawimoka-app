import React, { Component } from 'react'
import meals from '../../meals.json'
import { MealsTypes } from './MealsTypes'
import { MealCardShort } from './MealCardShort'
import { MealCardFull } from './MealCardFull'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {MealModal} from "./MealModal"
//import './Meal.css'
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
        <div className='mealsListHeader'> Choose and add meals from the list </div>

        <MealsTypes setMealFilter={this.setMealFilter}/>

        <div className='mealsShortCardsList'>
          <div>
            {meals.filter(meal => meal.type === this.state.mealFilter)
              .map(filteredMeal => (
                <div style={{display: "flex", flexFlow: "row"}}

                  onClick={() => {
                    this.setState({ selectedMeal: filteredMeal })
                  }}>
                  {' '}
                  <MealCardShort
                    key={filteredMeal.id}
                    meal={filteredMeal}
                    onAdd={this.props.onAdd}
                  />{' '}
                  <div style={{justifyContent: "center"}}>
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
