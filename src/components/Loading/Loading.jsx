// src/components/Loading/Loading.js
import React from 'react';
import './Loading.css'; // Optional: Create a CSS file for styling

const Loading = () => {
  return (
    <div className="loading">
      {/* <div className="spinner"></div> */}
      <img src="/bighead.gif" alt="" />
      {/* <h1>Loading...</h1> */}
      
    </div>
  );
};

export default Loading;
