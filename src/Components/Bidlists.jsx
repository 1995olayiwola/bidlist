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
    },
    {
      id: 198707,
      title: "SITE PREP For Drug Test Laboratory Construction, Texas",
    company: "RAZER FINTECH",
    trades: [
      "Class A - *Landscaping Contractor: site surveying, grading, leveling, clearing land, drainage, earthmoving, and demolition"],
    estimate: "Open",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
   {
    id: 231486,
    title: "Bidders needed for plumbing work on 12 units of six-bedroom apartments in Louisiana",
    company: "Oasis Realty Limited",
    trades: [
      "Plumber",
      "General Engineering Contractor (GEC)",
      "Subcontractor Opportunities",
      "Pipeline Contractor: Water Mains, Sewers, Drains & Pipe Laying + Related Structures",
      "Includes Pipe Inspection Camera"
    ],
    estimate: "Open",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 231408,
    title: "Bidders needed for plumbing work on ten units of six-bedroom apartments in Washington",
    company: "Oasis Realty Limited",
    trades: [
      "Plumber",
      "General Engineering Contractor (GEC)",
      "Subcontractor Opportunities",
      "Pipeline Contractor: Water Mains, Sewers, Drains & Pipe Laying + Related Structures",
      "Includes Pipe Inspection Camera"
    ],
    estimate: "Open",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 230411,
  title: "Bidders needed for plumbing work on 9 units of six-bedroom apartments in Maryland",
  company: "Oasis Realty Limited",
  trades: [
    "Plumber",
    "General Engineering Contractor (GEC)",
    "Subcontractor Opportunities",
    "Pipeline Contractor: Water Mains, Sewers, Drains & Pipe Laying + Related Structures",
    "Includes Pipe Inspection Camera"
  ],
  estimate: "Open",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 231486, // Changed projectId to id
    title: "Bidders needed for plumbing work on 12 units of six-bedroom apartments in Louisiana",
    company: "Oasis Realty Limited",
    trades: [
      "Plumber",
      "General Engineering Contractor (GEC)",
      "Subcontractor Opportunities",
      "Pipeline Contractor: Water Mains, Sewers, Drains & Pipe Laying + Related Structures",
      "Includes Pipe Inspection Camera"
    ],
    estimate: "Open",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 231410, // Changed projectId to id
    title: "Bidders needed for plumbing work on 15 units of six-bedroom apartments in New York",
    company: "Oasis Realty Limited",
    trades: [
      "Plumber",
      "General Engineering Contractor (GEC)",
      "Subcontractor Opportunities",
      "Pipeline Contractor: Water Mains, Sewers, Drains & Pipe Laying + Related Structures",
      "Includes Pipe Inspection Camera"
    ],
    estimate: "Open",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 231410 ,
    title: "Bidders needed for plumbing work on 18 units of six-bedroom apartments in Georgia",
    company: "Oasis Realty Limited",
    trades: [
      "Plumber",
      "General Engineering Contractor (GEC)",
      "Subcontractor Opportunities",
      "Pipeline Contractor: Water Mains, Sewers, Drains & Pipe Laying + Related Structures",
      "Includes Pipe Inspection Camera"
    ],
    estimate: "Open",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 19009, // Project ID
  title: "REBUILD OF 100 UNITS OF SEMI ABANDONED ESTATES IN NEWKIRK NEW MEXICO",
  company: "RAZER FINTECH",
  trades: [
    "General Building Contractor GBC: Building Construction Services",
    "Subcontractor Opportunities High Voltage Electrical Contractor (HVE): Power Lines, Street & Highway Lighting, Venues, Arenas, Utility, Transformers",
    "Class B - Landscaping Contractor: Grounds Maintenance Grubbing Fertilizing Sodding Lawn Mowing Rooting Mulch Hardscaping."
  ],
  estimate: "$500,000 per unit cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 708460, // Project ID
    title: "Light Oil Expansion General Construction Services, FL",
    company: "RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities"
    ],
    estimate: "Open",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308177, // Project ID
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, MALIBU CALIFORNIA",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING",
      "Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308178, // Project ID
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, SIESTA KEY, FL",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING",
      "Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308179, // Project ID
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, Waikiki, HONOLULU",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING,Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308180, // Assuming a unique ID for this project
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, Waikiki, HONOLULU",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING",
      "Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308181, // Project ID
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, Hanalei Bay Beach HAWAII",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING",
      "Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308182, // Assuming a unique ID for this project
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, Gulf Shores, Alabama",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING",
      "Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308183, // Project ID
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, Clearwater Beach, Florida",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING",
      "Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308184, // Project ID
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, Destin Beach, Florida",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING",
      "Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308185, // Project ID
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, Outer Banks, North Carolina",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING",
      "Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308185, // Project ID
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, Outer Banks, North Carolina",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING",
      "Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 308186, // Project ID
    title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, Outer Banks, North Carolina",
    company: "Finnish Consortiums Handled by RAZER FINTECH",
    trades: [
      "CG - General Building Contractor GBC: Building Construction Services",
      "Subcontractor Opportunities",
      "Class B - CAPENTRY, FURNISHING",
      "Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "$500,000 - $650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 80627828, // Tender ID
  title: "Tenders Are Invited For Solar Photovoltaic Modules – Fve City Of Velesín - Ii.",
  company: "Razer Fintech",
  trades: [], // No trades listed in the description
  estimate: "$29,707,536",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 80611093, // Tender ID (assuming it's unique)
    title: "Tenders Are Invited For Electrical Machinery, Apparatus, Equipment And Consumables; Lighting – Delivery And Installation Of 150 Charging Stations",
    company: "Razer Fintech",
    trades: [
      "Electrical Machinery, Apparatus, Equipment And Consumables",
      "Lighting"
    ],
    estimate: "$75,724,200",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 80611124, // Tender ID (assuming it's unique)
    title: "Tenders Are Invited For Burglar And Fire Alarms – Supply And Installation Of Eps In The Dps Barvířská Building In Most",
    company: "Razer Fintech",
    trades: [
      "Burglar Alarm",
      "Fire Alarm"
    ],
    estimate: "$20,084,825",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 35077, // Project ID
  title: "CONSTRUCTION OF 30 UNITS OF 1,500 SQ FEET WOODEN BEACH HOUSE, Graz, Austria",
  company: "Finnish Consortiums Handled by RAZER FINTECH",
  trades: [
    "Class A - General Engineering Contractor GEC; Subcontractor Opportunities",
    "Class B - General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"
  ],
  estimate: "€500,000 - €650,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    id: 35082,
    title: "BUILDING OF 1000 SITING CAPAITY OF SOFTWARE AND TECHNOLOGY TRAINING CENTRE in Vienna, Austria",
    company: "RAZER FINTECH",
    trades: [
      "Class A - General Engineering Contractor GEC; Subcontractor Opportunities",
      "Class B - General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities",
      "Class C - CAPENTRY, FURNISHING, Landscaping Contractor: Grounds Maintenance"
    ],
    estimate: "€5,000,000 - €6,500,000 max Per Unit Cost.",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    
      id: 198707, // Project ID
  title: "SITE PREP For Drug Test Laboratory Construction, Innsbruck, Austria.",
  company: "RAZER FINTECH",
  trades: ["Landscaping Contractor: site surveying, grading, leveling, clearing land, drainage, earthmoving, and demolition"],
  estimate: "€8,000,000",
    bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
  },
  {
    
    id: 19607, // Project ID
    title: "SITE PREP For 1000 acres of farmland, Klagenfurt am Wörthersee, Austria.",
    company: "RAZER FINTECH",
    trades: [
      "Landscaping Contractor: Grounds Maintenance",
      "Grubbing",
      "Fertilizing",
      "Sodding",
      "Lawn Mowing",
      "Rooting",
      "Mulch",
      "Hardscaping",
      "Rockscaping"
    ],
    estimate: "Open",
  bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
  id: 196017, // Project ID
  title: "Razer Fintech Technology Center, Helsinki, Finland.",
  company: "RAZER FINTECH",
  trades: [
    "Class A - General Engineering Contractor GEC; Subcontractor Opportunities",
    "Class B - General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"
  ],
  estimate: "Open",
bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
  id: 669007, // Project ID
  title: "20,000 acres of Seed Corn Farmland Landscaping, Bavaria, Germany.",
  company: "RAZER FINTECH feed the world project",
  trades: [
    "Landscaping Contractor: Grounds Maintenance",
    "Grubbing",
    "Fertilizing",
    "Sodding",
    "Lawn Mowing",
    "Rooting",
    "Mulch",
    "Hardscaping"
  ],
  estimate: "Open",
bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
  id: 10073, // Project ID
  title: "SITE PREP and CONSTRUCTION of a Sephora Partnership Retail Center on a Two-Acre Nevada Property",
  company: "RAZER FINTECH",
  trades: ["General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"],
  estimate: "$31,000,000 subjected to sub categories.",

bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
  id: 12073,
    title: "SITE PREP and CONSTRUCTION of a Sephora Partnership Retail Center on a Two-Acre in Texas",
    company: "RAZER FINTECH",
    trades: ["General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"],
    estimate: "$34,000,000 subjected to sub categories.",

bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
  id: 129059,
  title: "SITE PREP and CONSTRUCTION of a Sephora Partnership Retail Center on a Two-Acre in Madrid Spain",
  company: "RAZER FINTECH",
  trades: ["General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"],
  estimate: "€37,000,000 subjected to sub categories.",

bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
  id: 120470,
  title: "SITE PREP and CONSTRUCTION of a Sephora Partnership Retail Center on a Two-Acre in Rome, Italy",
  company: "RAZER FINTECH",
  trades: ["General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"],
  estimate: "€37,000,000 - €42,000,000 subjected to sub categories.",

bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
  id: 120882,
    title: "SITE PREP and CONSTRUCTION of a Sephora Partnership Retail Center on a Two-Acre in Amsterdam, Netherlands",
    company: "Mao Subsidiaries.",
    trades: ["General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"],
    estimate: "€25, 000,000 - €40,000,000 subjected to sub categories.",

bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
  id: 566711,
  title: "SITE PREP and CONSTRUCTION of a Nordstrom Partnership Retail Center on a Two-Acre in Warsaw, Poland.",
  company: "Nord PLC.",
  trades: ["General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"],
  estimate: "€17,000,000 subjected to sub categories.",

bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
  id: 561108,
    title: "SITE PREP and CONSTRUCTION of a Nordstrom Partnership Retail Center on a Two-Acre in Berlin, Germany",
    company: "Afrique Realty.",
    trades: ["General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"],
    estimate: "€17,000,000 subjected to sub categories.",

bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
 
  id: "001654",
  title: "Mini Retail Store Partnership's Site Preparation and Construction on 5,000 Square Feet in Florida",
  company: "Simone Property Group",
  trades: ["General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"],
  estimate: "$2,000,000",
bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
 
  id: "001754",
  title: "Mini Retail Store Partnership's Site Preparation and Construction on 5,000 Square Feet in New Jersey",
  company: "Simone Property Group",
  trades: ["General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"],
  estimate: "$2,100,0786", // Assuming
bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
 
  id: 100372,
  title: "Mini Retail Store Partnership's Site Preparation and Construction on 4,000 Square Feet in Texas",
  company: "Tom Wallace (private owner)",
  trades: ["General Building Contractor GBC: Building Construction Services, Subcontractor Opportunities"],
  estimate: "$1,500,000",
bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
{
 
  id: 100372,
  title: "Preparing Sites and Land for 2000 Acres of Farming to Feed a Nation (NY, AL, MD, OK, KY, CO, TX, TN, WY, ID, WA, SC, NC, NV, OR)",
  company: "Private (CHARITY)",
  trades: [
    "Landscaping Contractor: Grounds Maintenance Grubbing Fertilizing Sodding Lawn Mowing Rooting Mulch Hardscaping Rockscaping"
  ],
  estimate: "$3,500,000",
bidInstructions: "Kindly send us a message referring to the project ID and submit your phone contact."
},
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