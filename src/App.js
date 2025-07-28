import React, { useContext } from 'react';
import { PropertyProvider, PropertyContext } from './context/PropertyContext';
import PropertyList from './components/PropertyList';
import AddPropertyForm from './components/AddPropertyForm';
import PropertyModal from './components/PropertyModal';
import DarkModeToggle from './components/DarkModeToggle';
import SearchBar from './components/SearchBar';
import './App.css';

const FilterDropdown = () => {
  const { filterType, setFilterType } = useContext(PropertyContext);
  const types = ['All', 'Plot', 'Shed', 'Retail Store', 'Plot Store'];
  return (
    <select value={filterType} onChange={e => setFilterType(e.target.value)}>
      {types.map(type => (
        <option key={type} value={type}>{type}</option>
      ))}
    </select>
  );
};

function App() {
  return (
    <PropertyProvider>
      <div className={`app-container`}>
        <header className="dashboard-header">
          <h1>Mini Property Listing Dashboard</h1>
          <DarkModeToggle />
        </header>
        <main>
          <section className="property-listings-section">
            <div className="filters-row">
              <FilterDropdown />
              <SearchBar />
            </div>
            <PropertyList />
          </section>
          <section className="add-property-section">
            <h2>Add Property</h2>
            <AddPropertyForm />
          </section>
        </main>
        <PropertyModal />
      </div>
    </PropertyProvider>
  );
}

export default App;
