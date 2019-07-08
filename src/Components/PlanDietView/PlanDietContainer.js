import React from 'react'
import  SingleDay  from './SingleDay'

export function PlanDietContainer(props) {

    return <div>
        <SingleDay date = {props.date} />
    </div>
}