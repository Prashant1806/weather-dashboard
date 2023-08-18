import React from 'react';
import './Header.css'; // You can create this CSS file for styling

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Weather Dashboard</h1>
      <p className="header-subtitle">Check the weather in different locations</p>
    </header>
  );
}

export default Header;
