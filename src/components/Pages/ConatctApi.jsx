import React, { useState } from 'react';
import axios from 'axios';

export default function ContactApi() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://sheet.best/api/sheets/0660ea93-25de-47dd-a29d-fe29f8a771a6', {
        name: name,
      });

      console.log('Data sent:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div>
      <h1>Contact API</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
