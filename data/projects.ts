export const projects = [
  {
    slug: "human-detection",
    title: "Human Presence Detection System",
    description:
      "An AI-powered surveillance solution developed to automatically detect human presence during non-working hours through real-time video processing. The system improves security monitoring efficiency by reducing manual dependency and enabling immediate incident awareness through automated alert mechanisms.",
    tech: ["Python", "YOLO", "OpenCV", "Flask", "SQLite", "Twilio", "SMTP"],
    github: "https://github.com/Deepak-kumar-4/Human-Presence-Detection.git",

    problem:
      "Traditional CCTV surveillance systems rely heavily on manual observation, which can lead to delayed detection of suspicious activities and reduced monitoring efficiency during non-working hours. This limitation increases the risk of unauthorized access and makes incident response less proactive.",

    solution:
      "Designed and implemented an automated human detection system leveraging deep learning-based object detection models. The system processes live video feeds in real time and triggers instant notifications via integrated communication services to ensure timely intervention and improved security oversight.",

    features: [
      "Real-time human detection using deep learning models",
      "Automated alert notifications through Email and SMS",
      "Web-based dashboard for  monitoring detection events",
      "Centralized logging and reporting of surveillance activities",
    ],
  },

  {
    slug: "craftsea",
    title: "CraftSea",
    description:
      "A full-stack web application developed to support digital operations for a craft store, enabling structured product management, streamlined order processing, and improved customer engagement through a responsive and user-friendly web platform.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "MySQL"],
    github: "https://github.com/Deepak-kumar-4/CraftSea.git",

    problem:
      "Many small-scale craft businesses operate with limited digital infrastructure, making it difficult to manage inventory, handle customer orders efficiently, and maintain organized sales workflows.",

    solution:
      "Designed and implemented a web-based platform that digitizes core business operations, providing administrative control over product listings, structured order handling, and a centralized system for managing customer-related activities.",

    features: [
      "Secure user authentication and profile management",
      "Administrative system for managing products and inventory",
      "Structured order processing and transaction handling",
      "Organized management of customer details and related activities",
    ],
  },

  {
    slug: "campus-placeverse",
    title: "Campus Placeverse",
    description:
      "A placement management system designed to support student recruitment processes by managing academic performance, company applications, and mock assessment activities within a centralized platform.",
    tech: ["VB.NET", "SQL Server"],
    github: "https://github.com/Deepak-kumar-4/Campus-PlaceVerse.git",

    problem:
      "Traditional placement processes often rely on fragmented data handling and manual coordination, leading to inefficiencies in tracking student eligibility, managing company applications, and monitoring assessment activities.",

    solution:
      "Developed a centralized digital platform that organizes placement-related data and workflows, enabling administrators to efficiently manage student records, application processes, and performance tracking within a unified system.",

    features: [
      "Tracking of student academic performance and profiles",
      "Workflow-based management of company applications",
      "Integrated Mock assessment tracking system",
      "Administrative reporting and data overview dashboard",
    ],
  },
]