import React, { useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';

const PropertyModal = () => {
  const { modalProperty, closeModal } = useContext(PropertyContext);
  if (!modalProperty) return null;
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={closeModal}>X</button>
        <img src={modalProperty.image || 'https://via.placeholder.com/300x150'} alt={modalProperty.name} style={{ width: '100%', marginBottom: 10 }} />
        <h2>{modalProperty.name}</h2>
        <p><b>Location:</b> {modalProperty.location}</p>
        <p><b>Type:</b> {modalProperty.type}</p>
        <p><b>Price:</b> ${modalProperty.price.toLocaleString()}</p>
        <p>{modalProperty.description}</p>
      </div>
    </div>
  );
};

export default PropertyModal; 