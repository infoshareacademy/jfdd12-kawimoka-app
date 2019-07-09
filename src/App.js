import React from 'react'
import { PlanDietContainer } from './Components/PlanDietView/PlanDietContainer'
import moment from 'moment'
import Calendar from './Components/Calendar/Calendar'

class App extends React.Component {
  state = {
    date: moment()
  }

  render() {
    return (
      <>
        <Calendar
          selectedDate={this.state.date}
          setSelectedDate={date => this.setState({ date })}
        />
        <PlanDietContainer date={this.state.date} />
      </>
    )
  }
}

export default App
