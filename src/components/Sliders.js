import React, { Component } from "react";
import Slider from "react-slick";
import app1 from "./images/office1.jpg";
import t2 from "./images/t2.jpg";
import t3 from "./images/t3.jpg";
import t4 from "./images/t4.jpg";
import t5 from "./images/t5.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500, 
      centerMode: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1, 
          }
        } 
      ]
    };
    return (
      <div className="testimonials">
        <div className="container">
          <div className="slider1">
            <div className="sliderRight">
              <Slider className="cat" {...settings}>
                <div className="cat-item">
                  <img src={app1} alt="" />
                  <p>Et harum quidem rerum facilis est et expedita distinctio. Nam nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
                  <h3>Bonorum et Malorum</h3>
                   
                </div>
                <div className="cat-item">
                  <img src={app1} alt="" />
                  <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                  <h3>Bonorum et Malorum</h3>
                  
                </div>
                <div className="cat-item">
                  <img src={app1} alt="" />
                  <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere est, omnis dolor repellendus.</p>
                  <h3>Bonorum et Malorum</h3>
                </div>
                <div className="cat-item">
                  <img src={app1} alt="" />
                  <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere repellendus.</p>
                  <h3>Bonorum et Malorum</h3>
                  
                </div><div className="cat-item">
                  <img src={app1} alt="" />
                  <p>Et harum quidem rerum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus</p>
                  <h3>Bonorum et Malorum</h3>
                </div>
                <div className="cat-item">
                  <img src={app1} alt="" />
                  <p>Et nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus</p>
                  <h3>Bonorum et Malorum</h3>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}