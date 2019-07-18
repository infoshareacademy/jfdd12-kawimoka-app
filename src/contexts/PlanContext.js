import React from "react";
import moment from "moment";
import meals from "../meals.json";
import { findMeal } from "../utils.js";

export const PlanContext = React.createContext();

export class PlanProvider extends React.Component {
  state = {
    activeDate: moment(),
    plan: {
      id: 2,
      days: [
        {
          date: "02-06-2019",
          meals: {
            breakfastId: 1,
            lunchId: 6,
            snackId: 22,
            dinnerId: 14
          }
        },
        {
          date: "03-06-2019",
          meals: {
            breakfastId: 2,
            lunchId: 7,
            snackId: 21,
            dinnerId: 15
          }
        },
        {
          date: "04-06-2019",
          meals: {
            breakfastId: 4,
            lunchId: 9,
            snackId: 22,
            dinnerId: 16
          }
        }
      ]
    },
    mealFilter: '',
    filteredMeals: [],
    showedMeal: {}
  };

  mapPlanToEvents = () => {
    return this.state.plan.days.map(day => {
      const date = day.date;
      const meals = this.getMeals(date);
      
      return {
        id: 0,
        title: `${meals.breakfast.name}\\n${meals.lunch.name}\n${meals.snack.name}\n${
          meals.dinner.name
        }`,
        allDay: true,
        start: moment(date, "DD-MM-YYYY").toDate(),
        end: moment(date, "DD-MM-YYYY").toDate()
      };
    });
  };

  getMeals = (date) =>{
    const dayObject = this.state.plan.days.find(day => day.date === date);
    if(!dayObject){
      return;
    } else {
      return {
        day: moment(date),
        breakfast: findMeal(dayObject.meals.breakfastId),
        lunch: findMeal(dayObject.meals.lunchId),
        snack: findMeal(dayObject.meals.snackId),
        dinner: findMeal(dayObject.meals.dinnerId),
      }
    }
  }

  setSelectedDate = (date) => {
    this.setState({
      activeDate: date
    })
    
  }
  
  // addMealToPlan = (meal) => {
  //   this.setState({
  //     [meal.type]: {
  //       id: meal.id,
  //       kcal: parseInt(meal.kcal),
  //       fat: parseInt(meal.nutritions.fat),
  //       carbs: parseInt(meal.nutritions.carbs),
  //       protein: parseInt(meal.nutritions.protein)
  //     }
  // })}

  // }

  // removeMealFromPlan = () => {

  // }

  ; 

  setMealFilter = filterName => {
    this.setState(
      {
        ...this.state,
        mealFilter: filterName,
        filteredMeals: meals.filter(meal => meal.type === filterName)
      }
    )
    
  };

  showMeal = meal => {
    this.setState({ showedMeal: meal.id })
  }



  render() {
    return (
      <PlanContext.Provider
        value={{
          ...this.state,
          setSelectedDate: this.setSelectedDate,
          events: this.mapPlanToEvents(),
          getMeals: this.getMeals,
          setMealFilter : this.setMealFilter,
          showMeal: this.showMeal,
          filteredMeals: this.state.filteredMeals
        }}
      >
        {this.props.children}
      </PlanContext.Provider>
    );
  }
  }
export const PlanConsumer = PlanContext.Consumer;
