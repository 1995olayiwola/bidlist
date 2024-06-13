import React from 'react';
import Header from './Header';
import "./CSS/Home.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope ,faHouse,faWhatsapp} from '@fortawesome/free-solid-svg-icons';






const Home = () => {
  
  return (
<>
<div>
<Header/>
</div>
   
    
    <div className='container_home'>
 
   <div className='image'></div>
 
<div className='bidding_hub'>
  <h1>BIDDING HUB</h1>
  <p>
HOME OF SITE PREP JOB OPPORTUNITIES
</p>
<p>Unleash the Power of Bidding - Connecting Top Contractors with Lucrative Projects!</p>
</div>
<div className='our_story'>
  <h1>Our Story</h1>
  <p>Welcome to BidConnect, where bidding meets brilliance! We are the ultimate platform for site prep contractors and clients seeking top-notch expertise.
</p>
<p>With a wealth of experience in the bidding business, we excel in connecting verifiable contractors with real-world clients for construction projects.</p>
<p>Join us to revolutionize the way projects are handled, ensuring excellence and efficiency every step of the way!</p>
</div>
<div className='trilled'>
  <h1>Thrilled</h1>
  <p>Emily Johnson (COMPANY NAME)</p>
  <p>Incredible service, saved me time and money!
</p>
</div>
<div className='company_name'>
  <h1>(Company Name)</h1>
  <p>Best decision I made for my project, highly recommend!</p>
</div>
<div className='meet_us'>
  <h1>Meet Us</h1>
  <h3>David Ceo, Sophia Coo, Alex Cto, Linda Cfo</h3>
</div>
<div className='instant_matches'>
  <h1>Instant Matches.</h1>
  <p>Our cutting-edge technology ensures instant and accurate matches between contractors and clients, saving you time and hassle. Contact us to get the link to you to the best and profitable site prep contract.</p>
</div>
<div className="client_success">
  <h1 >Client Success</h1>
  <h3>Join our platform and become part of our success stories, where dreams turn into reality with the right contractors by your side.</h3>
</div>
<div className='exclusive'>
  <h1>Exclusive Access</h1>
  <p>Gain exclusive access to top-tier clients and contractors and secure your project's success with our premium matchmaking service. Contact us to get linked in.</p>
  <div className='rate'>
    <span>600+ </span>
    <span>300+ </span>
    <span>  94%</span>
    </div>                           
<p>happy clients successful projects satisfaction rate</p>

<p>Join BidConnect today and revolutionize your construction experience. </p>
  <p>Let's build together! Explore our bids list and apply for your suitable bids.</p>
</div>
<div className="contact-links">
      <a href="https://api.whatsapp.com/send/?phone=%2B13239275337&" className="contact-link">
       
      <span>Whatsapp</span>


      </a>
      <Link to="/contact" className="contact-link">
        <FontAwesomeIcon icon={faEnvelope} />
        <span>Email</span>
      </Link>
    </div>
    </div>
    </>
  )
}

export default Home