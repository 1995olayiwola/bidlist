import React from 'react';
import Header from './Header';
import './CSS/Bidlist.css'

const Bidlists = () => {
  const projects = [
    {
      id: 181707,
      title: 'BUILDING OF 1000 SITING CAPAITY OF SOFTWARE AND TECHNOLOGY TRAINING CENTRE IN RHODE ISLAND.',
      company: 'Razer Fintech',
      estimate: '$5,000,000 - $7,000,000',
      trades: [
        'Class A - *General Engineering Contractor GEC; Subcontractor Opportunities.',
        'Class B - *General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities',
      ],
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    // ... Add data for other projects ...
    {
      id: 101790,
      title: 'BUILDING OF 1000 SITING CAPAITY OF SOFTWARE AND TECHNOLOGY TRAINING CENTRE IN FLORIDA.',
      company: 'Razer Fintech.',
      estimate: '$5,000,000 - $7,000,000',
      trades: [
        'Class A - *General Engineering Contractor GEC; Subcontractor Opportunities.',
        'Class B - *General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities',
      ],
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 707660,
      title: 'SITE PREP FOR 1O ACRES OF LAND PROPOSED',
      company: 'SITE PREP FOR 1O ACRES OF LAND PROPOSED .',
      estimate: '$700,000 - $1,000,000.',
      trades: [
        ' *Landscaping Contractor: Grounds Maintenance Grubbing Fertilizing Sodding Lawn Mowing Rooting Mulch Hardscaping Rockscaping.',
        
      ],
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 704922,
      title: 'BUILDING OF 1000 SITING CAPAITY OF SOFTWARE AND TECHNOLOGY TRAINING CENTRE IN OREGON',
      company: 'SITE PREP FOR 1O ACRES OF LAND PROPOSED .',
      estimate: '$700,000 - $1,000,000.',
      trades: [
        'Class A - *General Engineering Contractor GEC; Subcontractor Opportunities.',
        'Class B - *General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities',
        
      ],
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 707941,
      title: 'RFP Rotary Park Restroom Building',
      company: 'Razer Fintech.',
      estimate: 'Open',
      trades: [
        'Class A - *General Engineering Contractor GEC; Subcontractor Opportunities.',
        'Class B - *General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities.',
        
      ],
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 708213,
      title: 'Pricing and Delivery of Ready-Mix Concrete, Hagerstown, MD',
      company: 'Razer Fintech.',
      estimate: '$1,000,000 - $1,700,000',
      trades: [
        'Class A - *Suppliers, Portland Cement Concrete.',
        'Class B - *Welfare Exp Limited is seeking quotations for the purchase and delivery of various types of ready-mix concrete on an as-needed basis. Delivery locations include, but are not limited to, areas within City limits, as well as Water and Wastewater service areas outside of City limits.',
        
      ],
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 708122,
      title: 'Deer Creek Conservation Area Conservation Landscape Planting, Harford Co., MD',
      company: 'Vissa Gold',
      
      trades: [
        'Class A - *Landscaping Contractor: Grounds Maintenance Grubbing Fertilizing Sodding Lawn Mowing Rooting Mulch Hardscaping Rockscaping, Tree Service Contractor: Trimming/Pruning Trees, Stump & Tree Removal/Rooting/Grinding',
        'Class B - *Harford Cooperation is accepting bids for Deer Creek Conservation Area Conservation Landscape Planting. The project involves installation and maintenance of trees, shrubs, and tree protection devices within the Deer Creek Conservation Area. Bonds required.',
        
      ],
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 707930,
      title: 'Pricing and Delivery of Ready-Mix Concrete, Hagerstown, MD',
      company: 'Vissa Gold',
      estimate: '$3,000,000 - $6,000,000',
      trades: [
        'Class A - *General Engineering Contractor GEC; Subcontractor Opportunities, *General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities, High Voltage Electrical Contractor (HVE): Power Lines, Street & Highway Lighting, Venues, Arenas, Utility, Transformers, Plumbing Contractor: Water Supply, Water Heaters, Water Meters, Leak Detection, Flow & Backflow, Acoustic Testing.',
        'Class B - *Landscaping Contractor: Grounds Maintenance Grubbing Fertilizing Sodding Lawn Mowing Rooting Mulch Hardscaping.'
        
        
      ],
     
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 708141,
      title: 'Construction of Two Step Boulevard - Mound Creek Segment, Conroe, TX',
      company: 'Razer Fintech',
      estimate: '$3,000,000 - $6,000,000',
      trades: [
        'Class A -*General Engineering Contractor GEC; Subcontractor Opportunities, Highway, Roads, Parking Lot, Bridge, Dam, Overpass, Runways: Road Improvement/Pavement/Resurface - NAICS 237310, Pipeline Contractor: Water Mains, Sewers, Drains & Pipe Laying + Related Structures; Includes Pipe Inspection Camera, Roadway Drainage, Stormwater, Manhole Covers & Valve Boxes, Culverts: Installation, Repair & Removal, Stormwater Pollution Prevention Plan (SWPP) - Regional Flood Planning Group (RFPG) - Flood Risk Reduction Plans, Pavement Marking, Traffic Striping, Raised Pavement Markers (RPMs) & Reflectors - General Engineering Contractor, Electrical Signs & Signage Contractor: Exterior Advertising or Wayfinding',
        
        
        
      ],
      purpose:' The base bid work consists of providing the necessary labor, materials, equipment and supervision to construct Two Step Boulevard - Mound Creek Segment including but not limited to, mobilization, bonds and insurance; construction of approximately 0.9 miles of asphalt roadway and associated roadside ditch/storm sewer infrastructure for drainage; MSE retaining wall, a 3,000 linear foot bridge; stormwater pollution prevention; pavement markings and signage. Bonds required. Prevailing wages.',
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 708124,
      title: 'Landscape Development,  Proposed Razer facility in El Paso Co., TX',
      company: 'Razer Fintech',
      estimate: '$4,400,000',
      trades: [
        'Class A -*Landscaping Contractor: Grounds Maintenance Grubbing Fertilizing Sodding Lawn Mowing Rooting Mulch Hardscaping Rockscaping, *General Engineering Contractor GEC; Subcontractor Opportunities',
        
        
        
      ],
     purpose:'This project consists of the construction of Aesthetics and Landscape improvements at scattered locations along IH-10 in from FM-2316 (McRae Blvd) to Don Haskins Drive in El Paso County, Texas. The work includes construction of different type of planters, install ornamental metal structures, removal of vegetation, cap irrigation system, landscape amenities, installation of LED illumination, plant schemes, irrigation system, riprap and paint new planters and existing rip rap. DBE Goal: 0% Bonds required.',
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 707013,
      title: 'Oak & Red Oak  Construction of Fire Suppression on 10,000sqm of land, NJ',
      company: 'Oak & Viza ',
      estimate: '$4,400,000',
      trades: [
        'Class A -*General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities, Plumbing Contractor: Water Supply, Water Heaters, Water Meters, Leak Detection, Flow & Backflow, Acoustic Testing, Water Supply & Irrigation Contractor: May include Backflow Testing, Water Sprinkler Systems for Landscaping',
        'Class B - *Landscaping Contractor: Grounds Maintenance Grubbing Fertilizing Sodding Lawn Mowing Rooting Mulch Hardscaping.'
        
        
      ],
     purpose:'Oak & Red Oak Fire Suppression Construction NJ',
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 707013,
      title: 'Oak & Red Oak  Construction of Fire Suppression on 10,000sqm of land, NJ',
      company: 'Oak & Viza ',
      estimate: '$10,000,000',
      trades: [
        'Class A -*General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities, Plumbing Contractor: Water Supply, Water Heaters, Water Meters, Leak Detection, Flow & Backflow, Acoustic Testing, Water Supply & Irrigation Contractor: May include Backflow Testing, Water Sprinkler Systems for Landscaping',
        'Class B - *Landscaping Contractor: Grounds Maintenance Grubbing Fertilizing Sodding Lawn Mowing Rooting Mulch Hardscaping.'
        
        
      ],
     purpose:'Oak & Red Oak Fire Suppression Construction NJ',
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    },
    {
      id: 117097,
      title: '1000 ACRES SITE PREPERATION FOR A PROPOSED ESTATE BY BILTMORE REALTORS',
      company: 'Razer Fintech',
      estimate: 'Open',
      trades: [
        'Class A - *General Engineering Contractor GEC; Subcontractor Opportunities.',
        'Class B - *Landscaping Contractor: Grounds Maintenance Grubbing Fertilizing Sodding Lawn Mowing Rooting Mulch Hardscaping.'
        
        
      ],
     
      bidInstructions: 'To submit a bid, kindly send us a message referring to the project ID and submit your phone contact.',
    }
  ];
  return (
    <div>
        <Header/>

        <div className="project-list">
      <h2 className="animated-heading">Available Projects</h2>
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h3>Project ID: {project.id}</h3>
          <h4>Project Title: {project.title}</h4>
          <p>
            COMPANY NAME: {project.company}<br />
            Estimate: {project.estimate}<br />
            {project.trades.map((trade) => (
              <span key={trade}>{trade}<br /></span>
            ))}
            {project.purpose}
            {project.bidInstructions}
          </p>
        </div>
      ))}
    </div>
       
    </div>
  )
}

export default Bidlists