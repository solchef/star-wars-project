import React from 'react';
import './style.css';

const LoadingIndicator: React.FC = () => {
  return (
    <div className="spinner-container" role="status" aria-live="polite" aria-label="Loading">
      <div className="loading-spinner"></div>
    </div>
  );
};

export default LoadingIndicator;
