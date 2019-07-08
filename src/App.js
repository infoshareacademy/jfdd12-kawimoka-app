import React from 'react';
import { PlanDietContainer } from './Components/PlanDietView/PlanDietContainer'
import moment from 'moment';

class App extends React.Component {

  state = {
    date: moment()
  }

  render () {
    return (
      <PlanDietContainer date = {this.state.date} />
    );
  }
  
}

export default App;
