import React from "react";
import { PlanDietContainer } from "./Components/PlanDietView/PlanDietContainer";
import moment from "moment";
import Calendar from "./Components/Calendar/Calendar"

class App extends React.Component {
  state = {
    date: moment()
  }

  render() {
    return (
      <div>
        <PlanDietContainer date={this.state.date} />

        <Calendar
          selectedDate={this.state.date}
          setSelectedDate={date => this.setState({ date })}
        />
      </div>
    );
  }
}

export default App
