import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'
import '../index.css'
import { signOut } from '../services/AuthService'

const Navbar = () => {
  return (
    <Menu pointing secondary>
      <Container>
        <img style={{ height: '50px' }} src={require('../img/logo.png')} alt='Logo' />

        <Menu.Item>
          <NavLink exact className='default-link' activeClassName={'active-link'} to='/'>
            Calendar
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact className='default-link' activeClassName={'active-link'} to='/plandiet'>
            Plan diet
          </NavLink>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <NavLink exact className='default-link' activeClassName={'active-link'} to='/sign-in'>
              Log In
            </NavLink>
          </Menu.Item>
          <Menu.Item name='Create an account'>
            <NavLink exact className='default-link' activeClassName={'active-link'} to='/sign-up'>
              Sign Up
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              exact
              className='default-link'
              activeClassName={'active-link'}
              onClick={signOut}>
              Logout
            </NavLink>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Navbar
