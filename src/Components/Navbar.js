import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Container } from 'semantic-ui-react'
import '../index.css'
//import { signOut } from '../services/AuthService'

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
          <NavLink to='/sign-in'>
            <Menu.Item name='Log in' />
          </NavLink>
          <NavLink to='/sign-up'>
            <Menu.Item name='Create an account' />
          </NavLink>
          <Menu.Item name='logout' /* onClick={signOut} */ />
        </Menu.Menu>
      </Container>
    </Menu>
  )
}

export default Navbar
