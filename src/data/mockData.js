export const clients = [
  {
    id: 1,
    name: "James Harper",
    email: "james.harper@example.com",
    avatar: "JH",
    company: "Tesla Inc",
    industry: "Automotive"
  },
  {
    id: 2,
    name: "Emily Harper",
    email: "emily.harper@example.com",
    avatar: "EH",
    company: "Meta Platforms",
    industry: "Technology"
  },
  {
    id: 3,
    name: "Tyler Redd",
    email: "tyler.redd@example.com",
    avatar: "TR",
    company: "Amazon",
    industry: "E-commerce"
  },
  {
    id: 4,
    name: "Jessica Wells",
    email: "jessica.wells@example.com",
    avatar: "JW",
    company: "Microsoft",
    industry: "Technology"
  },
  {
    id: 5,
    name: "Austin Brooks",
    email: "austin.brooks@example.com",
    avatar: "AB",
    company: "Apple Inc",
    industry: "Technology"
  }
];

export const clientDetails = {
  1: {
    id: 1,
    name: "James Harper",
    title: "CEO & Founder",
    company: "Tesla Inc",
    location: "Austin, Texas",
    avatar: "JH",
    profileImage: null,
    financials: {
      netWorth: "$2.5M",
      portfolioValue: "$1.8M", 
      totalInvestments: "$1.5M"
    },
    recentNews: [
      {
        id: 1,
        title: "Tesla announces new Gigafactory in Mexico",
        description: "New manufacturing facility will boost production capacity and create thousands of jobs in Monterrey region.",
        timestamp: "2 hours ago",
        source: "Reuters"
      },
      {
        id: 2,
        title: "Electric vehicle market share reaches 18% in Q3",
        description: "Industry analysis shows continued growth in EV adoption with Tesla maintaining market leadership position.",
        timestamp: "5 hours ago", 
        source: "Bloomberg"
      },
      {
        id: 3,
        title: "Sustainable energy initiatives expand globally",
        description: "New solar panel installations and battery storage projects announced across European markets.",
        timestamp: "1 day ago",
        source: "Financial Times"
      }
    ]
  }
  // Add more client details as needed
};

export const clientBiographies = { //cleint page
  1: {
    id: 1,
    personalInfo: {
      fullName: "James Robert Harper",
      dateOfBirth: "March 15, 1978",
      birthPlace: "Detroit, Michigan, USA",
      nationality: "American",
      maritalStatus: "Married to Sarah Harper",
      children: "Two children: Michael (16), Emma (14)"
    },
    education: {
      undergraduate: "Bachelor of Science in Electrical Engineering, University of Michigan (2000)",
      graduate: "Master of Business Administration, Stanford Graduate School of Business (2005)",
      certifications: "Certified Financial Planner (CFP), Project Management Professional (PMP)"
    },
    careerHistory: [
      {
        position: "CEO & Founder",
        company: "Tesla Inc",
        duration: "2008 - Present",
        description: "Founded electric vehicle startup, scaled to $50M ARR, 200+ employees"
      },
      {
        position: "Senior Engineering Manager",
        company: "Ford Motor Company",
        duration: "2005 - 2008",
        description: "Led hybrid vehicle development team, managed $20M R&D budget"
      },
      {
        position: "Product Engineer",
        company: "General Motors",
        duration: "2000 - 2005",
        description: "Developed automotive electrical systems, 12 patents filed"
      }
    ],
    achievements: [
      "Forbes 40 Under 40 (2019)",
      "Michigan Entrepreneur of the Year (2020)",
      "Holder of 24 automotive technology patents",
      "Board member of Detroit Economic Development Corp"
    ],
    interests: [
      "Sustainable technology and renewable energy",
      "Classic car restoration",
      "Golf (handicap: 8)",
      "Mentoring young entrepreneurs"
    ],
    philanthropy: [
      "Founder of Harper Foundation for STEM Education",
      "Major donor to University of Michigan Engineering School",
      "Volunteer coach for local youth robotics team"
    ]
  }
};

export const familyTreeData = {
  1: {
    nodes: [
      {
        id: 'james',
        name: 'James Harper',
        relation: 'self',
        spouse: 'sarah',
        children: ['michael', 'emma'],
        parents: ['robert', 'mary'],
        x: 300,
        y: 200
      },
      {
        id: 'sarah',
        name: 'Sarah Harper',
        relation: 'spouse',
        spouse: 'james',
        children: ['michael', 'emma'],
        x: 450,
        y: 200
      },
      {
        id: 'michael',
        name: 'Michael Harper',
        relation: 'son',
        parents: ['james', 'sarah'],
        age: 16,
        x: 250,
        y: 300
      },
      {
        id: 'emma',
        name: 'Emma Harper',
        relation: 'daughter',
        parents: ['james', 'sarah'],
        age: 14,
        x: 400,
        y: 300
      },
      {
        id: 'robert',
        name: 'Robert Harper',
        relation: 'father',
        spouse: 'mary',
        children: ['james'],
        x: 200,
        y: 100
      },
      {
        id: 'mary',
        name: 'Mary Harper',
        relation: 'mother',
        spouse: 'robert',
        children: ['james'],
        x: 350,
        y: 100
      }
    ]
  }
};

export const updates = [ //dashboard
  {
    id: 1,
    title: "Elon Musk announces new Tesla factory in Mexico",
    description: "Tesla CEO confirms construction of new Gigafactory in Monterrey, Mexico, expected to produce 2 million vehicles annually by 2025.",
    clientId: 1,
    clientName: "James Harper",
    source: "Reuters",
    timestamp: "2 hours ago",
    type: "company_news",
    completed: true
  },
  {
    id: 2, 
    title: "Meta launches new AI chatbot across WhatsApp", 
    description: "Meta integrates advanced AI assistant into WhatsApp Business, enabling automated customer service for enterprise clients.",
    clientId: 2,
    clientName: "Emily Harper",
    source: "TechCrunch",
    timestamp: "4 hours ago",
    type: "product_launch",
    completed: true
  },
  {
    id: 3,
    title: "Amazon Web Services expands data centers in Europe",
    description: "AWS announces 3 billion euro investment in new cloud infrastructure across Germany and France to meet growing demand.",
    clientId: 3,
    clientName: "Tyler Redd",
    source: "Bloomberg",
    timestamp: "6 hours ago",
    type: "expansion",
    completed: true
  },
  {
    id: 4,
    title: "Microsoft reports 25% increase in Azure revenue",
    description: "Cloud computing division shows strong growth in Q3 earnings, driven by enterprise adoption and AI service integration.",
    clientId: 4,
    clientName: "Jessica Wells",
    source: "Financial Times",
    timestamp: "1 day ago",
    type: "financial",
    completed: false
  }
];

export const user = {
  name: "Sarah",
  fullName: "Sarah Johnson",
  avatar: "S",
  profileImage: null
};

export const appConfig = {
  title: "Client Factpack 360"
};