import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function NewBoxForm({ createBox }) {
  // Initialize state for form inputs
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: ""
  });

  // Handle changes to the form inputs
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Handle form submission
  const gatherInput = (evt) => {
    evt.preventDefault();
    // Create a new box with the form data and a unique ID
    createBox({ ...formData, id: uuid() });
    // Reset form fields to their initial state
    setFormData({ height: "", width: "", backgroundColor: "" });
  };

  return (
    <form onSubmit={gatherInput}>
      <div>
        <label htmlFor="height">Height</label>
        <input
          type="text"
          name="height"
          id="height"
          value={formData.height}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="width">Width</label>
        <input
          type="text"
          name="width"
          id="width"
          value={formData.width}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color</label>
        <input
          type="text"
          name="backgroundColor"
          id="backgroundColor"
          value={formData.backgroundColor}
          onChange={handleChange}
        />
      </div>
      <button type="submit" id="newBoxButton">
        Add a new box!
      </button>
    </form>
  );
}

export default NewBoxForm;

