import "./PropertySeach.css"
import { useState } from "react"
import { properties, type IProperty } from "../../data/properties";

const uniquePropertyType = new Set(properties.map((p) => p.type).filter(Boolean));
const propertyTypes = Array.from(["Any", ...uniquePropertyType]);
const bedrooms = ["Any", 1, 2, 3, 4, 5];

export const PropertySearch: React.FC<{ onSubmit: (properties: IProperty[]) => void }> = ({ onSubmit }) => {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [location, setLocation] = useState("Norwich");
  const [propertyType, setPropertyType] = useState("Any");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [bedroomCount, setBedroomCount] = useState("Any");

  const handleSearch = () => {
    const filteredProperties = properties
      .filter((p) => propertyType === "Any" || propertyType === p.type) // handle property type
      .filter((p) => bedroomCount === "Any" || Number(bedroomCount) === p.beds) // handle bedrooms
      .filter((p) => Number(minPrice) === 0 || Number(minPrice) <= p.price) // handle min price
      .filter((p) => Number(maxPrice) === 0 || Number(maxPrice) >= p.price); // handle max price

    setFilteredProperties(filteredProperties);
    onSubmit(filteredProperties);
  }

  return (
    <form className="search-bar-container" onSubmit={(e) => {
      e.preventDefault();
      handleSearch()}
    }>
      <div className="search-bar">
        <div className="search-field">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter location"
            disabled
            className="search-disabled"
          />
        </div>

        <div className="search-field">
          <label>Property Type</label>
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            {propertyTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div className="search-field">
          <label>Bedrooms</label>
          <select
            value={bedroomCount}
            onChange={(e) => setBedroomCount(e.target.value)}
          >
            {bedrooms.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>

        <div className="search-field">
          <label>Min Price</label>
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="£"
            min={0}
            max={maxPrice === undefined ? Infinity : maxPrice}
          />
        </div>

        <div className="search-field">
          <label>Max Price</label>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="£"
            min={Number(minPrice)}
          />
        </div>

        <button className="search-button" type="submit">Search</button>
      </div>

      <p className="search-bar-container-results">Your search is displaying: 
        {properties.length === filteredProperties.length ? (
          <span> {properties.length} properties found</span>
        ) : (
          <span> {filteredProperties.length} of {properties.length} properties found</span>
        )}
      </p>
    </form>
  );
};
