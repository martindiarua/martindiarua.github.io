export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  badge?: string;
  featured: boolean;
  category: "Machine Learning" | "Python Development" | "Data Analytics" | "Quality Assurance";
}

export const projects: Project[] = [

  {
    title: "Price Intel – Competitive Intelligence for Jumia Sellers",
    description:
      "A Python platform that tracks competitor pricing and market movement in real time, giving Jumia sellers the data they need to price with confidence.",
    image: "/images/projects/price-intel.svg",
    github: "https://github.com/martindiarua/jumia-intel-mvp",
    badge: "Flagship",
    featured: true,
    category: "Python Development",
  },

  {
    title:
      "Customer Lifetime Value Prediction & Revenue Optimization",
    description:
      "An ML system that forecasts customer lifetime value, giving teams a data-backed way to prioritize retention spend and revenue planning.",
    image: "/images/projects/clv.svg",
    github:
      "https://github.com/martindiarua/Customer-Lifetime-Value-Prediction-Revenue-Optimization-System",
    badge: "Machine Learning",
    featured: false,
    category: "Machine Learning",
  },

  {
    title: "Customer Churn Prediction",
    description:
      "A predictive model that flags at-risk customers before they leave, so retention teams can step in with targeted offers instead of guesswork.",
    image: "/images/projects/churn.svg",
    github: "#",
    featured: false,
    category: "Machine Learning",
  },

  {
    title: "Bank Transaction Fraud Detection",
    description:
      "A machine learning model that flags suspicious bank transactions in real time, helping catch fraud before it clears.",
    image: "/images/projects/fraud-detection.svg",
    github: "https://github.com/martindiarua/Bank_Transaction_Fraud_Detection",
    featured: false,
    category: "Machine Learning",
  },

  {
    title: "Credit Card Customer Segmentation",
    description:
      "PCA and K-Means clustering applied to card-holder data to surface distinct customer groups for sharper, more targeted marketing.",
    image: "/images/projects/segmentation.svg",
    github: "#",
    featured: false,
    category: "Machine Learning",
  },

  {
    title: "DecodeLabs Machine Learning Project I",
    description:
      "An end-to-end ML pipeline covering feature engineering, model training, and evaluation, built to an industry-standard, deployment-ready structure.",
    image: "/images/projects/decode1.svg",
    github: "#",
    featured: false,
    category: "Machine Learning",
  },

  {
    title: "DecodeLabs Machine Learning Project II",
    description:
      "A second ML pipeline focused on reproducibility: clean architecture, versioned data, and evaluation practices built to hold up in production.",
    image: "/images/projects/decode2.svg",
    github: "#",
    featured: false,
    category: "Machine Learning",
  },

  {
    title: "Website Performance Dashboard",
    description:
      "An interactive Power BI dashboard tracking traffic, engagement, bounce rate, and conversion — built so stakeholders can spot trends at a glance.",
    image: "/images/projects/dashboard.svg",
    github: "#",
    featured: false,
    category: "Data Analytics",
  },

  {
    title: "QA Portfolio",
    description:
      "A set of manual and automated test suites built with Selenium WebDriver, covering test case design and core QA practice.",
    image: "/images/projects/qa.svg",
    github: "https://github.com/martindiarua/QA_Portfolio",
    featured: false,
    category: "Quality Assurance",
  },

  {
    title: "FlexiSAF Python Projects",
    description:
      "A set of Python exercises spanning APIs, automation, file processing, and object-oriented design.",
    image: "/images/projects/flexisaf.svg",
    github: "#",
    featured: false,
    category: "Python Development",
  }

];