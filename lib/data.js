// biz-web-app/lib/data.js

import { Clock, Umbrella, DollarSign, Zap, MapPin, Calendar, TrendingUp } from "lucide-react";

export const features = [
    { id: 1, name: "Time keeping", icon: Clock },
    { id: 2, name: "Leaves", icon: Umbrella },
    { id: 3, name: "Payroll", icon: DollarSign },
    { id: 4, name: "Offline Punch", icon: Zap },
    { id: 5, name: "Location Punch", icon: MapPin },
  ];

export const featureDetails = [
    {
        id: "schedule",
        name: "Schedule",
        icon: Calendar,
        details:
        "Effortlessly manage and organize work schedules to keep your team on track.",
        moreDetails: {
        firstDetail:
            "Create and manage shifts: Easily set up schedules for your team, ensuring everyone knows their hours in advance.",
        secondDetail:
            "Automatic reminders: Stay on top of things with push notifications that remind your team about upcoming shifts or changes.",
        thirdDetail:
            "Flexible adjustments: Quickly modify shifts and work hours to adapt to changes, ensuring optimal staffing.",
        },
    },
    {
        id: "tracking",
        name: "Tracking",
        icon: TrendingUp,
        details:
        "Track employee work hours accurately to streamline time management and payroll processes.",
        moreDetails: {
        firstDetail:
            "Real-time tracking: Capture time spent on tasks instantly, helping you keep tabs on productivity throughout the day.",
        secondDetail:
            "Detailed reporting: Generate accurate reports to simplify payroll, ensuring employees are paid fairly and on time.",
        thirdDetail:
            "Error-free logging: Minimize manual errors by automating time logs and reducing administrative burden.",
        },
    },
    {
        id: "geofencing",
        name: "Geofencing",
        icon: MapPin,
        details:
        "Enhance accountability by using location-based tracking to ensure employees are where they need to be.",
        moreDetails: {
        firstDetail:
            "Set virtual boundaries: Define job site locations with geofencing, ensuring your team clocks in and out when arriving or leaving specific sites.",
        secondDetail:
            "Automated time tracking: Employees' work hours are logged automatically when they enter or exit a defined geofenced area, ensuring accurate data.",
        thirdDetail:
            "Prevent time fraud: Ensure accountability and prevent time fraud by tracking employee movements with GPS, only allowing time entries within authorized zones.",
        },
    },
];

export const testimonials = [
  {
    id: 1,
    testimonial:
      "Bizbuddy has completely transformed the way our team manages time. The interface is intuitive and the support is exceptional!",
    stars: 5,
    name: "John Doe",
    occupation: "Project Manager",
  },
  {
    id: 2,
    testimonial:
      "I love how seamlessly I can track my work hours. It has really improved my productivity and work-life balance.",
    stars: 4,
    name: "Jane Smith",
    occupation: "Software Engineer",
  },
  {
    id: 3,
    testimonial:
      "A must-have tool for any business. The scheduling and time tracking features are efficient and easy to use.",
    stars: 5,
    name: "Alice Johnson",
    occupation: "Operations Manager",
  },
];

export const appData = [
    {
      id: 1,
      metric: "App Downloads",
      quantity: 1500000,
    },
    {
      id: 2,
      metric: "Active Users",
      quantity: 750000,
    },
    {
      id: 3,
      metric: "App Reviews",
      quantity: 25000,
    },
    {
      id: 4,
      metric: "5 Star Rating",
      quantity: 4.8,
    },
  ];
  
export const trustedPartners = [
  {
    id: 1,
    src: "express.png"
  },
  {
    id: 2,
    src: "nodejs.png"
  },
  {
    id: 3,
    src: "aws.png"
  },
  {
    id: 4,
    src: "mongodb.png"
  },
  {
    id: 5,
    src: "next.png"
  },
  {
    id: 6,
    src: "postgresql.png"
  },

]