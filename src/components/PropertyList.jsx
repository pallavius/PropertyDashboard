import React, { useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
  const { properties, filterType, searchQuery } = useContext(PropertyContext);

  // Filter and search logic
  const filteredProperties = properties.filter(property => {
    const matchesType = filterType === 'All' || property.type === filterType;
    const matchesSearch = property.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <div className="property-list">
      {filteredProperties.length === 0 ? (
        <p>No properties found.</p>
      ) : (
        filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))
      )}
    </div>
  );
};

export default PropertyList; 