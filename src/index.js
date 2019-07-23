import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { AuthProvider } from './contexts/AuthContext'
import { UsersProvider } from './contexts/UsersContext'
import './firebase'
import App from './App'
import { PlanProvider } from './contexts/PlanContext'
import 'semantic-ui-css/semantic.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

ReactDOM.render(
  <AuthProvider>
    <PlanProvider>
      <App />
    </PlanProvider>
  </AuthProvider>,
  document.getElementById('root')
)
