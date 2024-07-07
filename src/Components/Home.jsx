import React from 'react';
import Header from './Header';
import './CSS/Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faWhatsapp } from '@fortawesome/free-solid-svg-icons';
import bidhub from './bidconnect.png'

const Home = () => {
  return (
    <>
      <div className="container">
        <Header />

        <section className="hero">
          <div className="hero-content">
            <h1>BIDDING HUB</h1>
            <p>
              Connecting Top Contractors with Lucrative Projects - Unleash the Power of Bidding!
            </p>
          </div>
          <div className="hero-image">
          {/* Replace with your image */}
          </div>
        </section>

        <section className="about">
          <h2>Our Story</h2>
          <p>
            Welcome to BidConnect, the ultimate platform for site prep contractors and clients seeking top-notch expertise.
          </p>
          <p>
            With a wealth of experience, we excel in connecting verifiable contractors with real-world clients for construction projects.
          </p>
          <p>Join us and revolutionize the way projects are handled, ensuring excellence and efficiency every step of the way!</p>
        </section>

        <section className="testimonials">
          <h2>Thrilled Clients</h2>
          <div className="testimonial-grid">
            <div className="testimonial">
              <p>
                "Incredible service, saved me time and money!"
              </p>
              <p>- Emily Johnson (Jigh Risk Pregnancy Center)</p>
            </div>
            <div className="testimonial">
              <p>"Best decision I made for my project, highly recommend!"</p>
              <p>- Diana Waish (The Diana Initiative)</p>
            </div>
            <div className="testimonial">
              <p>"We got the best and fastest project team ever, we are impressed."</p>
              <p>- John Henderson (Majestic Courier Company)</p>
            </div>
            <div className="testimonial">
              <p>
                "As a site prep contractor, I was able to get my biggest project from BidConnect and I am on my second project right now, it is worth it."
              </p>
              <p>- Philippe Laturo (Maxwell Construction)</p>
            </div>
          </div>
        </section>

        <section className="exclusive">
          <h2>Exclusive Access</h2>
          <p>
            Gain exclusive access to top-tier clients and contractors and secure your project's success with our premium matchmaking service. Contact us to get linked in.
          </p>
          <div className="stats">
            <span>600+</span>
            <span>300+</span>
            <span>94%</span>
          </div>
          <p>Happy Clients, Successful Projects, Satisfaction Rate</p>
          <p>Join BidConnect today and revolutionize your construction experience. Let's build together! Explore our bids list and apply for your suitable bids.</p>
          <div className="contact-links">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B13239275337&"
              className="contact-link"
            >
              <span>Whatsapp</span>
            </a>
            <Link to="/contact" className="contact-link">
              <FontAwesomeIcon icon={faEnvelope} />
              <span>Email</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
