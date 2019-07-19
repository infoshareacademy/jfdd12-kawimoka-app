import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Icon, Image } from 'semantic-ui-react'


export class CenterMode extends Component {
    render() {
      const settings = {
          className: "carousel-container",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
      return (
        <div >
          <h2>Center Mode</h2>
          <Slider {...settings}>
          <div>
            <h3>1</h3>
            </div>
        <div>
        <h3>2</h3>
        </div>
        <div>
        <h3>3</h3>
        </div>
        <div>
        <h3>4</h3>
        </div>
        <div>
        <h3>5</h3>
        </div>
        <div>
        <h3>6</h3>
        </div>

          </Slider>
        </div>
      );
    }
  }


