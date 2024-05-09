import { SliderProperties } from "./properties__slider/Properties_slider";
import { Button } from '@/Button/Button';

import "./Properties.scss";

export const Properties = () => {
  return (
    <section className="properties">
      <div className="properties__container container">
        <div className="properties__abstract-stars">
          <img src="/images/abstract_stars.svg" alt="stars" />
        </div>
        <div className="properties__top">
          <div>
            <h1 className="properties__title">Featured Properties</h1>
            <p className="properties__text">
              Explore our handpicked selection of featured properties. Each
              listing offers a glimpse into exceptional homes and investments
              available through Estatein. Click "View Details" for more
              information.
            </p>
          </div>
          <Button className={"custom-btn dark-btn"} link={"!#"}>
            View All Properties
          </Button>
        </div>
        <div className="properties__slider">
          <SliderProperties />
        </div>
      </div>
    </section>
  );
};
