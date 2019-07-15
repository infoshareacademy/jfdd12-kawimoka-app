import React from 'react'
import styles from './Meal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faPlus)

export function AddMealButton(props) {
  const { onAdd, meal } = props
  return (
    <FontAwesomeIcon
      icon={['fas', 'plus']}
      size='3x'
      style={{ color: '#08ada0', padding: '15px' }}
      onClick={e => onAdd(meal)}
    />
  )
}
