import { getReviews } from "@f/reviewsSlice";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderSlick.scss'


export default function SimpleSlider() {
  const slick = useSelector(getReviews)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <Slider {...settings}>
      {slick.map(elem => {
        return(
          <div key={elem.id} className="slick">
            <div className="slick__content">
              <div className="slick__title">
                <h2>{elem.heading}</h2>
              </div>
              <div className="slick__paragraph">
                <p>{elem.paragraph}</p>
              </div>
              <div className="slick__btn">
                <button>{elem.button}</button>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  );
}