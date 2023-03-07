import { images } from "../assets";

// NavBar menu
export const navLinks = [
  {
    id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "career",
    title: "Career",
  },
  {
    id: "techno",
    title: "Techno",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// About
const services = [
  {
    title: "Blockchain Ecosystem",
    subtitle: "Insights and guidance through trainings and organizational strategy - Solidity, DEFI, NFTs",
    icon: images.aboutblk,
  },
  {
    title: "Project Management",
    subtitle: "End-to-end projects vision combined with operational support to Financial Departments",
    icon: images.aboutpm,
  },
  {
    title: "Data & Systems",
    subtitle: "Experienced in cross-organizational processes, from upfront systems to reporting tools",
    icon: images.aboutdata,
  },
  {
    title: "Bank-Insurance",
    subtitle: "Strong knowledge of regulatory requirements such as Basel standards and IFRS (incl. 9 & 17)",
    icon: images.aboutbank,
  },
];

// Career
const experiences = [
  {
    title: "Revamping the Finance function",
    company_name: "Sidler Advisory LLC",
    icon: images.sidleradvisoryco,
    iconBg: "#fff",
    date: "May 2018 - Present",
    points: [
      {
        line1: "Director and GM @Sidler Advisory",
        line2: "Implementing digital tools and platforms to streamline financial operations"
      },
      {
        line1: "Interim CFO @Nine Investment Group",
        line2: "Investment Management Fund"
      },
      {
        line1: "Interim CFO @Monart",
        line2: "Art & blockchain marketplace with an art share trading platform"
      },
    ],
  },
  {
    title: "Business setup Consultancy",
    company_name: "frenchzone.ae",
    icon: images.fzlogo,
    iconBg: "#fff",
    date: "Jan 2021 - Present",
    points: [
      {
        line1: "Partner @frenchzone.ae",
        line2: "Our support services extend beyond the business setup stage, encompassing a wide range of offerings"
      },
      {
        line1: "Accounting services",
        line2: "Bookkeeping, reconciliation, financial reporting, payroll, VAT reports and audit support"
      },
      {
        line1: "Compliance services",
        line2: "Guidance through the UAE’s regulatory requirements for businesses, including ESR and UBO"
      },
    ],
  },
  {
    title: "Non-Executive Director",
    company_name: "GetNED",
    icon: images.getned,
    iconBg: "#fff",
    date: "Mar 2021 - Present",
    points: [
      {
        line1: "Pool Member @GetNED",
        line2: "GetNED is a Platform of curated and highly qualified Non-Executive Directors",
      },
      {
        line1: "Board Member @Multigate LLC",
        line2: "Fintech focused on providing Remittance, Treasury and Cash Flow Management services",
      },
      {
        line1: "Board Advisor @Crea Idea Lab",
        line2: "Consultancy and think tank for advanced smart cities",
      },
    ],
  },
  {
    title: "Bank-Insurance Advisory",
    company_name: "Sidler Consulting France",
    icon: images.sidleradvisorybw,
    iconBg: "#fff",
    date: "Jan 2008 - Dec 2018",
    points: [
      {
        line1: "Partner @Sidler Consulting",
        line2: "Financial and Regulatory consulting",
      },
      {
        line1: "International standards",
        line2: "IFRS - Basel standards, Solvency 2 - FINREP/COREP, QRT - ICAAP/ILAAP - BCBS239 - Stress Tests, Capital Planning",
      },
      {
        line1: "New IT systems set-up",
        line2: "SAP, JDE, ORACLE, SAGE, MOVEX, CPM - Accounting, Consolidation, Cash, FP&A implementation",
      },
    ],
  },
];

// Skills
const technologies = [
  {
    name: "sap",
    icon: images.sap,
  },
  {
    name: "powerbi",
    icon: images.powerbi,
  },
  {
    name: "chatgpt",
    icon: images.chatgpt,
  },
  {
    name: "solidity",
    icon: images.solidity,
  },
  {
    name: "nodejs",
    icon: images.nodejs,
  },
  {
    name: "git",
    icon: images.git,
  },
  {
    name: "javascript",
    icon: images.javascript,
  },
  {
    name: "hardhat",
    icon: images.hardhat,
  },
  {
    name: "infura",
    icon: images.infura,
  },
  {
    name: "alchemy",
    icon: images.alchemy,
  },
  {
    name: "moralis",
    icon: images.moralis,
  },
  {
    name: "python",
    icon: images.python,
  },
  {
    name: "rust",
    icon: images.rust,
  },
  // {
  //   name: "react",
  //   icon: images.reactjs,
  // },
  // {
  //   name: "r",
  //   icon: images.rlogo,
  // },
  // {
  //   name: "wyscout",
  //   icon: images.wyscout,
  // },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

// Works
const projects = [
  {
    name: "frenchzone.ae",
    description:
      "Live - We help you understand how to create your company in the UAE and follow the last news (in french)",
    tags: [
      {
        name: "business",
        color: "blue-text-gradient",
      },
      {
        name: "uae",
        color: "green-text-gradient",
      },
      {
        name: "frenchzone",
        color: "pink-text-gradient",
      },
    ],
    image: images.fzlogo,
    sourceWeb: "https://frenchzone.ae/",
    sourceGithub: "",
  },
  {
    name: "didali.com",
    description:
      "WIP - Q2/2023 - Dida Li Website, life coach specialized in mediation and conflict resolution",
    tags: [
      {
        name: "coaching",
        color: "blue-text-gradient",
      },
      {
        name: "wellbeing",
        color: "green-text-gradient",
      },
      {
        name: "mediation",
        color: "pink-text-gradient",
      },
    ],
    image: images.didali,
    sourceWeb: "",
    sourceGithub: "https://github.com/acaciacornigera/DidaLi",
  },
  {
    name: "MindMate",
    description:
      "WIP - Q2/2023 - Personal growth application offering a supportive companion for your self-discovery",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "development",
        color: "green-text-gradient",
      },
      {
        name: "app",
        color: "pink-text-gradient",
      },
    ],
    image: images.chatgpt,
    sourceWeb: "",
    sourceGithub: "",
  },

  {
    name: "NiftyBay",
    description:
      "WIP - Q3/2023 - Unique NFTs marketplace that offers a wide range of digital assets for creators, collectors, and investors",
    tags: [
      {
        name: "nft",
        color: "blue-text-gradient",
      },
      {
        name: "marketplace",
        color: "green-text-gradient",
      },
      {
        name: "defi",
        color: "pink-text-gradient",
      },
    ],
    image: images.about02,
    sourceWeb: "",
    sourceGithub: "",
  },
  {
    name: "CryptArena",
    description:
      "WIP - Q3/2023 - Cutting-edge crypto exchange platform that provides a seamless and secure trading experience for users",
    tags: [
      {
        name: "crypto",
        color: "blue-text-gradient",
      },
      {
        name: "marketplace",
        color: "green-text-gradient",
      },
      {
        name: "defi",
        color: "pink-text-gradient",
      },
    ],
    image: images.about04,
    sourceWeb: "",
    sourceGithub: "",
  },
  {
    name: "ChainLinker",
    description:
      "WIP - Q4/2023 - Secure and reliable platform that connects different blockchain networks for the seamless transfer of assets",
    tags: [
      {
        name: "bridge",
        color: "blue-text-gradient",
      },
      {
        name: "multichains",
        color: "green-text-gradient",
      },
      {
        name: "defi",
        color: "pink-text-gradient",
      },
    ],
    image: images.about01,
    sourceWeb: "",
    sourceGithub: "",
  },
];

export { services, experiences, technologies, /*testimonials,*/ projects };
