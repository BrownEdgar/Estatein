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
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {slick.data.map(elem => {
        return(
          <div key={elem.id}>
            <div className="content">
              <div className="content__title">
                <h3>{elem.heading}</h3>
              </div>
              <div className="content__paragraph">
                <p>{elem.paragraph}</p>
              </div>
              <div className="content__btn">
                <p>{elem.button}</p>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  );
}