import React, { useState } from "react";
import Paper from "material-ui/Paper";
import "./SingleDay.css";
import { Checkbox } from "semantic-ui-react";
import Slider from "@material-ui/core/Slider";

export function Filters() {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper zDepth={3} className="filterContainer">
      <h2>Filter meals</h2>
      <div className="filters">
        <Checkbox className="checkbox" label="Favourites" />
        <Checkbox className="checkbox" label="Vege" />
        <Checkbox className="checkbox" label="Gluten-free" />
        <Checkbox className="checkbox" label="Easy" />
        <Checkbox className="checkbox" label="Fit" />
        <h4>Preparation time</h4>
        <Slider value={value} onChange={handleChange} />
      </div>
    </Paper>
  );
}
