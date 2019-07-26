import React from 'react'
import Paper from "material-ui/Paper";
import './NoMealsInfo.css'


export function NoMealsInfo() {

return (
<Paper zDepth={3} className="noMealsInfoContainer">
<div className="noMealsInfoText">
  <h3>Oops! </h3>
  <h4>We didn't find any meals</h4>
  <p>Change your filters and try again</p>
</div>

<img src={require("../../img/smallArrow.png")} />
</Paper>)
}