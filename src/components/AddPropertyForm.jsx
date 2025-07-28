import React, { useState, useContext } from 'react';
import { PropertyContext } from '../context/PropertyContext';

const AddPropertyForm = () => {
  const { addProperty } = useContext(PropertyContext);
  const [form, setForm] = useState({
    name: '',
    type: '',
    price: '',
    location: '',
    description: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!form.name || !form.type || !form.price || !form.location || !form.description) return;
    addProperty({ ...form, price: Number(form.price) });
    setForm({ name: '', type: '', price: '', location: '', description: '' });
  };

  return (
    <form className="add-property-form" onSubmit={handleSubmit}>
      <input name="name" placeholder="Property Name" value={form.name} onChange={handleChange} />
      <input name="type" placeholder="Type" value={form.type} onChange={handleChange} />
      <input name="price" placeholder="Price" value={form.price} onChange={handleChange} type="number" />
      <input name="location" placeholder="Location" value={form.location} onChange={handleChange} />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPropertyForm; 