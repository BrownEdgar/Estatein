import { getReviews } from "@f/reviewsSlice";
import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
          <div key={elem.id} className="slider">
            <div className="slider__content">
              <div className="slider__title">
                <h3>{elem.heading}</h3>
              </div>
              <div className="slider__paragraph">
                <p>{elem.paragraph}</p>
              </div>
              <div className="slider__btn">
                <p>{elem.button}</p>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  );
}