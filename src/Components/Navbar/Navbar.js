import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Navbar(props) {
  return (
    <header className={s.header} style={{ position: 'fixed', height: '130px' }}>
      <nav>
        <div>
          <img src={require('../../img/logo.png')} alt='Logo' />
          <div className={s.slogan}>#bite_your_diet</div>
        </div>

        <ul>
          <NavLink exact className={'default-link'} activeClassName={'active-link'} to='/'>
            Calendar
          </NavLink>
          <NavLink exact className={'default-link'} activeClassName={'active-link'} to='/plandiet'>
            Plan Diet{' '}
          </NavLink>
        </ul>
      </nav>
    </header>
  )
}
