import React, { useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';

const PropertyCard = ({ property }) => {
  const { openModal } = useContext(PropertyContext);
  return (
    <div className="property-card">
      <h3>{property.name}</h3>
      <p><b>{property.type}</b> - {property.location}</p>
      <p>{property.description}</p>
      <p><b>${property.price.toLocaleString()}</b></p>
      <button onClick={() => openModal(property)}>View</button>
    </div>
  );
};

export default PropertyCard; 