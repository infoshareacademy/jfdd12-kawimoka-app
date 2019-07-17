import React from "react";
import moment from "moment";
import meals from "../meals.json";

export const PlanContext = React.createContext();

export class PlanProvider extends React.Component {
  state = {
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
    showedMeal: {}
  };

  mapPlanToEvents = () => {
    return this.state.plan.days.map(day => {
      const date = day.date;
      const { breakfastId, lunchId, snackId, dinnerId } = day.meals;
      const breakfast = meals.find(meal => meal.id === breakfastId);
      const lunch = meals.find(meal => meal.id === lunchId);
      const snack = meals.find(meal => meal.id === snackId);
      const dinner = meals.find(meal => meal.id === dinnerId);

      return {
        id: 0,
        title: `${breakfast.name}\n${lunch.name}\n${snack.name}\n${
          dinner.name
        }`,
        allDay: true,
        start: moment(date, "DD-MM-YYYY").toDate(),
        end: moment(date, "DD-MM-YYYY").toDate()
      };
    });
  };

  // addMealToPlan = (meal) => {
  //   this.setState({
  //     [meal.type]: {
  //       id: meal.id,
  //       kcal: parseInt(meal.kcal),
  //       fat: parseInt(meal.nutritions.fat),
  //       carbs: parseInt(meal.nutritions.carbs),
  //       protein: parseInt(meal.nutritions.protein)
  //     }
  // })

  // }

  // removeMealFromPlan = () => {

  // }

  filteredMeals = []; 

  setMealFilter = filterName => {
    this.setState((prevState) => {
      return {mealFilter: filterName}
    }, () => {
      this.filteredMeals = meals.filter(meal => meal.type === this.state.mealFilter)
    }) 
  };

  showMeal = meal => {
    this.setState({ showedMeal: meal.id })
  }



  render() {
    return (
      <PlanContext.Provider
        value={{
          ...this.state,
          events: this.mapPlanToEvents(),
          setMealFilter : this.setMealFilter,
          showMeal: this.showMeal,
          filteredMeals: this.filteredMeals
        }}
      >
        {this.props.children}
      </PlanContext.Provider>
    );
  }
}
export const PlanConsumer = PlanContext.Consumer;
