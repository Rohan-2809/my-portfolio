import React, { useState, useEffect } from 'react';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

function App() {
  const [background, setBackground] = useState('');

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const color = `radial-gradient(circle at ${clientX}px ${clientY}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
      setBackground(color);
    };

    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div style={{ background:background }}>
    <div className="app">
      <Sidebar />
      <Content />
    </div>
    </div>
  );
}

export default App;
