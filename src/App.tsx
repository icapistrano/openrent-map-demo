import './App.css'
import { useState } from 'react';
import { MapPin } from './components/MapPin/MapPin';
import { QuickViewCard } from './components/QuickViewCard/QuickViewCard';
import { PropertySearch } from './components/PropertySearch/PropertySearch';
import { properties, type IProperty } from './data/properties';
import mapView from "./assets/map.png"

function App() {
  const [filteredProperties, setFilteredProperties] = useState<IProperty[]>(properties);
  const [selectedProperty, setSelectedProperty] = useState<IProperty>();

  return (
    <div className='content-wrapper'>
      <h1>Properties to Rent in Norwich, Norfolk</h1>

      <PropertySearch onSubmit={(properties) => {
         setFilteredProperties(properties);
         setSelectedProperty(undefined);
      }}/>

      <section className="map-container">
        <img src={mapView} alt="Map" className="map-image" onClick={() => setSelectedProperty(undefined)}/>
        
        {filteredProperties.map((p) => (
          <MapPin 
            key={p.id}
            x={p.x}
            y={p.y} 
            opacity={selectedProperty === undefined || selectedProperty === p ? 1 : 0.7}
            onClick={() => setSelectedProperty(p)} />
          )
        )}

        {selectedProperty && (
          <div
            style={{
              top: `${selectedProperty.y}%`,
              left: `${selectedProperty.x}%`,
              position: "absolute",
              transform: "translate(-50%, -100%)",
            }}
          >
            <QuickViewCard {...selectedProperty} />
          </div>
        )}

      </section>
    </div>
  );
}

export default App
