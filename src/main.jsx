import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Performance monitoring
const reportWebVitals = (metric) => {
  // You can send the metric to your analytics service here
  console.log(metric);
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Monitor web vitals
reportWebVitals();