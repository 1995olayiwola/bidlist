import React from 'react';
import Header from './Header';
import './CSS/About.css';

const About = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="about-container">
        <div className="about-section about-first">
          <h1 className="about-h1">The Gateway to International Public Procurement</h1>
          <p className="about-p">
            BidConnect, a brand owned by Razer Fintech & Infotech Private Limited, is
            one of the world's largest Public Procurement Support Services/Consulting
            companies. With the most comprehensive database of International
            Tenders, Projects, and Contract Awards from Multilateral Funding
            Agencies, Utilities Sector, Hospitals, Schools, Ports, and NGOs. It
            also offers market & company intelligence information, bid outsourcing,
            bid advisory, and e-procurement support as its major service offerings,
            supporting SMEs to Fortune 500 companies worldwide.
          </p>
          <ul className="about-list">
            <li>Lists profitable bids from private sectors, individuals, funding agencies, etc.</li>
            <li>Founded in 2013 in NY, USA. Customers in 100+ countries & presence through associates in 25+ countries.</li>
          </ul>
          <h3>THE MAIN ATTRIBUTES OF bidsconnect</h3>
          <ul className="about-list">
            <li>
              <span className="attribute-count">60+</span> VERIFIED Live Procurement Opportunities available (Fade In on Load)
            </li>
            <li>
              <span className="attribute-count">25+</span> new opportunities added daily (Slide Up on Load)
            </li>
            <li>Over 1500 Research Archives</li>
            <li>Over 5,000 Sources of Information</li>
            <li>
              700+ clients (Fortune 500 to local businesses) & extensive coverage across 15+ countries (Grow on Load)
            </li>
            <li>More than 150 Researchers.</li>
          </ul>
        </div>

        <div className="about-section about-second">
          <h1 className="about-h1">THE MAIN ATTRIBUTES OF bidsconnect</h1>
          <ul className="about-list">
            <li>
              <span className="attribute-count">2000+</span> Live Procurement Opportunities available (Fade In on Load)
            </li>
            <li>
              <span className="attribute-count">250+</span> new opportunities added daily (Slide Up on Load)
            </li>
            <li>Over 25,000 Research Archives</li>
            <li>Over 5,000 Sources of Information</li>
            <li>
              700+ clients (Fortune 500 to local businesses) & extensive coverage across 25+ countries (Grow on Load)
            </li>
            <li>More than 150 Researchers.</li>
          </ul>
        </div>

        <div className="about-section about-third">
          <h1 className="about-h1">FAQ</h1>
          <h3>How does BidConnect work?</h3>
          <p className="about-p">
            BidConnect is the ultimate matchmaker between site prep contractors and clients seeking their expertise. We ensure a seamless connection for your construction needs.
          </p>
          <h3>Why choose BidConnect?</h3>
          <p className="about-p">
            BidConnect stands out for its unrivaled expertise in the bidding business. We bring together top-notch contractors and clients, making construction projects a breeze.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
