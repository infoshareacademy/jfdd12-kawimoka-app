import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import { AuthProvider } from './contexts/AuthContext'
import { UserProvider } from './contexts/UserContext'
import './firebase'
import App from './App'
import { PlanProvider } from './contexts/PlanContext'
import 'semantic-ui-css/semantic.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

ReactDOM.render(
  <AuthProvider>
    <UserProvider>
      <PlanProvider>
        <App />
      </PlanProvider>
    </UserProvider>
  </AuthProvider>,
  document.getElementById('root')
)
