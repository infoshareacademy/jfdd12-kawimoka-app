import React from 'react'
import s from './SingleDay.module.css'

export function DayPicker (props) {

    let { day } = props

    return <div className={s.dayPicker}>
        <button>{"<"}</button>
        <h2>{day}</h2>
        <button>{">"}</button>
    </div>
}