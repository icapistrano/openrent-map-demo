import "./MapPin.css"
import openRentMapIcon from "./../../assets/marker.png"

interface IMapPin {
  x: number;
  y: number;
  opacity?: number
  onClick?: () => void;
}

export const MapPin: React.FC<IMapPin> = ({ x, y, opacity = 1, onClick }) => {
  return (
    <img 
      src={openRentMapIcon}
      onClick={onClick} 
      className="map-pin"
      style={{
        top: `${y}%`,
        left: `${x}%`,
        opacity: opacity
      }}/>
  );
};