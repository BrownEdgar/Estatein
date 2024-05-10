import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getApartments } from "@f/apartmentsSlice";
import { Button } from "@/Button/Button";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Properties_slider.scss";
import { properties_slider_settings } from 'constants/sliderSettings';

export function SliderProperties() {
  const apartaments = useSelector(getApartments);
  const [scrolledSlides, setScrolledSlides] = useState(1);


  return (
    <div className="slider-container">
      <Slider {...properties_slider_settings}>
        {apartaments.map((apartament) => (
          <div className="apartament" key={apartament.id}>
            <div className="apartament_image">
              <img src={apartament.image} alt="apartament_img" />
            </div>
            <div className="apartament__about">
              <div className="apartament__name">{apartament.name}</div>
              <div className="apartament__desc">
                {apartament.desc} <a href="!#">Read More</a>
              </div>
            </div>
            <div className="apartament__details">
              <div>
                <img
                  src="/images/properties_section/bed_icon.svg"
                  alt="bed_icon"
                />
                <span>{apartament.details.countOfBedrooms}-Bedroom</span>
              </div>
              <div>
                <img
                  src="/images/properties_section/bath_icon.svg"
                  alt="bath_icon"
                />
                <span>{apartament.details.countOfBathrooms}-Bathroom</span>
              </div>
              {apartament.details.isVilla && (
                <div>
                  <img
                    src="/images/properties_section/villa_icon.svg"
                    alt="villa_icon"
                  />
                  <span>Villa</span>
                </div>
              )}
            </div>
            <div className="apartament__info">
              <div className="apartament__price">
                <span>Price</span>
                <p>{apartament.price}</p>
              </div>
              <Button className={"custom-btn purple-btn"} link={"!#"}>
                View Property Details
              </Button>
            </div>
          </div>
        ))}
      </Slider>
      <div className="slider__bottom">
        <div className="slider__scrolled-count">
          <span>
            {scrolledSlides < 10 && scrolledSlides >= 0 ? (
              <b>0{scrolledSlides}</b>
            ) : (
              <b>{scrolledSlides}</b>
            )}{" "}
            of{" "}
            <span>
              {Math.floor(apartaments?.length / settings.slidesToShow)}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
