import React from "react";
import { PlanDietContainer } from "./Components/PlanDietView/PlanDietContainer";
import moment from "moment";
import Calendar from "./Components/Calendar/Calendar"
import { MealCardShort } from './Components/meal/MealCardShort'
import { MealsList } from './Components/meal/MealsList';

class App extends React.Component {
  state = {
    date: moment()
  };

  render() {
    console.log(this.state.date);
    return (
      <div style={{display: "flex", flexDirection: "row"}}>
        <MealsList />
        <PlanDietContainer date={this.state.date} />

        {/* <Calendar
          selectedDate={this.state.date}
          setSelectedDate={date => this.setState({ date })}
        /> */}
      </div>
    );
  }
}

export default App;
