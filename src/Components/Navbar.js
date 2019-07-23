import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Container, Header, Image } from 'semantic-ui-react'
import '../index.css'
import { signOut } from '../services/AuthService'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {
  const isLoggedIn = useAuth()

  return (
    <Menu pointing secondary>
      <img style={{ height: '50px' }} src={require('../img/logo.png')} alt='Logo' />
      <Container>
        {isLoggedIn && (
          <>
            <Menu.Item>
              <NavLink exact className='default-link' activeClassName={'active-link'} to='/'>
                Calendar
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                exact
                className='default-link'
                activeClassName={'active-link'}
                to='/plandiet'>
                Plan diet
              </NavLink>
            </Menu.Item>
          </>
        )}
        <Menu.Menu position='right'>
          {!isLoggedIn && (
            <>
              <Menu.Item>
                <NavLink
                  exact
                  className='default-link'
                  activeClassName={'active-link'}
                  to='/sign-in'>
                  Log In
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink
                  exact
                  className='default-link'
                  activeClassName={'active-link'}
                  to='/sign-up'>
                  Sign Up
                </NavLink>
              </Menu.Item>
            </>
          )}

          {isLoggedIn && (
            <>
              <Menu.Item>
                <NavLink
                  exact
                  className='default-link'
                  activeClassName={'active-link'}
                  to='/profile'>
                  <Header as='h3'>
                    <Image circular src={require('../img/logo.png')} /> Profile Name
                  </Header>
                </NavLink>
              </Menu.Item>
              <Menu.Item>
                <NavLink exact className='default-link' onClick={signOut} to='/'>
                  Logout
                </NavLink>
              </Menu.Item>
            </>
          )}
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Navbar
