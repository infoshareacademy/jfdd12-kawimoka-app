import React from 'react'
import SingleDay from './SingleDay'
import { MealsList } from '../meal/MealsList'
import { NutritionsPieChart } from '../PieChart/NutritionsPieChart'
// import { UiStateLocalStorageService } from '../../ui-state-ls.service'
// import {DragDropContext} from 'react-beautiful-dnd';

export class PlanDietContainer extends React.Component {
  state = {
    breakfastId: undefined,
    breakfastKcal: 0,
    breakfastFat: 0,
    breakfastCarbs: 0,
    breakfastProtein: 0,
    lunchId: undefined,
    lunchKcal: 0,
    lunchFat: 0,
    lunchCarbs: 0,
    lunchProtein: 0,
    snackId: undefined,
    snackKcal: 0,
    snackFat: 0,
    snackCarbs: 0,
    snackProtein: 0,
    dinnerId: undefined,
    dinnerKcal: 0,
    dinnerFat: 0,
    dinnerCarbs: 0,
    dinnerProtein: 0
  }

  componentDidUpdate = () => {
    localStorage.meals = JSON.stringify(this.state)
  }

  componentDidMount = () => {
    const newState = JSON.parse(localStorage.getItem('meals'))
    this.setState(newState)
  }

  onAdd = meal => {
    let mealKcalNumber = parseInt(meal.kcal)
    let mealFat = parseInt(meal.nutritions.fat)
    let mealCarbs = parseInt(meal.nutritions.carbs)
    let mealProtein = parseInt(meal.nutritions.protein)
    if (meal.type === 'breakfast') {
      this.setState({
        breakfastId: meal.id,
        breakfastKcal: mealKcalNumber,
        breakfastFat: mealFat,
        breakfastCarbs: mealCarbs,
        breakfastProtein: mealProtein
      })
    } else if (meal.type === 'lunch') {
      this.setState({
        lunchId: meal.id,
        lunchKcal: mealKcalNumber,
        lunchFat: mealFat,
        lunchCarbs: mealCarbs,
        lunchProtein: mealProtein
      })
    } else if (meal.type === 'snack') {
      this.setState({
        snackId: meal.id,
        snackKcal: mealKcalNumber,
        snackFat: mealFat,
        snackCarbs: mealCarbs,
        snackProtein: mealProtein
      })
    } else if (meal.type === 'dinner') {
      this.setState({
        dinnerId: meal.id,
        dinnerKcal: mealKcalNumber,
        dinnerFat: mealFat,
        dinnerCarbs: mealCarbs,
        dinnerProtein: mealProtein
      })
    }
  }

  onDelete = meal => {
    if (meal.type === 'breakfast') {
      this.setState({
        breakfastId: undefined,
        breakfastKcal: 0,
        breakfastFat: 0,
        breakfastCarbs: 0,
        breakfastProtein: 0
      })
    } else if (meal.type === 'lunch') {
      this.setState({
        lunchId: undefined,
        lunchKcal: 0,
        lunchFat: 0,
        lunchCarbs: 0,
        lunchProtein: 0
      })
    } else if (meal.type === 'snack') {
      this.setState({
        snackId: undefined,
        snackKcal: 0,
        snackFat: 0,
        snackCarbs: 0,
        snackProtein: 0
      })
    } else if (meal.type === 'dinner') {
      this.setState({
        dinnerId: undefined,
        dinnerKcal: 0,
        dinnerFat: 0,
        dinnerCarbs: 0,
        dinnerProtein: 0
      })
    }
  }

  sumCalories = () => {
    let countedCalories =
      this.state.breakfastKcal + this.state.lunchKcal + this.state.snackKcal + this.state.dinnerKcal
    return countedCalories
  }

  sumFat = () => {
    let countedFat =
      this.state.breakfastFat + this.state.lunchFat + this.state.snackFat + this.state.dinnerFat
    return countedFat
  }

  sumCarbs = () => {
    let countedCarbs =
      this.state.breakfastCarbs +
      this.state.lunchCarbs +
      this.state.snackCarbs +
      this.state.dinnerCarbs
    return countedCarbs
  }

  sumProtein = () => {
    let countedProtein =
      this.state.breakfastProtein +
      this.state.lunchProtein +
      this.state.snackProtein +
      this.state.dinnerProtein
    return countedProtein
  }

  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
        <NutritionsPieChart
          sumFat={this.sumFat}
          sumCarbs={this.sumCarbs}
          sumProtein={this.sumProtein}
        />
        <SingleDay
          date={this.props.date}
          breakfastId={this.state.breakfastId}
          lunchId={this.state.lunchId}
          snackId={this.state.snackId}
          dinnerId={this.state.dinnerId}
          sumCalories={this.sumCalories}
          onDelete={this.onDelete}
        />
        <MealsList onAdd={this.onAdd} />
      </div>
    )
  }
}
