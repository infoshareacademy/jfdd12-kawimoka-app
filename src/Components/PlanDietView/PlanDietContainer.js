import React from 'react'
import SingleDay from './SingleDay'
import { MealsList } from '../meal/MealsList'
import { PieChart, Pie, Cell } from 'recharts'

// import {DragDropContext} from 'react-beautiful-dnd';
// import meals from './MealList/meals.json'

export class PlanDietContainer extends React.Component {
  state = {
    breakfastId: undefined,
    breakfastKcal: 0,
    breakfastFat: 0,
    lunchId: undefined,
    lunchKcal: 0,
    lunchFat: 0,
    snackId: undefined,
    snackKcal: 0,
    snackFat: 0,
    dinnerId: undefined,
    dinnerKcal: 0,
    dinnerFat: 0
  }

  COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']

  onAdd = meal => {
    let mealKcalNumber = parseInt(meal.kcal)
    let mealFat = parseInt(meal.nutritions.fat)
    let mealCarbs = parseInt(meal.nutritions.carbs)
    let mealProtein = parseInt(meal.nutritions.protein)
    if (meal.type === 'breakfast') {
      this.setState({
        breakfastId: meal.id,
        breakfastKcal: mealKcalNumber,
        breakfastFat: mealFat
      })
    } else if (meal.type === 'lunch') {
      this.setState({
        lunchId: meal.id,
        lunchKcal: mealKcalNumber,
        lunchFat: mealFat
      })
    } else if (meal.type === 'snack') {
      this.setState({
        snackId: meal.id,
        snackKcal: mealKcalNumber,
        snackFat: mealFat
      })
    } else if (meal.type === 'dinner') {
      this.setState({
        dinnerId: meal.id,
        dinnerKcal: mealKcalNumber,
        dinnerFat: mealFat
      })
    }
  }

  onDelete = meal => {
    if (meal.type === 'breakfast') {
      this.setState({ breakfastId: undefined, breakfastKcal: 0 })
    } else if (meal.type === 'lunch') {
      this.setState({ lunchId: undefined, lunchKcal: 0 })
    } else if (meal.type === 'snack') {
      this.setState({ snackId: undefined, snackKcal: 0 })
    } else if (meal.type === 'dinner') {
      this.setState({ dinnerId: undefined, dinnerKcal: 0 })
    }
  }

  sumCalories = () => {
    let countedCalories =
      this.state.breakfastKcal + this.state.lunchKcal + this.state.snackKcal + this.state.dinnerKcal
    return countedCalories
  }
  sumFat = () => {
    let countedCalories =
      this.state.breakfastFat + this.state.lunchFat + this.state.snackFat + this.state.dinnerFat
    return countedCalories
  }
  sumCarbs = () => {
    let countedCalories =
      this.state.breakfastNutritions[1] +
      this.state.lunchNutritions[1] +
      this.state.snackNutritions[1] +
      this.state.dinnerNutritions[1]
    return countedCalories
  }
  sumProtein = () => {
    let countedCalories =
      this.state.breakfastNutritions[2] +
      this.state.lunchNutritions[2] +
      this.state.snackNutritions[2] +
      this.state.dinnerNutritions[2]
    return countedCalories
  }
  data = [
    { name: 'Group B', value: this.sumCalories() },
    { name: 'Group C', value: 200 },
    { name: 'Group D', value: 200 }
  ]
  render() {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'left' }}>
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
        <div>
          <PieChart
            width={800}
            height={400}
            onMouseEnter={this.onPieEnter}
            sumCalories={this.sumCalories}>
            <Pie
              data={this.data}
              cx={120}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill='#8884d8'
              paddingAngle={5}
              dataKey='value'>
              {this.data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={this.COLORS[index % this.COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </div>
      </div>
    )
  }
}
