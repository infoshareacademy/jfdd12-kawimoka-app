import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Container, Header, Image } from 'semantic-ui-react'
import '../index.css'
import { signOut } from '../services/AuthService'
import { useAuth } from '../hooks/useAuth'
import { useUser } from '../hooks/useUser'

function CalendarLink() {
  return (
    <Menu.Item>
      <NavLink exact className='default-link' activeClassName={'active-link'} to='/'>
        Calendar
      </NavLink>
    </Menu.Item>
  )
}

function PlanDietLink() {
  return (
    <Menu.Item>
      <NavLink exact className='default-link' activeClassName={'active-link'} to='/plandiet'>
        Plan diet
      </NavLink>
    </Menu.Item>
  )
}

function LogIn() {
  return (
    <Menu.Item>
      <NavLink exact className='default-link' activeClassName={'active-link'} to='/sign-in'>
        Log In
      </NavLink>
    </Menu.Item>
  )
}

function SignUp() {
  return (
    <Menu.Item>
      <NavLink exact className='default-link' activeClassName={'active-link'} to='/sign-up'>
        Sign Up
      </NavLink>
    </Menu.Item>
  )
}
function UserProfileLink({ user }) {
  return (
    <Menu.Item>
      <NavLink exact className='default-link' activeClassName={'active-link'} to='/profile'>
        {user && (
          <Header as='h3'>
            <Image circular src={`https://api.adorable.io/avatars/285/${user.firstName}.png`} />
            {user.firstName}
          </Header>
        )}
      </NavLink>
    </Menu.Item>
  )
}

function UserSignOut({ signOut }) {
  return (
    <Menu.Item>
      <NavLink exact className='default-link' onClick={signOut} to='/'>
        Logout
      </NavLink>
    </Menu.Item>
  )
}
const Navbar = () => {
  const isLoggedIn = useAuth()
  const user = useUser()

  return (
    <Menu pointing secondary className='menu'>
      <img style={{ height: '50px' }} src={require('../img/logo.png')} alt='Logo' />
      <Container className='desktopNav'>
        {isLoggedIn && (
          <>
            <CalendarLink />
            <PlanDietLink />
          </>
        )}
        <Menu.Menu position='right'>
          {!isLoggedIn && (
            <>
              <LogIn />
              <SignUp />
            </>
          )}

          {isLoggedIn && (
            <>
              <UserProfileLink user={user} />
              <UserSignOut signOut={signOut} />
            </>
          )}
        </Menu.Menu>
      </Container>
      <Container className='mobileNav'>
        {!isLoggedIn && (
          <>
            <LogIn />
            <SignUp />
          </>
        )}
        {isLoggedIn && (
          <>
            <UserProfileLink user={user} />
            <CalendarLink />
            <PlanDietLink />
            <UserSignOut signOut={signOut} />
          </>
        )}
      </Container>
    </Menu>
  )
}

export default Navbar
