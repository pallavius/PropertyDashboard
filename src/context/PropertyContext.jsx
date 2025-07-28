import React, { createContext, useState, useEffect } from 'react';
import { fetchMockProperties } from '../api/mockApi';

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties, setProperties] = useState([]);
  const [modalProperty, setModalProperty] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [filterType, setFilterType] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchMockProperties().then(setProperties);
  }, []);

  const addProperty = (property) => {
    setProperties(prev => [
      { ...property, id: Date.now() },
      ...prev
    ]);
  };

  const openModal = (property) => setModalProperty(property);
  const closeModal = () => setModalProperty(null);
  const toggleDarkMode = () => setDarkMode(dm => !dm);

  return (
    <PropertyContext.Provider value={{
      properties,
      addProperty,
      modalProperty,
      openModal,
      closeModal,
      darkMode,
      toggleDarkMode,
      filterType,
      setFilterType,
      searchQuery,
      setSearchQuery
    }}>
      {children}
    </PropertyContext.Provider>
  );
}; 