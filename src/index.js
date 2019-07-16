import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
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
import Calendar from './Components/Calendar/Calendar'
import moment from 'moment'

library.add(fab, faFacebookSquare, faInstagram)


const NoMatch = () => <h1>404</h1>

class Root extends React.Component {
  state = {
    date: moment()
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Navbar />
          </div>
          <div
            style={{
              marginTop: '140px',
              position: 'absolute',
              paddingLeft: '100px'
            }}>
            <div>
              <Switch>
                <Route
                  exact
                  path='/'
                  component={() => (
                    <Calendar
                      selectedDate={this.state.date}
                      setSelectedDate={date => this.setState({ date })}
                    />
                  )}
                />
                <Route
                  exact
                  path='/plandiet'
                  component={() => <PlanDietContainer date={this.state.date} />}
                />
                <Redirect from='/home' to='/' />
                <Route component={NoMatch} />
              </Switch>
            </div>
            <div style={{ width: 'calc(99vw - 100px)', backgroundColor: 'white' }}>
              <Footer />
            </div>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
