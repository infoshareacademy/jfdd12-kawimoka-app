import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Navbar(props) {
  return (
    <header className={s.header}>
      <nav>
        <div>
          <img src={require('../../img/logo.png')} alt='Logo' />
          <div className={s.slogan}>#bite_your_diet</div>
        </div>
        <a id='showMenu'>
          <FontAwesomeIcon
            icon={['fab', 'facebook-square']}
            size='2x'
            style={{ color: '#08ada0' }}
          />
        </a>

        <ul>
          <NavLink exact className={'default-link'} activeClassName={'active-link'} to='/'>
            Home
          </NavLink>
          <NavLink exact className={'default-link'} activeClassName={'active-link'} to='/mealslist'>
            Meals list{' '}
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
