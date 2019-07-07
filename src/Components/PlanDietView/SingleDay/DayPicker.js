import React from 'react'
import s from './SingleDay.module.css'

export class DayPicker extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            dateInner: props.date
        }
        this.decrementDate = this.decrementDate.bind(this);
    }

    decrementDate() {
        this.setState((prevState) => ({
            dateInner : prevState.dateInner.subtract('days', 1)
        }));
    }


    render () {
        return (
            <div className={s.dayPicker}>
                <button onClick={this.decrementDate}>{"<"}</button>
                <h2>{this.state.dateInner.format("D-MMMM")}</h2>
                <button>{">"}</button>
            </div>)
    }
}