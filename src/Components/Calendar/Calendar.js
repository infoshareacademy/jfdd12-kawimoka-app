import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../../events";
import meals from "../meal/meals.json";

const localizer = momentLocalizer(moment);

class CalendarContainer extends Component {
  state = {
    events: events,
    mealsList: {}

    // selectedEvent: events[0]
  };
  componentDidMount() {
    const selectedMeals = {
      12312323: [1, 4, 5],
      12312324: [2, 7]
    };

    const mealsListState = {};
    // const mealsForDay = meals[day].filter(meal => meal.id < 5);
    const date = new Date(2019, 6, 10);
    const dateString = Date.parse(date).toString();
    // mealsListState[dateString] = mealsForDay;
    this.setState({ mealsList: mealsListState });
  }

  onSelect = e => {
    console.log({ e });
    this.props.setSelectedDate(moment(e.start));
    // this.props.selectedDate
    // this.setState({
    //   selectedDate: e.start
    // });
  };

  render() {
    
    const currentDay = Date.parse(new Date(2019, 6, 10)).toString();
    const eventsFromState = this.state.mealsList[currentDay];
    let events = [];
    if (eventsFromState !== undefined) {
      events = eventsFromState.map(meal => {
        return {
          id: meal.id,
          title: meal.name,
          start: new Date(Number(currentDay)),
          end: new Date(Number(currentDay))
        };
      });
      
    }
    
    return (
      <div style={{ width: "70%", float: "left" }}>
        <Calendar
          selectable={true}
          onSelectSlot={this.onSelect}
          style={{ height: 500 }}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    );
  }
}

export default CalendarContainer;
