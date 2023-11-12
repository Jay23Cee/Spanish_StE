// Using React 18's new root API
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import 'client' from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './components/App';
import './styles/App.scss';

// Other component imports...

// Using the non-null assertion operator to assert that the element is not null
const root = ReactDOM.createRoot(document.getElementById('root')!); // Notice the '!' at the end

root.render(
  <React.StrictMode>
    <Router>
      <App /> {/* App is no longer a Route; it’s just a component. */}
    </Router>
  </React.StrictMode>
);
