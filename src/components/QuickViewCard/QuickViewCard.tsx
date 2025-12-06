import "./QuickViewCard.css"
import { useState } from "react";
import type { IProperty } from "../../data/properties";
import { Label } from "../Label/Label";
import bedIcon from "../../assets/bed.png";
import bathIcon from "../../assets/bath.png";

export const QuickViewCard: React.FC<IProperty> = ({ image, title, price, beds, baths, type }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="quick-view-card" style={{ opacity: imageLoaded ? 1 : 0}}>
      {image && <img src={image} alt={title} className="quick-view-card-img" onLoad={() => setImageLoaded(true)} />}
      <div className="quick-view-content">
        <span className="quick-view-content-price">£{price} pcm</span>
        <div className="quick-view-content-label-wrapper">
          {type && <span>{type}</span>}
          <Label icon={bedIcon} text={beds.toString()}/>
          <Label icon={bathIcon} text={baths.toString()}/>
        </div>
        <button className="view-listing-btn">View Listing</button>
      </div>
    </div>
  );
};
