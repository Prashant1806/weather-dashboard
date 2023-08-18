import React, { useState } from 'react';
import './SearchBar.css'; // You can create this CSS file for styling

function SearchBar({ onSearch }) {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    if (location.trim() !== '') {
      onSearch(location);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
