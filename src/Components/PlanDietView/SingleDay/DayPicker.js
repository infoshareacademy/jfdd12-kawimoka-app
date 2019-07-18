import React from "react";
import "./SingleDay.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { PlanConsumer } from "../../../contexts/PlanContext";

library.add(faAngleLeft);
library.add(faAngleRight);

export class DayPicker extends React.Component {
  render() {
    return (
      <PlanConsumer>
        {value => {
          return (
            <div className="dayPicker">
              <FontAwesomeIcon
                icon={["fas", "angle-left"]}
                size="3x"
                className="changeDayIcon"
                onClick={() => value.decrementActiveDate()}
              />
              <h2>{value.activeDate.format("D MMMM")}</h2>
              <FontAwesomeIcon
                icon={["fas", "angle-right"]}
                size="3x"
                className="changeDayIcon"
                onClick={() => value.incrementActiveDate()}
              />
            </div>
          );
        }}
      </PlanConsumer>
    );
  }
}
