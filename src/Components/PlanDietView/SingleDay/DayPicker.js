import React from 'react'
import s from './SingleDay.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleLeft)
library.add(faAngleRight)

export class DayPicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      dateInner: props.date
    }
    this.decrementDate = this.decrementDate.bind(this)
    this.incrementDate = this.incrementDate.bind(this)
  }

  decrementDate() {
    this.setState(prevState => ({
      dateInner: prevState.dateInner.subtract('days', 1)
    }))
  }

  incrementDate() {
    this.setState(prevState => ({
      dateInner: prevState.dateInner.add('days', 1)
    }))
  }

  componentWillReceiveProps(nextProps) {
    // You don't have to do this check first, but it can help prevent an unneeded render
    if (nextProps.date !== this.state.dateInner) {
      this.setState({ dateInner: nextProps.date })
    }
  }

  render() {
    return (
      <div className={s.dayPicker}>
        <FontAwesomeIcon
          icon={['fas', 'angle-left']}
          size='3x'
          style={{ color: '#08ada0' }}
          onClick={this.decrementDate}
        />
        <h2>{this.state.dateInner.format('D MMMM')}</h2>
        <FontAwesomeIcon
          icon={['fas', 'angle-right']}
          size='3x'
          style={{ color: '#08ada0' }}
          onClick={this.incrementDate}
        />
      </div>
    )
  }
}
