import React from 'react'
import s from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Footer(props) {
  return (
    <footer className={s.footerContainer}>
      >
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
            <FontAwesomeIcon icon='facebook' />
          </a>{' '}
          />
          <a href='' target='_blank'>
            <FontAwesomeIcon icon='instagram' />
          </a>{' '}
          />
        </p>
        <p>&copy 2019 by KaWiMoKa</p>
      </div>
      <div>
        <p>Homepage update: 10.06.19</p>
        <p>Planned app release: 26.07.19</p>
      </div>
    </footer>
  )
}
