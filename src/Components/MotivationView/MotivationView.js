import React from "react";
import Paper from "material-ui/Paper";




export class MotivationView extends React.Component {

  render() {
    return (
      <Paper  zDepth={3} className="MotivationView" style={{maxHeight: "850px",marginTop: "20px", flexBasis: "450px", marginLeft: "25px"}}>
       <img src="https://i.pinimg.com/originals/0f/e2/c4/0fe2c428b941241572482b8efbf78543.jpg" style={{maxHeight: "850px"}}/>
      </Paper >
    );
  }
}