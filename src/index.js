import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Navbar } from './Components/Navbar'
import { PlanDietContainer } from './Components/PlanDietView/PlanDietContainer'
import { Footer } from './Components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { MealsList } from './Components/meal/MealsList'

library.add(fab, faFacebookSquare, faInstagram)

const NoMatch = () => <h1>404</h1>

const Root = props => {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <div>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/mealslist' component={MealsList} />
          <Redirect from='/home' to='/' />
          <Route component={NoMatch} />
        </Switch>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
