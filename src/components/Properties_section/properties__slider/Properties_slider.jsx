import { useState } from "react";
import { useSelector } from "react-redux";
import { getApartments } from "@f/apartmentsSlice.js";
import PropertiesCard from "@/Properties_Card/PropertiesCard.jsx";
import { properties_slider_settings } from "../../../constants/sliderSettings.js";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Properties_slider.scss";


export function SliderProperties() {
  const [scrolledSlides, setScrolledSlides] = useState(1);
  const apartaments = useSelector(getApartments);

  // ???
  const settings = {
    beforeChange: () => {
    setScrolledSlides(scrolledSlides + 1)
  }, ...properties_slider_settings };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {apartaments.map((apartament) => (
          <PropertiesCard key={apartament.id} apartament={apartament} />
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
              {Math.floor(
                apartaments?.length / properties_slider_settings.slidesToShow
              )}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
