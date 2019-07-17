import React from "react";
import moment from "moment";

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
            snackId: 25,
            dinnerId: 16
          }
        }
      ]
    }
  };

  mapPlanToEvents = () => {
    return this.state.plan.days.map(day => {
      const date = day.date;
      // const mealsInDay = day.mealsd
      return {
        id: 0,
        title: "Meal",
        allDay: true,
        start: moment(date, "DD-MM-YYYY").toDate(),
        end: moment(date, "DD-MM-YYYY").toDate()
      };
    });
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
