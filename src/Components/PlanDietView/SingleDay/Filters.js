import React, { useState, useContext } from "react";
import Paper from "material-ui/Paper";
import "./SingleDay.css";
import { Checkbox } from "semantic-ui-react";
import Slider from "@material-ui/core/Slider";
import { PlanContext } from "../../../contexts/PlanContext";

export function Filters() {
  const { toggleFilters, filters } = useContext(PlanContext);
  const { vege, favourites, glutenFree, easy, fit, preparationTime } = filters;

  return (
    <Paper zDepth={3} className="filterContainer">
      <h2>Filter meals</h2>
      <div className="filters">
        <Checkbox
          className="checkbox"
          label="Favourites"
          name="favourites"
          onChange={toggleFilters}
          checked={favourites}
        />
        <Checkbox
          className="checkbox"
          label="Vege"
          name="vege"
          onChange={toggleFilters}
          checked={vege}
        />
        <Checkbox
          className="checkbox"
          label="Gluten-free"
          name="glutenFree"
          onChange={toggleFilters}
          checked={glutenFree}
        />
        <Checkbox
          className="checkbox"
          label="Easy"
          name="easy"
          onChange={toggleFilters}
          checked={easy}
        />
        <Checkbox
          className="checkbox"
          label="Fit"
          name="fit"
          onChange={toggleFilters}
          checked={fit}
        />
        <h4>Preparation time</h4>
        <p>
          {preparationTime[0]} - {preparationTime[1]} min
        </p>
        <Slider
          value={preparationTime}
          name={"preparationTime"}
          onChange={toggleFilters}
          className="sliderColor"
        />
      </div>
    </Paper>
  );
}
