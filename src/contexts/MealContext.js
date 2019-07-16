import React from "react";

export const MealContext = React.createContext();

export class MealProvider extends React.Component {
  state = {
    selectedMeals: []
  };

  render() {
    return (
      <MealContext.Provider value={this.state}>
        {this.props.children}
      </MealContext.Provider>
    );
  }
}
export const MealConsumer = MealContext.Consumer;
