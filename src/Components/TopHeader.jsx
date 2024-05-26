import React from 'react';
import {Link} from 'react-router-dom';
import "./CSS/TopHeader.css";

const TopHeader = () => {
  return (
    <div className=' top'>

      <ul>
<Link><li>Advanced Search</li></Link>
<Link><li>Indian Tenders</li></Link>
<Link><li>Subscribe</li></Link>
<Link><li>Contact US</li></Link>
<Link><li>Sign In</li></Link>
<Link><li>Select Language</li></Link>

      </ul>
    </div>
  )
}

export default TopHeader