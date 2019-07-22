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
<<<<<<< HEAD
    console.log(meals);
    return this.state.plan.days
      .map(day => {
        const date = day.date;
        const { breakfastId, lunchId, snackId, dinnerId } = day.meals;
        const breakfast = meals.find(meal => meal.id === breakfastId);
        const lunch = meals.find(meal => meal.id === lunchId);
        const snack = meals.find(meal => meal.id === snackId);
        const dinner = meals.find(meal => meal.id === dinnerId);

        console.log(breakfast);
        console.log(lunch);
        console.log(snack);
        console.log(snack);

        return [
          {
            id: breakfastId,
            title: `${breakfast.name}`,
            allDay: false,
            start: moment(date, "DD-MM-YYYY").toDate(),
            end: moment(date, "DD-MM-YYYY").toDate()
          },
          {
            id: lunchId,
            title: `${lunch.name}`,
            allDay: false,
            start: moment(date, "DD-MM-YYYY").toDate(),
            end: moment(date, "DD-MM-YYYY").toDate()
          },
          {
            id: snackId,
            title: `${snack.name}`,
            allDay: false,
            start: moment(date, "DD-MM-YYYY").toDate(),
            end: moment(date, "DD-MM-YYYY").toDate()
          },
          {
            id: dinnerId,
            title: `${dinner.name}`,
            allDay: false,
            start: moment(date, "DD-MM-YYYY").toDate(),
            end: moment(date, "DD-MM-YYYY").toDate()
          }
        ];
      })
      .reduce((acc, val) => acc.concat(val), []);
=======
    return this.state.plan.days.map(day => {
      const date = day.date;
      const meals = this.getMeals(date);

      return {
        id: 0,
        title: `${
          meals.breakfast && meals.breakfast.name ? meals.breakfast.name : ""
        }\\n
                ${meals.lunch && meals.lunch.name ? meals.lunch.name : ""}\n
                ${meals.snack && meals.snack.name ? meals.snack.name : ""}\n
                ${meals.dinner && meals.dinner.name ? meals.snack.name : ""}`,
        allDay: true,
        start: moment(date, "DD-MM-YYYY").toDate(),
        end: moment(date, "DD-MM-YYYY").toDate()
      };
    });
>>>>>>> develop
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

  addOrRemoveMeal = (meal, isAdd) => {
    let currentDate = this.state.activeDate.format("DD-MM-YYYY");
    let mealsOfTheDay = this.getMealsByDay();
    let mealId = isAdd ? meal.id : null;
    mealsOfTheDay[meal.type + "Id"] = mealId;
    let dayMealIndex = this.state.plan.days.findIndex(
      day => day.date === currentDate
    );

    if (dayMealIndex !== -1) {
      this.setState(prevState => {
        prevState.plan.days.splice(dayMealIndex, 1);
        return prevState;
      });
    }
    this.setState(prevState => ({
      [prevState.plan.days]: prevState.plan.days.push({
        date: currentDate,
        meals: mealsOfTheDay
      })
    }));
  };

  setMealFilter = filterName => {
    this.setState({
      ...this.state,
      mealFilter: filterName,
      filteredMeals: meals.filter(meal => meal.type === filterName)
    });
  };

  sumNutrition = field => {
    const { lunchId, dinnerId, snackId, breakfastId } = this.getMealsByDay();
    const mealsIds = [breakfastId, lunchId, snackId, dinnerId];

    const foundMealsObjects = meals.filter(meal => mealsIds.includes(meal.id));

    return foundMealsObjects.reduce((acc, meal) => {
      if (field !== "kcal") {
        return acc + meal.nutritions[field];
      } else {
        return acc + parseInt(meal[field]);
      }
    }, 0);
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
          addOrRemoveMeal: this.addOrRemoveMeal,
          sumNutrition: this.sumNutrition
        }}
      >
        {this.props.children}
      </PlanContext.Provider>
    );
  }
}
export const PlanConsumer = PlanContext.Consumer;
