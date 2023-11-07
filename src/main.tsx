import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom';
import App from './components/App';
import './styles/App.scss';

// Other component imports...

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        {/* Define other routes here */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
