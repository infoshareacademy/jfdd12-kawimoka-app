import React, { useContext, Component } from 'react'
import { PlanConsumer } from '../../contexts/PlanContext'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import './custom-calendar.css'
import events from '../../events'
import meals from '../../meals.json'

const localizer = momentLocalizer(moment)

class CalendarContainer extends Component {
  state = {
    events: events,
    mealsList: {},
    selectedEvent: events[0]
  }
  componentDidMount() {
    const selectedMeals = {
      12312323: [1, 4, 5],
      12312324: [2, 7]
    }
    // const currentDay = new Date().toLocaleDateString()
    const mealsListState = {}
    // mealsList[currentDay] =
    let breakfastId = mealsListState.breakfastId
    let dinnnerId = mealsListState.dinnerId
    let lunchId = mealsListState.lunchId
    let snackId = mealsListState.snackId
    let listMeal = [breakfastId, dinnnerId, lunchId, snackId]
    const mealsNames = listMeal
      .filter(mealId => mealId)
      .map(mealId => meals.find(meal => meal.id === mealId))
      .map(meal => meal.name)
    // const mealsForDay = meals[day].filter(meal => meal.id < 5);
    const date = new Date(2019, 6, 10)
    const dateString = Date.parse(date).toString()
    // mealsListState[dateString] = mealsForDay;
    this.setState({ mealsList: mealsListState })
  }

  onSelect = (e, setSelectedDate) => {
    setSelectedDate(moment(e.start))
  }

  render() {
    const currentDay = Date.parse(new Date(2019, 6, 10)).toString()
    const eventsFromState = this.state.mealsList[currentDay]
    let events = []
    if (eventsFromState !== undefined) {
      events = eventsFromState.map(meal => {
        return {
          id: meal.id,
          title: meal.name,
          start: new Date(Number(currentDay)),
          end: new Date(Number(currentDay))
        }
      })
    }

    return (
      <div style={{ width: '90vw', marginBottom: '225px' }}>
        <PlanConsumer>
          {value => {
            return (
              <Calendar
                selectable={true}
                onSelectSlot={e => {
                  this.onSelect(e, value.setSelectedDate)
                }}
                style={{ height: 800 }}
                localizer={localizer}
                events={value.events}
                startAccessor='start'
                endAccessor='end'
              />
            )
          }}
        </PlanConsumer>
      </div>
    )
  }
}

export default CalendarContainer
