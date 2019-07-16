import React, { Component } from 'react'
import meals from '../../meals.json'
import { MealCardShort } from './MealCardShort'
import { MealCardFull } from './MealCardFull'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import {MealModal} from "./MealModal"
import './Meal.css'

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
      <div className='mealsList'>
        <div className='mealsListHeader'> Choose and add meals from the list </div>

        <div className='mealsTypes'>
          <div className='mealFilterButton' onClick={() => this.setMealFilter('breakfast')}><h1 >Breakfast</h1></div>
          <div className='mealFilterButton' onClick={() => this.setMealFilter('lunch')}><h1 >Lunch</h1></div>
          <div className='mealFilterButton' onClick={() => this.setMealFilter('snack')}><h1 >Snacks</h1></div>
          <div className='mealFilterButton' onClick={() => this.setMealFilter('dinner')}><h1 >Dinner</h1></div>
        </div>

        <div className='mealsShortCardsList'>
          <div>
            {meals.filter(meal => meal.type === this.state.mealFilter)
              .map(filteredMeal => (
                <div style={{display: "flex", flexFlow: "row"}}
                  className={"mealsShortCardOne"}
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
                  <FontAwesomeIcon icon={['fas', 'plus']} size='3x' className='addMealButton' onClick={() => this.props.onAdd(filteredMeal)}/>
                  <MealModal    meal={this.state.selectedMeal} onAdd={this.props.onAdd} onMealClose={this.clearMeal} />
                </div>
                </div>
            
                
                  
                
              ))
            }
          </div>

        </div>
      </div>
    )
  }
}
