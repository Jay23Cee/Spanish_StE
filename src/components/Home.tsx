import React from 'react';
import { Link } from 'react-router-dom'; // If you're using react-router for navigation
import spanishFlag from '../assets/img/spanish-flag.jpg'; // Example image import, replace with actual path
import flamencoDancer from '../assets/img/flamenco-dancer.png'; // Example image import, replace with actual path
import flamencoDancer2 from '../assets/img/flamenco-dancer2.png';
import flamencoDancer3 from '../assets/img/flamenco-dancer3.png';
function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>¡Bienvenidos a la Clase de Español!</h1>
        <img src={spanishFlag} alt="Spanish Flag" className="flag" />
        <p>Explore, learn, and challenge yourself with the beauty of Spanish.</p>
      </header>
      <section className="welcome-section">
        <p>Ready to dive into Spanish? Discover the language and culture through fun activities and interactive learning tools.</p>
        <img src={flamencoDancer} alt="Flamenco Dancer" className="dancer" />
        {/* Links to different resources and activities */}
        <div className="activity-links">
          <Link to="/activities/spanish-word">Spanish Word of the Day</Link>
          <Link to="/activities/trivia">Trivia Quiz</Link>
          <Link to="/resources">Resource Center</Link>
          {/* More links or buttons to activities and resource pages */}
        </div>
      </section>
      {/* You may also include a news section, event announcements, or other engaging content */}

      <section className="image-gallery">
    <h2>Gallery</h2>
    <div className="gallery-images">
      <img src={flamencoDancer} alt="Gallery Image 1" />
      <img src={flamencoDancer2} alt="Gallery Image 2" />
      <img src={flamencoDancer3} alt="Gallery Image 3" />
    </div>
  </section>

      <section className="news-events">
        <h2>What's New?</h2>
        {/* Insert news items or upcoming events here */}
      </section>
    </div>
  );
}

export default Home;
