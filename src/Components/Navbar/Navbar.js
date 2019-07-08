import React from 'react'
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
          <a onclick='topFunction()' href=''>
            Home
          </a>
          <a href='#sign-up'>Sign-up</a>
          <a href='#features'>Features</a>
          <a href='#developers'>Team</a>
        </ul>
      </nav>
    </header>
  )
}
