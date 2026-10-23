import {
  HeartHandshake,
  Brain,
  Users,
  Activity,
  Stethoscope,
  Home,
  Briefcase,
  Calendar,
  Sparkles,
  LifeBuoy,
  School,
  ShieldCheck,
  HandHeart,
  Megaphone,
  Gift,
  ScrollText,
  Hammer,
  Building2,
  Network,
  Handshake,
  type LucideIcon,
} from "lucide-react";

export type NavLeaf = { label: string; href: string; desc?: string };
export type NavGroup = {
  label: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  children?: NavLeaf[];
};

export type MegaColumn = {
  title: string;
  href: string;
  icon?: LucideIcon;
  description?: string;
  children: NavLeaf[];
};

export type MegaMenu = {
  label: string;
  href: string;
  columns: MegaColumn[];
  featured?: {
    title: string;
    description: string;
    href: string;
    cta: string;
  };
};

/* ---------------------------------------------------------- */
/* Services mega menu                                          */
/* ---------------------------------------------------------- */
export const servicesMenu: MegaMenu = {
  label: "Services",
  href: "#services",
  columns: [
    {
      title: "Referral Services",
      href: "#referral",
      icon: LifeBuoy,
      description:
        "Resource and Referral Services — the central point of information to assist individuals in finding services that match their needs, wants, hopes, and dreams.",
      children: [
        { label: "Get Started", href: "#referral" },
        { label: "How to Apply?", href: "#referral" },
        { label: "opwdd.ny.gov", href: "https://opwdd.ny.gov" },
        { label: "omh.ny.gov", href: "https://omh.ny.gov" },
        { label: "health.ny.gov", href: "https://www.health.ny.gov" },
      ],
    },
    {
      title: "Intellectual / Developmental Disabilities",
      href: "#idd",
      icon: HeartHandshake,
      description:
        "Supports that empower individuals to live full, self-directed lives in their communities.",
      children: [
        { label: "Housing Opportunities", href: "#idd" },
        { label: "Community Support Services", href: "#idd" },
        { label: "Crisis Services", href: "#crisis" },
        { label: "Day Services", href: "#day" },
        { label: "Employment Services", href: "#employment" },
        { label: "Self-Direction", href: "#self-direction" },
      ],
    },
    {
      title: "Behavioral Health",
      href: "#behavioral-health",
      icon: Brain,
      description:
        "Recovery-oriented services for individuals living with mental illness.",
      children: [
        { label: "Critical Time Intervention", href: "#behavioral-health" },
        { label: "Behavioral Health Children's Services", href: "#behavioral-health" },
        { label: "Mental Health Day Programs", href: "#behavioral-health" },
        { label: "Employment", href: "#employment" },
        { label: "Mental Health Clinic (Ages 6+)", href: "#clinic" },
        { label: "Crisis Services – Hospital Diversion", href: "#crisis" },
        { label: "Residential Services", href: "#behavioral-health" },
      ],
    },
    {
      title: "Traumatic Brain Injury (TBI)",
      href: "#tbi",
      icon: Activity,
      description:
        "A full continuum of waiver services designed around each individual's recovery.",
      children: [
        { label: "Medicaid Waiver Program (TBI)", href: "#tbi" },
        { label: "Service Coordination (SC)", href: "#tbi" },
        { label: "Independent Living Skills Training (ILST)", href: "#tbi" },
        { label: "Community Integration Counseling (CIC)", href: "#tbi" },
        { label: "Positive Behavioral Intervention & Support (PBIS)", href: "#tbi" },
        { label: "Structured Day Program (SDP)", href: "#tbi" },
        { label: "Nursing Home Transition & Diversion", href: "#tbi" },
      ],
    },
    {
      title: "Mental Health Clinic",
      href: "#clinic",
      icon: Stethoscope,
      description:
        "Provides Integrated Outpatient Behavioral Health services to individuals in need. A free-standing entity open to the public.",
      children: [
        { label: "Success Community Care Clinic", href: "#clinic" },
        { label: "Ages 6 and Up", href: "#clinic" },
        { label: "Schedule an Appointment", href: "#clinic" },
      ],
    },
  ],
  featured: {
    title: "Not Sure Where to Start?",
    description:
      "Our Resource & Referral team will listen to your needs and match you with the right services across OPWDD, OMH, and DOH.",
    href: "#referral",
    cta: "Get Started",
  },
};

/* ---------------------------------------------------------- */
/* About mega menu                                             */
/* ---------------------------------------------------------- */
export const aboutMenu: MegaMenu = {
  label: "About",
  href: "#about",
  columns: [
    {
      title: "About FREE",
      href: "#about",
      icon: Users,
      description:
        "Mission, values, and the work supporting people of all abilities in their communities every day.",
      children: [
        { label: "Our Story", href: "#about" },
        { label: "Mission & Vision", href: "#mission" },
        { label: "Core Values", href: "#values" },
      ],
    },
    {
      title: "Annual Report",
      href: "#about",
      icon: ScrollText,
      description:
        "A snapshot of the year's milestones, measurable outcomes, and organization-wide impact.",
      children: [
        { label: "Latest Report", href: "#about" },
        { label: "Outcomes & Metrics", href: "#about" },
        { label: "Program Highlights", href: "#about" },
      ],
    },
    {
      title: "Leadership Team",
      href: "#about",
      icon: Briefcase,
      description:
        "The people guiding strategy, operations, and the quality of support across the organization.",
      children: [
        { label: "Executive Leadership", href: "#about" },
        { label: "Senior Directors", href: "#about" },
        { label: "Program Directors", href: "#about" },
      ],
    },
    {
      title: "Board of Directors",
      href: "#about",
      icon: ShieldCheck,
      description:
        "Board stewardship, oversight, and accountability help guide the organization's long-term direction.",
      children: [
        { label: "Board Members", href: "#about" },
        { label: "Committees", href: "#about" },
        { label: "Governance", href: "#about" },
      ],
    },
    {
      title: "Strategic Plan",
      href: "#about",
      icon: Sparkles,
      description:
        "The priorities and long-term goals guiding growth, innovation, and organizational direction.",
      children: [
        { label: "Strategic Pillars", href: "#about" },
        { label: "5-Year Roadmap", href: "#about" },
        { label: "Innovation Initiatives", href: "#about" },
      ],
    },
    {
      title: "Compliance",
      href: "#about",
      icon: ShieldCheck,
      description:
        "Policies, reporting, and safeguards that support accountability, transparency, and ethical practice.",
      children: [
        { label: "Policies & Procedures", href: "#about" },
        { label: "Reporting", href: "#about" },
        { label: "Ethics", href: "#about" },
      ],
    },
  ],
};

/* ---------------------------------------------------------- */
/* Partners mega menu                                          */
/* ---------------------------------------------------------- */
export const partnersMenu: MegaMenu = {
  label: "Partners",
  href: "#partners",
  columns: [
    {
      title: "Corporate Sponsors",
      href: "#partners",
      icon: Building2,
      description:
        "Business partners whose support strengthens programs, expands opportunities, and increases community impact.",
      children: [
        { label: "Become a Corporate Sponsor", href: "#partners" },
        { label: "Sponsorship Tiers", href: "#partners" },
        { label: "Current Sponsors", href: "#partners" },
      ],
    },
    {
      title: "FREE Network",
      href: "#partners",
      icon: Network,
      description:
        "Organizations across the network working together to broaden services, share resources, and strengthen support.",
      children: [
        { label: "Learn More", href: "#partners" },
        { label: "Network Members", href: "#partners" },
        { label: "Affiliated Organizations", href: "#partners" },
      ],
    },
    {
      title: "Community Partners",
      href: "#partners",
      icon: Handshake,
      description:
        "Local partnerships that expand access, build stronger community connections, and deepen our shared impact.",
      children: [
        { label: "See our Partners", href: "#partners" },
        { label: "Partner With Us", href: "#partners" },
        { label: "Community Stories", href: "#partners" },
      ],
    },
  ],
};

/* ---------------------------------------------------------- */
/* Get Involved mega menu                                      */
/* ---------------------------------------------------------- */
export const getInvolvedMenu: MegaMenu = {
  label: "Get Involved",
  href: "#get-involved",
  columns: [
    {
      title: "Get Involved",
      href: "#get-involved",
      icon: HandHeart,
      description:
        "There are so many ways to show up. Support inclusion, raise voices, and stay connected to the work.",
      children: [
        { label: "Volunteer", href: "#get-involved" },
        { label: "Advocacy", href: "#get-involved" },
        { label: "Podcast", href: "#get-involved" },
      ],
    },
    {
      title: "Ways to Give",
      href: "#ways-to-give",
      icon: Gift,
      description:
        "Every gift makes a difference. Find the giving option that feels right for you and the people we serve.",
      children: [
        { label: "Monthly Donations", href: "#ways-to-give" },
        { label: "Memorial & Honor Donations", href: "#ways-to-give" },
        { label: "Planned Giving", href: "#ways-to-give" },
      ],
    },
    {
      title: "Planned Giving",
      href: "#ways-to-give",
      icon: Megaphone,
      description:
        "Leave a legacy that reflects what you believe in and ensures our work lives on for generations.",
      children: [
        { label: "Legacy Society", href: "#ways-to-give" },
        { label: "Bequests", href: "#ways-to-give" },
        { label: "Donor-Advised Funds", href: "#ways-to-give" },
      ],
    },
    {
      title: "Saddle Rock Ranch Volunteer",
      href: "#get-involved",
      icon: Hammer,
      description:
        "Roll up your sleeves. Hands-on projects and service days that strengthen the spaces we all share.",
      children: [
        { label: "Property Clean Up", href: "#get-involved" },
        { label: "Fence Painting", href: "#get-involved" },
        { label: "Basic Carpentry", href: "#get-involved" },
        { label: "Paint & Power Washing Package", href: "#get-involved" },
        { label: "Re-Sealing of Pavement Package", href: "#get-involved" },
        { label: "Painting & Power Washing Package 2", href: "#get-involved" },
      ],
    },
  ],
};

export const topNavLinks: { label: string; href: string }[] = [
  { label: "News", href: "#news" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export const allMegaMenus: MegaMenu[] = [
  servicesMenu,
  aboutMenu,
  partnersMenu,
  getInvolvedMenu,
];

/* ---------------------------------------------------------- */
/* Hero slides                                                 */
/* ---------------------------------------------------------- */
export type HeroSlide = {
  eyebrow: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  image: string;
  overlayFrom: string;
  overlayVia: string;
  overlayTo: string;
};

export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Join Our Team",
    title: "We are hiring passionate people to work with individuals of all abilities!",
    subtitle:
      "Build a career with purpose. FREE is looking for dedicated team members who want to make a tangible difference in people's lives every day.",
    cta: { label: "Career Opportunities", href: "#careers" },
    ctaSecondary: { label: "Learn More", href: "#about" },
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9a881aaf02e9.jpg",
    overlayFrom: "rgba(8, 38, 32, 0.85)",
    overlayVia: "rgba(8, 38, 32, 0.55)",
    overlayTo: "rgba(8, 38, 32, 0.15)",
  },
  {
    eyebrow: "Growth. Independence. Community.",
    title: "Helping individuals of all abilities reach their full potential.",
    subtitle:
      "For more than four decades, FREE has walked alongside individuals and families — building futures rooted in dignity, choice, and belonging.",
    cta: { label: "Developmental Disabilities Services", href: "#idd" },
    ctaSecondary: { label: "About Us", href: "#about" },
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c1659910f36c.jpg",
    overlayFrom: "rgba(10, 45, 35, 0.85)",
    overlayVia: "rgba(10, 45, 35, 0.50)",
    overlayTo: "rgba(10, 45, 35, 0.10)",
  },
  {
    eyebrow: "Providing endless opportunities",
    title: "Creating meaningful, self-directed futures!",
    subtitle:
      "From housing and employment to recovery and family services, FREE surrounds each person with the supports they need to thrive.",
    cta: { label: "Behavioral Health Services", href: "#behavioral-health" },
    ctaSecondary: { label: "View All Services", href: "#services" },
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/aa6eda3cb543.jpg",
    overlayFrom: "rgba(20, 50, 60, 0.85)",
    overlayVia: "rgba(20, 50, 60, 0.50)",
    overlayTo: "rgba(20, 50, 60, 0.10)",
  },
  {
    eyebrow: "Thriving through supportive services",
    title: "Tailored support facilitating recovery and enhancing quality of life.",
    subtitle:
      "Our TBI waiver programs meet people where they are — building skills, restoring independence, and reconnecting them with their community.",
    cta: { label: "Traumatic Brain Injury Services", href: "#tbi" },
    ctaSecondary: { label: "Get Started", href: "#referral" },
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/556a887e0886.jpg",
    overlayFrom: "rgba(15, 42, 50, 0.85)",
    overlayVia: "rgba(15, 42, 50, 0.55)",
    overlayTo: "rgba(15, 42, 50, 0.15)",
  },
  {
    eyebrow: "Success Community Care Clinic",
    title: "Provides Integrated Outpatient Behavioral Health services to individuals in need.",
    subtitle:
      "The Clinic is a free-standing entity open to the public — serving individuals and families ages 6 and up.",
    cta: { label: "Mental Health Clinic (Ages 6+)", href: "#clinic" },
    ctaSecondary: { label: "Schedule a Visit", href: "#contact" },
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0112193107df.jpg",
    overlayFrom: "rgba(18, 40, 45, 0.85)",
    overlayVia: "rgba(18, 40, 45, 0.55)",
    overlayTo: "rgba(18, 40, 45, 0.15)",
  },
];

/* ---------------------------------------------------------- */
/* Programs & Services carousel                               */
/* ---------------------------------------------------------- */
export type ProgramCard = {
  title: string;
  excerpt: string;
  href: string;
  icon: LucideIcon;
  accent: "brand" | "coral" | "gold";
};

export const programCards: ProgramCard[] = [
  {
    title: "Crisis Services",
    excerpt:
      "Around-the-clock supports that respond to behavioral, psychiatric, and developmental crises with compassion and skill.",
    href: "#crisis",
    icon: LifeBuoy,
    accent: "coral",
  },
  {
    title: "NY START Service",
    excerpt:
      "Specialized crisis response and ongoing supports for individuals with intellectual/developmental disabilities and complex behavioral health needs.",
    href: "#services",
    icon: ShieldCheck,
    accent: "brand",
  },
  {
    title: "Employment Services",
    excerpt:
      "Job readiness training, supported employment, and transition-to-work programs that open real career doors.",
    href: "#employment",
    icon: Briefcase,
    accent: "gold",
  },
  {
    title: "Behavioral Health Services",
    excerpt:
      "A full continuum of recovery supports including clinic, day programs, residential, and crisis diversion.",
    href: "#behavioral-health",
    icon: Brain,
    accent: "brand",
  },
  {
    title: "Day Services",
    excerpt:
      "Person-centered programming that fosters skill-building, social connection, and meaningful community engagement.",
    href: "#day",
    icon: Calendar,
    accent: "coral",
  },
  {
    title: "Community & Family Support Services",
    excerpt:
      "Respite, family support, education, and after-school programs that strengthen families and neighborhoods.",
    href: "#services",
    icon: Home,
    accent: "brand",
  },
  {
    title: "TBI Medicaid Waiver Program",
    excerpt:
      "A coordinated set of services designed to support individuals with traumatic brain injury in their home community.",
    href: "#tbi",
    icon: Activity,
    accent: "gold",
  },
  {
    title: "Nursing Home Transition & Diversion Waiver",
    excerpt:
      "Helping individuals transition out of — or avoid — nursing facilities by building community-based supports.",
    href: "#tbi",
    icon: HeartHandshake,
    accent: "coral",
  },
  {
    title: "Self-Direction",
    excerpt:
      "Person-centered budgets and supports that put the individual in the driver's seat of their own life.",
    href: "#self-direction",
    icon: Sparkles,
    accent: "brand",
  },
];

/* ---------------------------------------------------------- */
/* Core Values                                                  */
/* ---------------------------------------------------------- */
export type CoreValue = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const coreValues: CoreValue[] = [
  {
    title: "Integrity",
    description:
      "We expect the conduct of all team members in the FREE network to be rooted in transparency, mutual respect, and civility.",
    icon: ShieldCheck,
  },
  {
    title: "Diversity",
    description:
      "We believe in the dignity and worth of all people. We strive to foster an appreciation of, and respect for, the differences among all of us that enrich the world.",
    icon: Users,
  },
  {
    title: "Responsiveness",
    description:
      "We commit to striving to meet the needs of the people we support, valued team members, and the unmet needs of the community.",
    icon: LifeBuoy,
  },
  {
    title: "Stewardship",
    description:
      "We recognize our responsibility in managing the resources of the FREE network responsibly, effectively, and efficiently.",
    icon: Briefcase,
  },
  {
    title: "Interdependence",
    description:
      "We pledge to promote a collaborative environment driven and enabled by a dedicated team of professionals. WE is more powerful than You or I.",
    icon: Handshake,
  },
  {
    title: "Innovation",
    description:
      "Together, we find creative solutions to take advantage of opportunities to meet challenges while celebrating our collective competence.",
    icon: Sparkles,
  },
  {
    title: "Quality",
    description:
      "We support people to plan, choose, and contribute to their personal outcomes and live a rewarding life based on their individual choices and preferences.",
    icon: HeartHandshake,
  },
];

/* ---------------------------------------------------------- */
/* News articles                                               */
/* ---------------------------------------------------------- */
export type NewsArticle = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  href: string;
  image: string;
};

export const newsArticles: NewsArticle[] = [
  {
    category: "FREE News",
    title: "Back to School, Back to Stress? Supporting Your Child's Mental Health",
    excerpt:
      "A new school year brings excitement — and pressure. Our behavioral health team shares practical strategies families can use to ease the transition and protect kids' emotional wellbeing.",
    date: "September 2026",
    href: "#news",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ff76de480710.jpg",
  },
  {
    category: "FREE News",
    title: "Donor-Advised Funds: Give with Purpose, Plan with Care",
    excerpt:
      "Release Date: October 2026. Donor-advised funds are one of the fastest-growing giving vehicles in the country. Here's how to use yours to make a measurable difference.",
    date: "October 2026",
    href: "#news",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/6bacc14a5ed9.jpg",
  },
  {
    category: "FREE News",
    title: "Cornhole for a Cause Brings Fun, Competition and Community Together",
    excerpt:
      "What happens when you combine friendly competition, a great crowd, and an even greater purpose? A sold-out event that raised critical funds for the people we support.",
    date: "August 2026",
    href: "#news",
    image: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/f5899f2b0a51.jpg",
  },
];

/* ---------------------------------------------------------- */
/* Footer links                                                */
/* ---------------------------------------------------------- */
export const footerNav = {
  services: [
    "Referral Services (OPWDD, OMH, DOH)",
    "Intellectual / Developmental Disabilities",
    "Behavioral Health",
    "Traumatic Brain Injury (TBI)",
    "Mental Health Clinic (Ages 6+)",
  ],
  about: [
    "About FREE",
    "Annual Report",
    "Leadership Team",
    "Board of Directors",
    "Strategic Plan",
    "Compliance",
  ],
  getInvolved: [
    "Volunteer",
    "Advocacy",
    "Podcast",
    "Monthly Donations",
    "Memorial & Honor Donations",
    "Planned Giving",
  ],
  partners: [
    "Corporate Sponsors",
    "FREE Network",
    "Community Partners",
    "Become a Corporate Sponsor",
  ],
};

export const contactInfo = {
  address: "191 Bethpage-Sweet Hollow Road, Old Bethpage, NY 11804",
  phone: "(516) 870-1600",
  phoneAlt: "(631) 273-1300",
  email: "FrontDesk@familyres.org",
};

export const stats = [
  { value: "5,500+", label: "Individuals supported each year" },
  { value: "1977", label: "Serving our communities since" },
  { value: "50+", label: "Programs & service lines" },
  { value: "1,400+", label: "Dedicated team members" },
];
