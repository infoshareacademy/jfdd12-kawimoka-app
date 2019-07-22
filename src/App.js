import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Navbar from './Components/Navbar'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import 'semantic-ui-css/semantic.min.css'
import { MuiThemeProvider } from 'material-ui'
import { PlanDietContainer } from './Components/PlanDietView/PlanDietContainer'
import { Footer } from './Components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Calendar from './Components/Calendar/Calendar'
import './firebase'
import { Container, Dimmer, Loader } from 'semantic-ui-react'
import PrivateRoute from './Components/PrivateRoute'
import { useAuth } from './hooks/useAuth'

library.add(fab, faFacebookSquare, faInstagram)

const NoMatch = () => <h1>404</h1>

const App = props => {
  const isLoggedIn = useAuth()

  if (isLoggedIn === null) {
    return (
      <Dimmer active>
        <Loader size='massive'>Loading</Loader>
      </Dimmer>
    )
  }

  return (
    <MuiThemeProvider>
      <Router>
        <Navbar />
        <Switch>
          <PrivateRoute exact path='/' component={Calendar} />
          <PrivateRoute exact path='/plandiet' component={PlanDietContainer} />
          <Route exact path='/sign-in' component={Login} />
          <Route exact path='/sign-up' component={SignUp} />
          <Redirect from='/home' to='/' />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </MuiThemeProvider>
  )
}

export default App
