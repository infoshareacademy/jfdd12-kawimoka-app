import React from 'react'
import s from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer(props) {
  return (
    <footer className={s.footerContainer}>
      <div>
        <p>
          <a href='/' target='_blank'>
            <FontAwesomeIcon
              icon={['fab', 'facebook-square']}
              size='2x'
              style={{ color: '#08ada0' }}
            />
          </a>{' '}
          <a href='/' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' style={{ color: '#08ada0' }} />
          </a>{' '}
        </p>
      </div>
      <div>
        <p>
          <span>{'\u00A9'}</span> 2019 by KaWiMoKa
        </p>
      </div>
      <div>
        <p>Last update: 29.07.19</p>
      </div>
    </footer>
  )
}
