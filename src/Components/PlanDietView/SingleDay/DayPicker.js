import React from 'react'
import s from './SingleDay.module.css'

export function DayPicker () {
    return <div className={s.dayPicker}>
        <button>{"<"}</button>
        <h2>2 MAY</h2>
        <button>{">"}</button>
    </div>
}