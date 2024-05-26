import React from 'react';
import Header from './Header';
import "./CSS/About.css";

const About = () => {
  return (
    <div>
      <Header/>
      <div className='about_container'>
    <div className='about_page'>
      <div className="about_first">
      <h1 className='about_h1'>The Gateway to International Public Procurement</h1>

<p className='about_p'>BidConnect a brand owned by Eucled Infotech Private Limited is world's one of the largest Public Procurement Support Services/Consulting company. With most comprehensive database of International Tenders, Projects, Contract Award from Multilateral Funding agencies, Utilities sector, Hospitals, Schools, Ports, NGO's. In addition, it also offers market & Company Intelligence information, Bid Outsourcing, Bid Advisory & E-procurement support as its major service offerings supporting SME's to Fortune 500 companies world over.
</p>
<ul>
<li>*We do not offer bids from federal or state government.</li>

<li>*We list profitable bids from private sectors, individuals, funding agencies, etc</li>

<li>*Maximum bid awarded via our platform connect is $20m</li>

<li>Founded in 2013 in NY, USA</li>

<li>Customers in 100+ & presence through associates in 25+ countries.</li>
</ul>

      </div>
    

<div className='about_second'>
<h1 className='about_h1'>THE MAIN ATTRIBUTES OF bidsconnect</h1>
<ul>
<li>There are always 2000+ Live Procurement Opportunities available.</li>

<li>Every day, more than 250 new opportunities are added.</li>

<li>Over 25,000 Research Archives</li>

<li>Over 5,000 Sources of Information</li>

<li>700+ clients (ranging from Fortune 500 enterprises to local businesses worldwide)</li>

<li>extensive coverage across more than 25 countries</li>

<li>More than 150 Researchers.</li>
</ul>

</div>

<div className='about_third'>
<h1 className='about_h1'>FAQ</h1>
<h3>How does BidConnect work?</h3>
<p className='about_p'>BidConnect is the ultimate matchmaker between site prep contractors and clients seeking their expertise. We ensure a seamless connection for your construction needs.
</p>
<h3>Why choose BidConnect?</h3>
<p className='about_p'>BidConnect stands out for its unrivaled expertise in the bidding business. We bring together top-notch contractors and clients, making construction projects a breeze.</p>
</div>

    </div>
    </div>
    </div>
  )
}

export default About