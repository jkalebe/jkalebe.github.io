import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

if (
  import.meta.env.PROD &&
  window.location.hostname === 'jkalebe.github.io' &&
  /^G-[A-Z0-9]+$/.test(measurementId ?? '')
) {
  window.dataLayer ??= [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.append(tag);
}
