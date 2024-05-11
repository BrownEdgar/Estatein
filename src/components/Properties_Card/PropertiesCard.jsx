import { useSelector } from "react-redux";
import { getApartments } from "@f/apartmentsSlice";
import { Button } from "@/Button/Button";

import "./PropertiesCard.scss";

export default function PropertiesCard({ apartament }) {
  const apartaments = useSelector(getApartments);

  return (
    <div className="apartament" key={apartaments.id}>
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
          <img src="/images/properties_section/bed_icon.svg" alt="bed_icon" />
          <span>{apartament.details.countOfBedrooms}-Bedroom</span>
        </div>
        <div>
          <img src="/images/properties_section/bath_icon.svg" alt="bath_icon" />
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
  );
}
