import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from 'react-redux';
import "./MultipleItems.scss"
import { useEffect, useState } from 'react';

export default function MultipleItems() {
  const users = useSelector(state => (state.clientSection))
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 997,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const [scrolledSlides, setScrolledSlides] = useState(1);
  useEffect(() => {
    const slideArrows = document.querySelectorAll(".slick-arrow");
    slideArrows.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        if (scrolledSlides < 2) {
          setScrolledSlides(scrolledSlides + 1)
        } else {
          setScrolledSlides(1)
        }
      });
    });
  }, [scrolledSlides]);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {
          users.map(user => {
            return (
              <div className='card-holder' key={user.id}>
                <div className="card" >
                  <div className='rate'>
                    <img src="images/rate/Container.png" alt="rating" />
                  </div>
                  <div className="text-content">
                    <h3 className='heading'>{user.heading}</h3>
                    <p className="comment">{user.comment}</p>
                  </div>
                  <div className="person-data">
                    <div className="image">
                      <img src={user.image} alt="person" className='person' />
                    </div>
                    <div className="data">
                      <b>{user.nickName}</b>
                      <p>{user.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </Slider>
      <div className="slider__bottom">
        <div className="slider__scrolled-count">
          <span>
            0{scrolledSlides} of 0{Math.floor(users.length / 3)}
            {/* {scrolledSlides < 10 && scrolledSlides >= 0 ? (
              <b>0{scrolledSlides}</b>
            ) : (
              <b>{scrolledSlides}</b>
            )}
            of <b>0</b>
            <span>
              {Math.floor(users?.length / settings.slidesToShow)}
            </span> */}
          </span>
        </div>
      </div>
    </div>
  );
}


