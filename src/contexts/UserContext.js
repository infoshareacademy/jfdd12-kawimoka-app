import React, { createContext, useEffect, useState } from 'react'
import { fetchUser } from '../services/UserService'
import { useAuth } from '../hooks/useAuth'

export const UserContext = createContext()

export function UserProvider(props) {
  const [user, setUser] = useState()
  const isLoggedIn = useAuth()

  useEffect(() => {
    if (!isLoggedIn) {
      return
    }

    fetchUser().then(user => {
      setUser(user)
    })
  }, [isLoggedIn])

  return (
    <UserContext.Provider value={user} {...props}>
      {props.children}
    </UserContext.Provider>
  )
}
