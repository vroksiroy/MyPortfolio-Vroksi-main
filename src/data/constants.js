export const Bio = {
  name: "Vroksi Roy",
  role: "Lead Engineer",
  location: "Ahmedabad, India",
  timezone: "Asia/Kolkata",
  intro:
    "I'm a Lead Engineer with 7.5+ years of shipping React Native and Next.js products in healthcare, AI, fintech and social. I own the whole path: architecture, Node.js services, mobile delivery, CI/CD and production. I also make the engineers around me better.",
  email: "royvroksi@gmail.com",
  phone: "+91 99098 27255",
  github: "https://github.com/vroksiroy",
  linkedin: "https://www.linkedin.com/in/vroksiroy/",
  resume: "https://drive.google.com/file/d/1wnd_nojbvDqDzPGpYsIiAJwCkP6qV_cR/view?usp=sharing",
  // Path to a square headshot in /public, e.g. "/headshot.jpg". Empty shows the VR badge.
  photo: "",
};

export const facts = [
  { label: "Experience", value: "7.5+", unit: "years" },
  { label: "Production apps", value: "9+", unit: "shipped" },
  { label: "Largest reach", value: "140K+", unit: "downloads" },
  { label: "Test coverage", value: "95%", unit: "automated" },
];

export const principles = [
  {
    title: "Architecture first",
    body: "Shared Node.js services that power both the Next.js web app and the React Native app, built on Clean Architecture, SOLID and modular, domain-driven boundaries.",
    proof: "4 full-stack products on shared services",
  },
  {
    title: "Quality by default",
    body: "Testing is part of the definition of done. Jest and Detox suites catch regressions before users do, so teams can ship without fear.",
    proof: "95% automated test coverage",
  },
  {
    title: "Ship continuously",
    body: "Automated build, test and release pipelines on Bitrise and GitHub Actions, with Datadog watching production.",
    proof: "50% faster releases, 30% fewer defects",
  },
  {
    title: "Grow the team",
    body: "Code reviews, pair programming and architecture discussions that raise the bar for the whole team, not just my own pull requests.",
    proof: "Team of the Quarter, 2025",
  },
];

export const experiences = [
  {
    id: 0,
    role: "Lead Engineer, Next.js & React Native",
    company: "Bacancy Technology",
    location: "Ahmedabad",
    date: "2022 - Now",
    highlights: [
      "Led architecture and delivery of **4 production full-stack apps** on shared Node.js services across healthcare, AI, DeFi and social.",
      "Built Bitrise CI/CD that cut release cycles by **50%** and production defects by **30%**.",
      "Raised automated test coverage to **95%** with Jest and Detox.",
      "Shipped AI features: real-time AI content detection, multi-provider email summarization and task automation.",
      "Mentored engineers through reviews, pairing and architecture sessions.",
    ],
  },
  {
    id: 1,
    role: "Software Engineer, React & React Native",
    company: "ByPeople Technologies",
    location: "Ahmedabad",
    date: "2019 - 2022",
    highlights: [
      "Designed and delivered **5+ cross-platform apps** with React and React Native, including production healthcare apps.",
      "Built secure auth and integrations with OAuth 2.0, JWT and REST APIs.",
      "Introduced Clean Architecture and Git-based code reviews, improving maintainability and **reducing crash rates**.",
    ],
  },
];

export const awards = [
  { title: "Team of the Quarter", date: "2025" },
  { title: "Spot Award: Going the Extra Mile", date: "Feb 2025" },
  { title: "Spot Award: Outstanding Delivery", date: "Dec 2024" },
  { title: "Spot Award: AVR Base Contribution", date: "Aug 2023" },
];

export const toolbox = [
  {
    title: "Mobile & Web",
    items: ["React Native (CLI + Expo)", "Next.js, React.js", "TypeScript, JavaScript, Swift", "Redux Toolkit, Zustand", "TanStack Query", "React Navigation"],
  },
  {
    title: "Backend & AI",
    items: ["Node.js, Express.js", "GraphQL (Apollo), REST", "WebSockets, Socket.IO", "JWT, OAuth 2.0, Redis", "LLM integrations", "Perplexity AI"],
  },
  {
    title: "Quality & Architecture",
    items: ["Jest, Detox, TDD", "Clean Architecture, SOLID", "MVVM, MVC", "Domain-Driven Design", "Modular design"],
  },
  {
    title: "Delivery & Cloud",
    items: ["Bitrise, GitHub Actions", "AWS, Azure, Docker", "Datadog monitoring", "Firebase (Auth, FCM, Links)", "App Store & Play Store releases"],
  },
];

export const projects = [
  {
    id: 7,
    slug: "commas",
    featured: true,
    title: "Commas",
    tagline: "The money app for people who earn online.",
    domain: "Fintech · Creator economy",
    platform: "Android",
    scope: "Mobile app engineering",
    color: "#3B82F6",
    problem:
      "Creators, coaches and small teams sell online but juggle separate tools for payments, payouts and customers. Commas (formerly FanBasis) puts the whole business in one app, and its latest release is a complete redesign built for speed and clarity.",
    metrics: [
      { value: "Real-time", label: "revenue, orders + customers" },
      { value: "Instant", label: "withdrawals from the wallet" },
    ],
    approachLabel: "What shipped",
    approach: [
      { title: "Business setup in minutes", body: "Onboarding that takes a new creator or team from sign-up to a live business quickly." },
      { title: "Live revenue dashboard", body: "Revenue, transactions, average order value and new customers, updating as sales happen." },
      { title: "Wallet and payouts", body: "Total balance split into pending and available funds, early withdrawal and a searchable activity history." },
      { title: "Customer insights", body: "Total spend and purchase history for every buyer, so sellers know their best customers." },
    ],
    outcome:
      "A full redesign shipped to Google Play: faster navigation, smoother performance and a rebuilt wallet, payments and customer management, with a new Studios feature since.",
    stack: [],
    screenshots: ["/work/commas-1.png", "/work/commas-2.png", "/work/commas-3.png", "/work/commas-4.png"],
    screenshotStyle: "store",
    screenshotCredit: "Google Play listing",
    playstore: "https://play.google.com/store/apps/details?id=com.tiburondata.fanbasisapp",
  },
  {
    id: 0,
    slug: "pocket-rehab",
    featured: true,
    title: "Pocket Rehab",
    tagline: "24/7 support for people recovering from addiction and depression.",
    domain: "Healthcare · Mental health",
    platform: "iOS & Android",
    scope: "React Native app, real-time chat, Firebase integration",
    color: "#E5531A",
    screen: "recovery",
    problem:
      "Recovery from drug or alcohol addiction and depression doesn't keep office hours. People need support the moment a craving or a dark thought hits, often anonymously, and often on low-end phones with patchy connectivity.",
    metrics: [
      { value: "140K+", label: "downloads" },
      { value: "-40%", label: "failed progress syncs" },
    ],
    approach: [
      { title: "Always-on support", body: "Real-time private chats, community discussions and connections with recovery companions, available 24/7." },
      { title: "Anonymous by design", body: "Anonymous interactions so people can reach out for help without exposing who they are." },
      { title: "Offline-first progress", body: "A Redux-based offline-first layer saves recovery progress on the device and syncs it resiliently, cutting failed syncs by 40%." },
      { title: "Built for any phone", body: "Performance work for low-end Android devices, plus Firebase auth, push notifications and deep linking to support growth to 140K+ downloads." },
    ],
    outcome:
      "Pocket Rehab grew to 140K+ downloads as a 24/7 support space for people in recovery, and failed progress syncs dropped by 40%.",
    stack: ["React Native", "Redux", "Firebase", "Node.js", "MongoDB", "REST APIs"],
    screenshots: [],
  },
  {
    id: 1,
    slug: "warpspeed",
    featured: true,
    title: "WarpSpeed",
    tagline: "An AI productivity app for email, calendar, tasks and chat.",
    domain: "AI · Productivity",
    platform: "Web, iOS & Android",
    scope: "Architecture, Node.js services, Next.js web, React Native app",
    color: "#5B5BD6",
    screen: "inbox",
    problem:
      "People split their day across three inboxes, a calendar, a task app and a chat tool. WarpSpeed brings them into one place and uses AI to decide what matters.",
    metrics: [
      { value: "3", label: "email providers unified" },
      { value: "1", label: "backend for web + mobile" },
    ],
    approach: [
      { title: "One inbox, three providers", body: "Unified Apple Mail, Gmail and Outlook, with LLM-powered summaries via Perplexity for smart triage and suggested replies." },
      { title: "Real-time chat", body: "Engineered 1:1 and group conversations over WebSockets on a modular Node.js backend." },
      { title: "One backend, two clients", body: "Architected shared services behind both the Next.js web app and the React Native app, so features ship to every platform together." },
      { title: "AI-driven scheduling", body: "Integrated calendar and task automation that helps users decide when to do what." },
    ],
    outcome:
      "A single cross-platform product that replaces several tools, with new features shipping to web and mobile together from one backend.",
    stack: ["Next.js", "React Native", "TypeScript", "Node.js", "WebSockets", "Perplexity AI"],
    screenshots: ["/work/warpspeed-1.png", "/work/warpspeed-2.png", "/work/warpspeed-3.png", "/work/warpspeed-4.png"],
    screenshotStyle: "store",
    screenshotCredit: "Google Play listing",
    playstore: "https://play.google.com/store/apps/details?id=com.iamwarpspeed.ai",
  },
  {
    id: 2,
    slug: "sociall",
    featured: true,
    title: "Sociall",
    tagline: "All your social platforms in one hub, with an AI Reality Check.",
    domain: "Social · AI",
    platform: "Android",
    scope: "React Native client architecture, AI feature, integrations",
    color: "#D6409F",
    screen: "feed",
    problem:
      "People juggle half a dozen social apps, and AI-generated content makes it hard to know what's real. Sociall brings the platforms into one curated, ad-free hub and lets users check any post in a tap.",
    metrics: [
      { value: "10K+", label: "Google Play downloads" },
      { value: "4.2★", label: "rating from 554 reviews" },
    ],
    approach: [
      { title: "Reality Check", body: "Built the AI-powered Reality Check feature: users tap any post, text or image to detect AI-generated content in real time." },
      { title: "Lifecycle messaging", body: "Integrated the Customer.io SDK with custom in-app messaging and automatic light/dark theming." },
      { title: "Modular client", body: "Architected the React Native app with clean separation between authentication, feed and messaging." },
    ],
    outcome:
      "Sociall is live on Google Play with 10K+ downloads and a 4.2★ rating, and Reality Check gives users a one-tap way to tell what's real.",
    stack: ["React Native", "Node.js", "Customer.io", "Liquid"],
    screenshots: ["/work/sociall-1.jpg", "/work/sociall-2.jpg", "/work/sociall-3.png", "/work/sociall-4.png"],
    screenshotStyle: "store",
    screenshotCredit: "Google Play listing",
    playstore: "https://play.google.com/store/apps/details?id=com.sociall.sociallapp",
  },
  {
    id: 3,
    slug: "ackumen",
    featured: true,
    title: "Ackumen",
    tagline: "Buckman's platform app for industrial teams.",
    domain: "Enterprise · B2B",
    platform: "Android",
    scope: "React Native app, GraphQL integration, CI/CD and monitoring",
    color: "#12A594",
    screen: "monitor",
    problem:
      "Buckman's Ackumen platform turns sensor data, chemistry and expert analysis into insights that industrial teams act on. The mobile app has to deliver that reliably, wherever the team is.",
    metrics: [
      { value: "4.8★", label: "Google Play rating" },
      { value: "Automated", label: "releases + monitoring" },
    ],
    approach: [
      { title: "GraphQL data layer", body: "Built an Apollo Client integration for product discovery, supplier management and procurement workflows." },
      { title: "Automated delivery", body: "Designed Bitrise CI/CD pipelines for repeatable, automated releases." },
      { title: "Production visibility", body: "Integrated Datadog for error tracking, performance monitoring and alerting." },
      { title: "Maintainable structure", body: "Organised the app with MVVM so it stays testable and easy to evolve." },
    ],
    outcome:
      "A 4.8★-rated enterprise app, backed by automated releases and live production monitoring.",
    stack: ["React Native", "Node.js", "GraphQL", "Apollo", "Bitrise", "Datadog"],
    screenshots: ["/work/ackumen-4.png", "/work/ackumen-2.png", "/work/ackumen-3.png", "/work/ackumen-1.png"],
    screenshotStyle: "raw",
    screenshotCredit: "Google Play listing",
    playstore: "https://play.google.com/store/apps/details?id=com.buckman.onsiteproteam",
  },
  {
    id: 4,
    slug: "pillar-wallet",
    title: "Pillar Wallet",
    tagline: "Multi-chain DeFi wallet for 10k+ users, with 30% faster transactions.",
    domain: "Fintech",
    platform: "iOS & Android",
    scope: "Led mobile development",
    color: "#3E63DD",
    date: "2023",
    problem: "A crypto wallet that spans multiple chains has to be both secure and fast.",
    metrics: [
      { value: "10k+", label: "users" },
      { value: "30%", label: "faster transactions" },
    ],
    approach: [
      { title: "Multi-chain wallet", body: "Led development of a crypto wallet supporting 10k+ users across multiple chains." },
      { title: "Security and speed", body: "Implemented secure authentication and optimized transaction speed by 30%." },
      { title: "Reliable delivery", body: "Shipped through Bitrise CI/CD on Azure cloud services." },
    ],
    stack: ["React Native", "TypeScript", "OAuth", "Firebase Auth", "Bitrise", "Azure"],
  },
  {
    id: 5,
    slug: "avr-base",
    title: "AVR Base",
    tagline: "Cyclist community with real-time chat: 35% more engagement.",
    domain: "Social",
    platform: "iOS & Android",
    scope: "Real-time chat, backend optimization",
    color: "#0090FF",
    date: "2024",
    problem: "A cycling community needs real-time conversation and fast data.",
    metrics: [
      { value: "+35%", label: "user engagement" },
      { value: "45%", label: "faster data fetching" },
    ],
    approach: [
      { title: "Real-time chat", body: "Developed real-time chat with React Native, Redux and WebSockets." },
      { title: "Faster data", body: "Optimized the backend architecture for 45% faster data fetching and 35% higher engagement." },
    ],
    stack: ["React Native", "Redux", "Node.js", "Redis", "TanStack Query", "WebSockets"],
  },
  {
    id: 6,
    slug: "binged",
    title: "Binged",
    tagline: "Find what to watch across 40+ streaming services.",
    domain: "Entertainment",
    platform: "Mobile",
    scope: "Mobile app development",
    color: "#E5484D",
    date: "2024",
    problem: "Viewers in India juggle 40+ streaming services with no single place to decide what to watch, or where.",
    metrics: [
      { value: "40+", label: "services aggregated" },
    ],
    approach: [
      { title: "Unified discovery", body: "Content discovery across 40+ streaming services for Indian viewers." },
      { title: "Decision tools", body: "Rating system, content filters, streaming calendar and multilingual reviews." },
    ],
    stack: ["React Native", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

// Real quotes only, e.g. from LinkedIn recommendations. The section stays hidden while empty.
// { quote: "...", name: "Full Name", title: "Engineering Manager, Company" }
export const testimonials = [];

export const brands = ["Commas", "Buckman", "Pocket Rehab", "WarpSpeed", "Sociall", "Pillar", "AVR Base", "Binged"];
