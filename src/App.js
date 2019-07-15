import React from "react";
import { PlanDietContainer } from "./Components/PlanDietView/PlanDietContainer";
import Calendar from "./Components/Calendar/Calendar";

class App extends React.Component {

  render() {
    return (
      <div>
        <PlanDietContainer />
        <Calendar/>
      </div>
    );
  }
}

export default App;
