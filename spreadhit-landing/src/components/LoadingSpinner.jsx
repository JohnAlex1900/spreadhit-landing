// src/components/LoadingSpinner.jsx
import "react";
import "./LoadingSpinner.css"; // Create a CSS file for styling

const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
