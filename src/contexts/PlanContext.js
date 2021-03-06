import React from 'react'
import moment from 'moment'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import meals from '../meals.json'
import { findMeal } from '../utils.js'
import { sendPlan, fetchPlan } from '../services/PlanService'
import { sendFavourites, fetchFavourites } from '../services/FavouritesService'

export const PlanContext = React.createContext()

export class PlanProvider extends React.Component {
  state = {
    activeDate: moment(),
    plan: {
      days: [
        {
          date: null,
          meals: {
            breakfastId: null,
            snackId: null,
            lunchId: null,
            dinnerId: null
          }
        }
      ]
    },
    mealFilter: '',
    filters: {
      vege: false,
      favourites: false,
      glutenFree: false,
      easy: false,
      fit: false,
      preparationTime: [0, 100]
    },
    filteredMeals: [],
    favouritesMeals: [],
    displayMotivationView: true
  }

  dismissMotivationView = () => {
    this.setState({
      displayMotivationView: false
    })
  }

  toggleFilters = (event, data) => {
    let newValue
    let name

    if (Array.isArray(data)) {
      newValue = data
      name = 'preparationTime'
    } else {
      const { value, checked, name: dataName } = data
      newValue = value || checked
      name = dataName
    }

    const filters = {
      ...this.state.filters,
      [name]: newValue
    }
    const newState = {
      ...this.state,
      filters
    }
    this.setState(newState)
    this.dismissMotivationView()
  }

  mapPlanToEvents = () => {
    return this.planDays
      .map(day => {
        if (!day.meals) {
          return
        }
        const date = day.date
        const { breakfastId, lunchId, snackId, dinnerId } = day.meals
        const breakfast = meals.find(meal => meal.id === breakfastId)
        const lunch = meals.find(meal => meal.id === lunchId)
        const snack = meals.find(meal => meal.id === snackId)
        const dinner = meals.find(meal => meal.id === dinnerId)

        return [
          {
            id: breakfastId,
            title: breakfast && breakfast.name,
            allDay: false,
            start: moment(date, 'DD-MM-YYYY').toDate(),
            end: moment(date, 'DD-MM-YYYY').toDate()
          },
          {
            id: lunchId,
            title: lunch && lunch.name,
            allDay: false,
            start: moment(date, 'DD-MM-YYYY').toDate(),
            end: moment(date, 'DD-MM-YYYY').toDate()
          },
          {
            id: snackId,
            title: snack && snack.name,
            allDay: false,
            start: moment(date, 'DD-MM-YYYY').toDate(),
            end: moment(date, 'DD-MM-YYYY').toDate()
          },
          {
            id: dinnerId,
            title: dinner && dinner.name,
            allDay: false,
            start: moment(date, 'DD-MM-YYYY').toDate(),
            end: moment(date, 'DD-MM-YYYY').toDate()
          }
        ].filter(event => event.title)
      })
      .reduce((acc, val) => acc.concat(val), [])
  }

  getMeals = date => {
    const dayObject = this.planDays.find(day => {
      return day.date === date
    })
    if (!dayObject) {
      return
    } else {
      return {
        day: moment(date),
        breakfast: findMeal(dayObject.meals.breakfastId),
        lunch: findMeal(dayObject.meals.lunchId),
        snack: findMeal(dayObject.meals.snackId),
        dinner: findMeal(dayObject.meals.dinnerId)
      }
    }
  }

  getMealsByDay = () => {
    const foundDay = this.planDays.find(day => {
      if (day.date === this.state.activeDate.format('DD-MM-YYYY')) {
        return true
      }
    })
    return (
      (foundDay && foundDay.meals) || {
        breakfastId: null,
        snackId: null,
        lunchId: null,
        dinnerId: null
      }
    )
  }

  setSelectedDate = date => {
    this.setState({
      activeDate: date
    })
  }

  decrementActiveDate = () => {
    this.setState(prevState => ({
      activeDate: prevState.activeDate.subtract('days', 1)
    }))
  }

  incrementActiveDate = () => {
    this.setState(prevState => ({
      activeDate: prevState.activeDate.add('days', 1)
    }))
  }

  get planDays() {
    return this.state.plan.days.filter(Boolean)
  }

  addOrRemoveMeal = (meal, isAdd) => {
    let currentDate = this.state.activeDate.format('DD-MM-YYYY')
    let mealsOfTheDay = this.getMealsByDay()
    let mealId = isAdd ? meal.id : null
    mealsOfTheDay[meal.type + 'Id'] = mealId
    let dayMealIndex = this.planDays.findIndex(day => day.date === currentDate)

    if (dayMealIndex !== -1) {
      this.setState(prevState => {
        prevState.plan.days.splice(dayMealIndex, 1)
        return prevState
      })
    }
    this.setState(
      prevState => ({
        [prevState.plan.days]: prevState.plan.days.push({
          date: currentDate,
          meals: mealsOfTheDay
        })
      }),
      () => {
        sendPlan(this.state.plan)
      }
    )

    if (isAdd) {
      this.setState({ displayAddButton: false })
    } else {
      this.setState({ displayAddButton: true })
    }
  }

  setMealFilter = filterName => {
    this.setState({
      ...this.state,
      mealFilter: filterName
    })
  }

  get filteredMeals() {
    const { mealFilter, filters, favouritesMeals } = this.state
    const { vege, favourites, glutenFree, easy, fit, preparationTime } = filters

    let filtered = meals.filter(meal => {
      // fav filter
      const onlyFavorites = favourites ? favouritesMeals.find(m => m.id === meal.id) : true

      // category filter
      const byMealCategory = meal.type === mealFilter

      // vege
      const byVege = vege ? meal.filters.includes('vege') : true

      const byGlutenFree = glutenFree ? meal.filters.includes('glutenFree') : true

      const byEasy = easy ? meal.filters.includes('easy') : true

      const byFit = fit ? meal.filters.includes('fit') : true

      const byPreparationTime =
        parseInt(meal.time, 10) > preparationTime[0] && parseInt(meal.time, 10) < preparationTime[1]

      // connect all the filters tougether
      return (
        byMealCategory &&
        onlyFavorites &&
        byVege &&
        byPreparationTime &&
        byGlutenFree &&
        byEasy &&
        byFit
      )
    })
    return filtered
  }

  sumNutrition = field => {
    const { lunchId, dinnerId, snackId, breakfastId } = this.getMealsByDay()
    const mealsIds = [breakfastId, lunchId, snackId, dinnerId]

    const foundMealsObjects = meals.filter(meal => mealsIds.includes(meal.id))

    return foundMealsObjects.reduce((acc, meal) => {
      if (field !== 'kcal') {
        return acc + meal.nutritions[field]
      } else {
        return acc + parseInt(meal[field])
      }
    }, 0)
  }

  addToFavouritesMeals = meal => {
    this.setState(
      prevState => {
        if (prevState.favouritesMeals.includes(meal)) {
          return {
            favouritesMeals: prevState.favouritesMeals.filter(m => m !== meal)
          }
        }
        return {
          favouritesMeals: [...prevState.favouritesMeals, meal]
        }
      },
      () => {
        sendFavourites(this.state.favouritesMeals)
      }
    )
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        fetchPlan(plan => {
          this.setState({ plan })
        }, user.uid)

        fetchFavourites(favouritesMeals => {
          this.setState(favouritesMeals)
        }, user.uid)
      }
    })
  }

  render() {
    return (
      <PlanContext.Provider
        value={{
          ...this.state,
          setSelectedDate: this.setSelectedDate,
          events: this.mapPlanToEvents(),
          getMeals: this.getMeals,
          setMealFilter: this.setMealFilter,
          showMeal: this.showMeal,
          filteredMeals: this.filteredMeals,
          getMealsByDay: this.getMealsByDay,
          decrementActiveDate: this.decrementActiveDate,
          incrementActiveDate: this.incrementActiveDate,
          addOrRemoveMeal: this.addOrRemoveMeal,
          addToFavouritesMeals: this.addToFavouritesMeals,
          sumNutrition: this.sumNutrition,
          toggleFilters: this.toggleFilters,
          dismissMotivationView: this.dismissMotivationView
        }}>
        {this.props.children}
      </PlanContext.Provider>
    )
  }
}
export const PlanConsumer = PlanContext.Consumer
