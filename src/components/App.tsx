import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import StudentDashboard from './StudentDashboard';
import '../styles/App.scss';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <StudentDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default App;
