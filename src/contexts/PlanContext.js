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
    }
  };

  mapPlanToEvents = () => {
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
  };

  render() {
    return (
      <PlanContext.Provider
        value={{
          ...this.state,
          events: this.mapPlanToEvents()
        }}
      >
        {this.props.children}
      </PlanContext.Provider>
    );
  }
}
export const PlanConsumer = PlanContext.Consumer;
