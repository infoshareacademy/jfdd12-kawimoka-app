import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { PlanDietContainer } from './Components/PlanDietView/PlanDietContainer'
import { Footer } from './Components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(fab, faFacebookSquare, faInstagram)

ReactDOM.render(<Footer />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
