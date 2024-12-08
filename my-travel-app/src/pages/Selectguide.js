import React, { useState } from 'react';
import '../Style/selectguide.css';

const guides = [
  {
    id: 1,
    name: 'Rahul Sharma',
    phone: '+91 9876543210',
    languages: ['Hindi', 'English', 'Punjabi'],
    city: 'Delhi',
  },
  {
    id: 2,
    name: 'Priya Patel',
    phone: '+91 8765432109',
    languages: ['Gujarati', 'Hindi', 'English'],
    city: 'Mumbai',
  },
  {
    id: 3,
    name: 'Amit Singh',
    phone: '+91 7654321098',
    languages: ['Bengali', 'Hindi', 'English'],
    city: 'Kolkata',
  },
  {
    id: 4,
    name: 'Neha Gupta',
    phone: '+91 6543210987',
    languages: ['Tamil', 'English', 'Hindi'],
    city: 'Chennai',
  },
  {
    id: 5,
    name: 'Vikram Reddy',
    phone: '+91 5432109876',
    languages: ['Telugu', 'English', 'Hindi'],
    city: 'Hyderabad',
  },
];

function SelectGuide() {
  const [selectedGuide, setSelectedGuide] = useState(null);

  const handleSelectGuide = (guide) => {
    setSelectedGuide(guide);
  };

  return (
    <div className="guide-container">
      <h1 className="title">Select a Guide</h1>
      <div className="guides-grid">
        {guides.map((guide) => (
          <div
            key={guide.id}
            className={`guide-card ${selectedGuide?.id === guide.id ? 'selected' : ''}`}
            onClick={() => handleSelectGuide(guide)}
          >
            <h2 className="guide-name">{guide.name}</h2>
            <p><strong>Phone:</strong> {guide.phone}</p>
            <p><strong>Languages:</strong> {guide.languages.join(', ')}</p>
            <p><strong>City:</strong> {guide.city}</p>
          </div>
        ))}
      </div>
      {selectedGuide && (
        <div className="selected-guide-details">
          <h2>Selected Guide</h2>
          <p><strong>Name:</strong> {selectedGuide.name}</p>
          <p><strong>Phone:</strong> {selectedGuide.phone}</p>
          <p><strong>Languages:</strong> {selectedGuide.languages.join(', ')}</p>
          <p><strong>City:</strong> {selectedGuide.city}</p>
        </div>
      )}
    </div>
  );
}

export default SelectGuide;
