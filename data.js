const YEAR_DATA = {
  year: 2025,
  kpis: [
    { 
      label: "Projects", 
      value: 10, 
      description: "End-to-end initiatives delivered",
      icon: "project"
    },
    { 
      label: "Skills Learned", 
      value: 8, 
      description: "New technologies learned",
      icon: "skills"
    },
    { 
      label: "Certifications", 
      value: 3, 
      description: "Professional credentials earned",
      icon: "cert"
    },
    { 
      label: "Clubs Led", 
      value: 3, 
      description: "Organizations and communities",
      icon: "club"
    },
    { 
      label: "Conferences Attended", 
      value: 4, 
      description: "Events and workshops",
      icon: "conference"
    }
  ],
  months: [
    {
      month: "January",
      title: "Academic Progress",
      highlight: "Began role as Graduate Student Assistant (GSA) at Arizona State University. Started semester 2 of Master's in Information Technology. Coursework: Analyzing Big Data, Advanced Database Management Systems, Data Visualization.",
      tags: ["Academic", "GSA", "Learning"]
    },
    {
      month: "February",
      title: "Leadership & Campus Impact",
      highlight: "Maintained strong academic performance. Selected as Adobe Student Ambassador. Led and conducted multiple technology and design events on campus.",
      tags: ["Leadership", "Campus Impact", "Ambassador"]
    },
    {
      month: "March",
      title: "Research & Automation",
      highlight: "Served as Travel and Research Grant Reviewer with Graduate Student Government. Delivered multiple academic and personal projects. Automated operational workflows.",
      tags: ["Research", "Automation", "Projects"]
    },
    {
      month: "April",
      title: "CodeFlow Spark Challenge",
      highlight: "Participated in CodeFlow Spark Challenge. Built additional projects alongside academic commitments.",
      tags: ["Competition", "Projects", "Learning"]
    },
    {
      month: "May",
      title: "Research & Engineering Impact",
      highlight: "Appointed as Research Assistant. Led migration of a complex VB.NET application to a scalable Python framework. Attended PyCon US 2025 (Pittsburgh).",
      tags: ["Research", "Migration", "Python", "Conference"]
    },
    {
      month: "June",
      title: "Representation & Project Completion",
      highlight: "Successfully completed research project. Represented PMI Phoenix at Interface Phoenix 2025.",
      tags: ["Research", "Representation", "Conference"]
    },
    {
      month: "July",
      title: "Industry Immersion",
      highlight: "Joined Dreamscape Learn at the Tempe office, gaining exposure to immersive learning technologies.",
      tags: ["Industry", "Learning", "Technology"]
    },
    {
      month: "August",
      title: "Advanced Coursework",
      highlight: "Began semester 3 of Master's program. Enrolled in advanced courses: GIT 542 – Usability & User Experience, IFT 512 – Advanced Big Data Analytics / AI, IFT 561 – Data in the Cloud.",
      tags: ["Academic", "Advanced Courses", "AI", "Cloud"]
    },
    {
      month: "September",
      title: "Professional Training",
      highlight: "Completed Railog training program. Attended Techiepalooza, inspiring a long-term vision to scale Pick the Pixel globally.",
      tags: ["Training", "Professional Development", "Vision"]
    },
    {
      month: "October",
      title: "Volunteering & Conferences",
      highlight: "Attended an Accessibility-focused class. Volunteered at Adobe Create Now – Phoenix. Attended PyTorch Conference in San Francisco.",
      tags: ["Volunteering", "Accessibility", "Conference"]
    },
    {
      month: "November",
      title: "National Research & Recognition",
      highlight: "Selected for the NSF-funded CAP LTER project. Developing a Python-based interactive dashboard to visualize decades of ecological data. Won a Hackathon and received the Community Impact Award.",
      tags: ["Research", "NSF", "Dashboard", "Award", "Hackathon"]
    },
    {
      month: "December",
      title: "Growth, Global Exposure & Recognition",
      highlight: "Attended AWS Learning Days. Accepted into McKinsey.org Forward Program. Attended PMI Global Summit 2025. Recognized for volunteer contributions with PMI.",
      tags: ["Growth", "Global", "Recognition", "Volunteering"]
    }
  ],
  skills: [
    { name: "Python & Data", level: 90 },
    { name: "Dashboards & Visualization", level: 88 },
    { name: "Automation / RPA", level: 85 },
    { name: "UI/UX & Product Thinking", level: 80 },
    { name: "Business Analytics and Intelligence", level: 85 },
    { name: "AWS / Cloud", level: 75 },

  ],
  events: [
    {
      name: "Interface Phoenix 2025",
      type: "Conference",
      location: "Phoenix, AZ",
      date: "June 2025",
      highlight: "Cloud transformation and cybersecurity innovations",
      image: "images/interface-phoenix-2025.jpg.jpeg"
    },
    {
      name: "PyCon US 2025",
      type: "Conference",
      location: "Pittsburgh, PA",
      date: "May 2025",
      highlight: "Largest python conference - thought-provoking keynotes and hands-on sessions",
      image: "images/pycon-2025-pittsburgh.jpg.jpeg"
    },
    {
      name: "Adobe Create Now",
      type: "Event",
      location: "Phoenix, AZ",
      date: "October 2025",
      highlight: "Creativity and design community gathering",
      image: "images/adobe-create-now-2025.jpg.jpeg"
    },
    {
      name: "PMI Global Summit 2025",
      type: "Conference",
      location: "Global",
      date: "November 2025",
      highlight: "Future of leadership and project management",
      image: "images/pmi-global-summit-2025.jpg.jpeg"
    }
  ],
  biggestWin: {
    title: "Biggest Win",
    text: "Built an end-to-end ML pipeline on AWS that automated data processing workflows and enabled real-time decision-making for 60+ stakeholders. The system reduced manual work by 120 hours monthly and improved accuracy by 95%.",
    bullets: [
      "Scaled from prototype to production in 3 months",
      "Achieved 99.9% uptime with automated monitoring"
    ]
  },
  biggestLesson: {
    title: "Biggest Lesson",
    text: "Clarity before speed. Automation works best when the problem is deeply understood. Taking time to map workflows, understand edge cases, and design for maintainability saves months of refactoring later.",
    bullets: [
      "Documentation is not optional—it's a feature",
      "User feedback loops are essential for adoption"
    ]
  },
  goals: [
    { text: "Complete Masters Degree", status: "planned" },
    { text: "Open to Opportunities", status: "planned" },
    { text: "Build Real-time AI Workflows", status: "planned" },
    { text: "Contribute to Open Source", status: "planned" },
  ],
  careerReadiness: {
    focus: "Data & Product Roles",
    interests: ["Data Science", "Product Analytics", "Business Intelligence", "Automation", "Human Computer Interaction"],
    awards: [
      {
        title: "Community Impact Award",
        event: "Hackathon Winner (Remix The Future 2025)",
        description: "Recognized for developing a solution with measurable community impact, demonstrating strong problem-solving, collaboration, and product thinking."
      }
    ]
  },
  keyAchievements: [
    { title: "Production ML Pipeline", description: "End-to-end ML system on AWS", icon: "🚀" },
    { title: "120+ Hours Saved/Month", description: "Through automation workflows", icon: "⚡" },
    { title: "60+ Stakeholders Impacted", description: "Across 5 departments", icon: "👥" },
    { title: "3 Certifications Earned", description: "AWS, Data Engineering, ML", icon: "🏆" }
  ],
  tools: [
    { name: "Python", category: "Language" },
    { name: "AWS", category: "Cloud" },
    { name: "Tableau", category: "Visualization" },
    { name: "SQL", category: "Database" },
    { name: "Git", category: "Version Control" },
    { name: "Docker", category: "DevOps" },
    { name: "TensorFlow", category: "ML" },
    { name: "Airflow", category: "Orchestration" }
  ],
  hero: {
    pill: "Vishva's Professional Journey Dashboard",
    title: "Turning a Year Into a Dashboard",
    subtitle: "This dashboard captures a year of measurable progress across data, product, research, and leadership.",
    tags: ["Automation", "ML Pipelines", "Dashboards", "Product Thinking"],
    updated: "Updated: December 2025"
  }
};