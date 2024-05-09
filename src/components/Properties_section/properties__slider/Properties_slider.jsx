import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getApartments } from "@f/apartmentsSlice";
import { Button } from "@/Button/Button";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Properties_slider.scss";

export function SliderProperties() {
  const apartaments = useSelector(getApartments);
  const [scrolledSlides, setScrolledSlides] = useState(1);

  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 997,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const slideArrows = document.querySelectorAll(".slick-arrow");
    slideArrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        if (arrow.classList.contains("slick-prev") && scrolledSlides > 1) {
          setScrolledSlides(scrolledSlides - 1);
        }
        if (
          arrow.classList.contains("slick-next") &&
          scrolledSlides <
            Math.floor(apartaments.length / settings.slidesToShow)
        ) {
          setScrolledSlides(scrolledSlides + 1);
        }
      });
    });
  }, [scrolledSlides]);

  return (
    <div className="slider-container">
      <Slider {...settings}>
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
