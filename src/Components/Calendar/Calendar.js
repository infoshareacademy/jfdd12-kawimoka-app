import React, { Fragment, Component } from "react";
import { PlanConsumer } from "../../contexts/PlanContext";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { withRouter } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./custom-calendar.css";
import events from "../../events";
import meals from "../../meals.json";
import Modal from "react-modal";
import { MealCardFull } from "../meal/MealCardFull";
import { MealModal } from "../meal/MealModal";
import "../meal/Meal.css";

const localizer = momentLocalizer(moment);

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    borderRadius: "10px",
    backgroundColor: "rgb(128, 238, 210)"
  },
  overlay: {
    zIndex: 999
  }
};

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
    let breakfastId = mealsListState.breakfastId;
    let dinnnerId = mealsListState.dinnerId;
    let lunchId = mealsListState.lunchId;
    let snackId = mealsListState.snackId;
    let listMeal = [breakfastId, dinnnerId, lunchId, snackId];
    const mealsNames = listMeal
      .filter(mealId => mealId)
      .map(mealId => meals.find(meal => meal.id === mealId))
      .map(meal => meal.name);

    const date = new Date(2019, 6, 10);
    const dateString = Date.parse(date).toString();

    this.setState({ mealsList: mealsListState });
  }

  onSelect = (e, setSelectedDate) => {
    setSelectedDate(moment(e.start));
    this.props.history.push("plandiet");
  };

  toggleModal = event => {
    this.setState({
      ...this.state,
      modalIsOpen: true,
      currentMealId: event.id
    });
  };

  closeModal = () => {
    this.setState({
      ...this.state,
      modalIsOpen: false
    });
  };
  
  
  
  

  render() {
    return (
      <div style={{ width: "90vw", marginBottom: "225px" }}>
        <PlanConsumer>
          {value => {
            return (
              <Fragment>
                <Calendar
                  selectable={true}
                  views={["month", "week"]}
                  onNavigate={() => {
                    console.log("hello");
                  }}
                  onSelectSlot={e => {
                    console.log("onSelect");
                    this.onSelect(e, value.setSelectedDate);
                  }}
                  onSelectEvent={this.toggleModal}
                  style={{ height: 800 }}
                  localizer={localizer}
                  events={value.events}
                  startAccessor="start"
                  endAccessor="end"
                />

                <Modal isOpen={this.state.modalIsOpen} style={customStyles}>
                  <MealCardFull
                    meal={meals.find(
                      meal => meal.id === this.state.currentMealId
                    )}
                    onClick={this.closeModal}

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

export default withRouter(CalendarContainer);
