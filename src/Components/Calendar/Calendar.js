import React, { Fragment, Component } from "react";
import { PlanConsumer } from "../../contexts/PlanContext";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./custom-calendar.css";
import events from "../../events";
import meals from "../../meals.json";
import Modal from "react-modal";
import { MealCardFull } from "../meal/MealCardFull";
import { MealModal } from "../meal/MealModal";
import "../meal/Meal.css";

const localizer = momentLocalizer(moment);

class CalendarContainer extends Component {
  state = {
    events: events,
    mealsList: {},
    selectedEvent: events[0],
    modalIsOpen: false,
    currentMealId: 1
  };
  componentDidMount() {
    const mealsListState = {};
    // mealsList[currentDay] =
    let breakfastId = mealsListState.breakfastId;
    let dinnnerId = mealsListState.dinnerId;
    let lunchId = mealsListState.lunchId;
    let snackId = mealsListState.snackId;
    let listMeal = [breakfastId, dinnnerId, lunchId, snackId];
    const mealsNames = listMeal
      .filter(mealId => mealId)
      .map(mealId => meals.find(meal => meal.id === mealId))
      .map(meal => meal.name);
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

  toggleModal = event => {
    console.log(event);
    this.setState({
      ...this.state,
      modalIsOpen: !this.state.modalIsOpen,
      currentMealId: event.id
    });
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
      <div style={{ width: "90vw", marginBottom: "225px" }}>
        <PlanConsumer>
          {value => {
            console.log(value.events);
            console.log(this.state.currentMealId, "MEALS");
            return (
              <Fragment>
                <Calendar
                  selectable={true}
                  onSelectSlot={this.onSelect}
                  onSelectEvent={this.toggleModal}
                  style={{ height: 800 }}
                  localizer={localizer}
                  events={value.events}
                  startAccessor="start"
                  endAccessor="end"
                />

                <Modal isOpen={this.state.modalIsOpen}>
                  <MealCardFull
                    meal={meals.find(
                      meal => meal.id === this.state.currentMealId
                    )}
                    onAdd={this.props.onAdd}
                    onMealClose={this.closeModal}
                  />
                </Modal>
              </Fragment>
            );
          }}
        </PlanConsumer>
      </div>
    );
  }
}

export default CalendarContainer;
