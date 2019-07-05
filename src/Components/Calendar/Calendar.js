import React, { Component} from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import events from "../../events";

const localizer = momentLocalizer(moment);

const MealCreator = props => {
  return (
    <div>{ props.event.start.toLocaleString() }</div>
  )
}

class CalendarContainer extends Component {
  state = {
    events: events,
    selectedEvent: events[0],
  }

  onSelect = (e) => {
    console.log({e})
    this.setState({
      selectedEvent: e,
    })
  }

  render() {
    return (
      <div>
        <div style={{ width: "70%", float: "left" }}>
          <Calendar
          selectable={true}
          onSelectSlot={this.onSelect}
            style={{ height: 500 }}
            localizer={localizer}
            events={this.state.events}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
        <div style={{ width: "30%", float: "right" }} />
          <MealCreator event={this.state.selectedEvent} />
      </div>
    );
  }
}

export default CalendarContainer;
