import React from 'react'
import s from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer(props) {
  return (
    <footer className={s.footerContainer}>
      <div>
        <p>
          <a href=''>Terms of Services</a>
        </p>
        <p>
          <a href=''>Privacy Policy</a>
        </p>
      </div>
      <div>
        <p>
          <a href='' target='_blank'>
            <FontAwesomeIcon
              icon={['fab', 'facebook-square']}
              size='2x'
              style={{ color: '#08ada0' }}
            />
          </a>{' '}
          <a href='' target='_blank'>
            <FontAwesomeIcon icon={['fab', 'instagram']} size='2x' style={{ color: '#08ada0' }} />
          </a>{' '}
        </p>
        <p>
          <span>{'\u00A9'}</span> 2019 by KaWiMoKa
        </p>
      </div>
      <div>
        <p>Homepage update: 10.06.19</p>
        <p>Planned app release: 26.07.19</p>
      </div>
    </footer>
  )
}
