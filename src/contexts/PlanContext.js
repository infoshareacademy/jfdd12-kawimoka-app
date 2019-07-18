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
    mealFilter: "",
    filteredMeals: [],
    showedMeal: {}
  };

  mapPlanToEvents = () => {
    return this.state.plan.days.map(day => {
      const date = day.date;
      const meals = this.getMeals(date);
      
      return {
        id: 0,
        title: `${meals.breakfast ? meals.breakfast.name : ''}\\n
                ${meals.lunch ? meals.lunch.name : ''}\n
                ${meals.snack ? meals.snack.name : ''}\n
                ${meals.dinner ? meals.snack.name : ''}`,
        allDay: true,
        start: moment(date, "DD-MM-YYYY").toDate(),
        end: moment(date, "DD-MM-YYYY").toDate()
      };
    });
  };

  getMeals = date => {
    const dayObject = this.state.plan.days.find(day => {
      return day.date === date;
    });
    if (!dayObject) {
      return;
    } else {
      return {
        day: moment(date),
        breakfast: findMeal(dayObject.meals.breakfastId),
        lunch: findMeal(dayObject.meals.lunchId),
        snack: findMeal(dayObject.meals.snackId),
        dinner: findMeal(dayObject.meals.dinnerId)
      };
    }
  };

  getMealsByDay = () => {
    const foundDay = this.state.plan.days.find(day => {
      if (day.date === this.state.activeDate.format("DD-MM-YYYY")) {
        return true;
      }
    });
    return (
      (foundDay && foundDay.meals) || {
        breakfastId: null,
        snackId: null,
        lunchId: null,
        dinnerId: null
      }
    );
  };

  setSelectedDate = date => {
    this.setState({
      activeDate: date
    });
  };

  decrementActiveDate = () => {
    this.setState(prevState => ({
      activeDate: prevState.activeDate.subtract("days", 1)
    }));
  };

  incrementActiveDate = () => {
    this.setState(prevState => ({
      activeDate: prevState.activeDate.add("days", 1)
    }));
  };

  addMealToPlan = meal => {
    let currentDate = this.state.activeDate.format("DD-MM-YYYY")
    let mealsOfTheDay = this.getMealsByDay();
    mealsOfTheDay[meal.type + 'Id'] = meal.id;
    let dayMealIndex = this.state.plan.days.findIndex(day => day.date === currentDate)
    if(dayMealIndex !== -1){
      this.setState((prevState) => {
        prevState.plan.days.splice(dayMealIndex, 1);
        return prevState;
      })
    }
      this.setState(prevState => ({
        [prevState.plan.days]: prevState.plan.days.push({
          date: currentDate,
          meals: mealsOfTheDay
          })
        })
      )
  };

  // }

  // removeMealFromPlan = () => {

  // }

  setMealFilter = filterName => {
    this.setState({
      ...this.state,
      mealFilter: filterName,
      filteredMeals: meals.filter(meal => meal.type === filterName)
    });
  };

  showMeal = meal => {
    this.setState({ showedMeal: meal.id });
  };

  render() {
    return (
      <PlanContext.Provider
        value={{
          ...this.state,
          setSelectedDate: this.setSelectedDate,
          events: this.mapPlanToEvents(),
          getMeals: this.getMeals,
          setMealFilter: this.setMealFilter,
          showMeal: this.showMeal,
          filteredMeals: this.state.filteredMeals,
          getMealsByDay: this.getMealsByDay,
          decrementActiveDate: this.decrementActiveDate,
          incrementActiveDate: this.incrementActiveDate,
          addMealToPlan: this.addMealToPlan
        }}
      >
        {this.props.children}
      </PlanContext.Provider>
    );
  }
}
export const PlanConsumer = PlanContext.Consumer;
