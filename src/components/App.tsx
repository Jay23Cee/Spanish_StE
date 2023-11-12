import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Only import Routes and Route here
import StudentDashboard from './StudentDashboard'
import Home from './Home';
import Footer from './Footer';
import Header from './Header';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<StudentDashboard/>} />
        <Route path="/contact" element={<h2>Contact Placeholder</h2>} />
        {/* Define other routes as needed */}
      </Routes>
      <h1>Footer Placeholder</h1>
    </div>
  );
};

export default App;
