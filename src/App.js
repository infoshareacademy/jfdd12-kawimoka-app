import React from "react";
import { PlanDietContainer } from "./Components/PlanDietView/PlanDietContainer";
import moment from "moment";
import Calendar from "./Components/Calendar/Calendar";

class App extends React.Component {
  state = {
    date: moment(),
    breakfastId: undefined,
    breakfastKcal: 0,
    lunchId: undefined,
    lunchKcal: 0,
    snackId: undefined,
    snackKcal: 0,
    dinnerId: undefined,
    dinnerKcal: 0
  };

  onMealsStateChange = mealsState => {
    this.setState(mealsState);
  };

  render() {
    
    return (
      <div>
        <PlanDietContainer
          date={this.state.date}
          onMealsStateChange={this.onMealsStateChange}
        />

        <Calendar
          selectedDate={this.state.date}
          setSelectedDate={date => this.setState({ date })}
          mealsState={this.state}
          
        />
      </div>
      
    );
  }
}


export default App;
