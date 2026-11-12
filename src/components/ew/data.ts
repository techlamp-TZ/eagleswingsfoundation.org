// Eagle's Wings Foundation Tanzania: homepage, header and footer content.
// Wording, programs, figures and contact details come from the Foundation's
// own website. Photos are the Foundation's own, served from /public/photos.
// No figure appears here that the Foundation has not published.

import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  BookOpen,
  CircleHelp,
  Compass,
  Eye,
  Gem,
  GraduationCap,
  HandHeart,
  Handshake,
  Heart,
  HeartHandshake,
  Image,
  Info,
  Mail,
  Newspaper,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Users,
  UsersRound,
} from "lucide-react";

// Inner pages live in this site (src/app/[...slug]), so links are relative.
export const LIVE = "";

// Lightweight imports so the homepage stays in sync with the rest of the site:
// news cards + article count come from the blog generator, and the volunteer
// role count comes from the real role list.
import { photos } from "@/legacy/data/photos.js";
import { articleCount, homeNews } from "@/legacy/data/generated/home-news.generated.js";
import { volunteerRoles } from "@/legacy/data/volunteerRoles.js";


export const site = {
  name: "Eagle's Wings Foundation Tanzania",
  shortName: "Eagle's Wings",
  location: "Tegeta, Dar es Salaam",
  phone: "+255 749 044 723",
  phoneHref: "tel:+255749044723",
  whatsapp: "https://wa.me/255749044723",
  instagram: "https://instagram.com/eaglewings.tz",
  instagramHandle: "@eaglewings.tz",
  email: "info@eagleswingsfoundation.org",
  linkedin: "#",
  facebook: "#",
  youtube: "#",
};

export type NavLeaf = { label: string; href: string };
export type MegaColumn = { title: string; href: string; icon: LucideIcon; description?: string; children: NavLeaf[] };
export type MegaMenu = {
  label: string;
  href: string;
  columns: MegaColumn[];
  featured?: { title: string; description: string; href: string; cta: string };
};

export const megaMenus: MegaMenu[] = [
  {
    label: "About",
    href: "/about",
    columns: [
      {
        title: "Who we are",
        href: "/about",
        icon: Info,
        description: "Founded in 2025 in Tegeta, Dar es Salaam.",
        children: [
          { label: "Our story", href: "/about" },
          { label: "Leadership", href: "/about" },
          { label: "Our impact", href: "/impact" },
        ],
      },
      {
        title: "What guides us",
        href: "/about#mission",
        icon: Target,
        description: "Empower, encourage and educate.",
        children: [
          { label: "Mission, vision & promise", href: "/about#mission" },
          { label: "Pillars of inclusion", href: "/about#pillars" },
          { label: "How we earn trust", href: "/about#commitments" },
        ],
      },
      {
        title: "Get in touch",
        href: "/contact",
        icon: Mail,
        description: "Call, message or visit us in Tegeta.",
        children: [
          { label: "Contact us", href: "/contact" },
          { label: "Frequently asked questions", href: "/faq" },
          { label: "Privacy", href: "/privacy" },
        ],
      },
    ],
    featured: {
      title: "Not sure where to start?",
      description: "Tell us your situation and we will point you to the right support.",
      href: "/get-started",
      cta: "Find support",
    },
  },
  {
    label: "Programs",
    href: "/programs",
    columns: [
      {
        title: "Neuro-diversity Awareness",
        href: "/programs/program-neurodiversity",
        icon: Eye,
        description: "Understanding autism, ADHD, Down syndrome and intellectual disability.",
        children: [],
      },
      {
        title: "Elderly Care Support",
        href: "/programs/program-elderly-care",
        icon: HeartHandshake,
        description: "Nutrition, movement and mental stimulation for older people.",
        children: [],
      },
      {
        title: "Education & Therapy Guidance",
        href: "/programs/program-education-therapy",
        icon: GraduationCap,
        description: "Therapy exercises and specialized parenting for families.",
        children: [],
      },
      {
        title: "Life Skills Programs",
        href: "/programs/program-life-skills",
        icon: Sparkles,
        description: "Structured support for young people with autism aged 12 and above.",
        children: [],
      },
      {
        title: "Caregiver Training",
        href: "/programs/program-caregiver-training",
        icon: Users,
        description: "Knowledge and confidence for family and professional caregivers.",
        children: [],
      },
      {
        title: "All programs",
        href: "/programs",
        icon: Compass,
        description: "Five connected areas of work, side by side.",
        children: [],
      },
    ],
    featured: {
      title: "Find the right program",
      description: "Start with your situation and we will suggest where to begin.",
      href: "/get-started",
      cta: "Find support",
    },
  },
  {
    label: "Get Involved",
    href: "/get-involved",
    columns: [
      {
        title: "Volunteer",
        href: "/get-involved",
        icon: HandHeart,
        description: "Eight roles, from outreach to professional expertise.",
        children: [
          { label: "Volunteer roles", href: "/get-involved#roles" },
          { label: "Apply to volunteer", href: "/get-involved#volunteer" },
          { label: "Meet the roles", href: "/volunteers" },
        ],
      },
      {
        title: "Donate",
        href: "/donate",
        icon: Heart,
        description: "Support children, older people and families.",
        children: [{ label: "Ways to give", href: "/donate" }],
      },
      {
        title: "Partner with us",
        href: "/contact",
        icon: Handshake,
        description: "For schools, clinics and organisations.",
        children: [
          { label: "Talk to us", href: "/contact" },
          { label: "Careers", href: "/careers" },
        ],
      },
    ],
    featured: {
      title: "Your time and skills can make a difference.",
      description: "Volunteer alongside our team in Tegeta.",
      href: "/get-involved",
      cta: "Volunteer with us",
    },
  },
  {
    label: "Resources",
    href: "/blog",
    columns: [
      {
        title: "News & stories",
        href: "/blog",
        icon: Newspaper,
        description: "61 plain-language guidance articles.",
        children: [
          { label: "Latest articles", href: "/blog" },
          { label: "Caregiving", href: "/blog?category=Caregiving" },
          { label: "Life skills", href: "/blog?category=Life+skills" },
        ],
      },
      {
        title: "Gallery",
        href: "/gallery",
        icon: Image,
        description: "Photos and short clips from our activities.",
        children: [],
      },
      {
        title: "Equipment catalogue",
        href: "/catalogue",
        icon: ShoppingBag,
        description: "Therapy and sensory equipment from OneStop Therapeutics.",
        children: [],
      },
      {
        title: "FAQ",
        href: "/faq",
        icon: CircleHelp,
        description: "Clear answers about the Foundation.",
        children: [],
      },
    ],
  },
];

export const topLinks: NavLeaf[] = [
  { label: "Find Support", href: "/get-started" },
  { label: "Contact", href: "/contact" },
];

export type HeroSlide = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  position?: string;
  cta: NavLeaf;
  secondary?: NavLeaf;
};

// Every photo is the Foundation's own; alt text states only what is visible.
// The mission slide leads: it becomes the page's h1 and the first impression.
export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Eagle's Wings Foundation Tanzania",
    title: "Every person deserves a place to belong.",
    text: "A community foundation supporting people with disabilities and their families in Tegeta, Dar es Salaam.",
    image: "/photos/hero.webp",
    alt: "Foundation staff, young people and visitors gathered in the classroom",
    position: "center 30%",
    cta: { label: "Find support", href: "/get-started" },
    secondary: { label: "Our programs", href: "#programs" },
  },
  {
    eyebrow: "Our team",
    title: "Dedicated people behind every program.",
    text: "A team of caregivers, educators and volunteers working together to deliver real support in Tegeta.",
    image: "/photos/team/team-waving.webp",
    alt: "The Eagle's Wings Foundation team waving and celebrating together",
    position: "center 35%",
    cta: { label: "Meet the team", href: "/about" },
    secondary: { label: "Volunteer with us", href: "/get-involved" },
  },
  {
    eyebrow: "Life skills",
    title: "Practical learning, one step at a time.",
    text: "Structured life-skills support for children with autism, particularly young people aged 12 and above.",
    image: "/photos/foundation/pool-group.webp",
    alt: "Young people swimming in the pool during a group session",
    position: "center 50%",
    cta: { label: "Life skills programs", href: "/programs/program-life-skills" },
  },
  {
    eyebrow: "Families & caregivers",
    title: "Support for the people who care.",
    text: "Helping caregivers build the knowledge and confidence to support children and older people consistently.",
    image: "/photos/child.webp",
    alt: "A Foundation staff member and a young girl smiling together",
    position: "center 55%",
    cta: { label: "Caregiver training", href: "/programs/program-caregiver-training" },
  },
  {
    eyebrow: "Inclusion",
    title: "Dignity and care for every individual.",
    text: "We provide mobility support, personal assistance and a welcoming environment where everyone is valued.",
    image: "/photos/hero-wheelchair.webp",
    alt: "A staff member assisting a person in a wheelchair",
    position: "center 40%",
    cta: { label: "About us", href: "/about" },
    secondary: { label: "Get involved", href: "/get-involved" },
  },
  {
    eyebrow: "Community",
    title: "Beyond the classroom, into the world.",
    text: "Outings, gatherings and shared experiences that build confidence and friendships outside the centre.",
    image: "/photos/foundation/beach-outing.webp",
    alt: "Staff and young people enjoying a day out at the beach",
    position: "center 45%",
    cta: { label: "Our programs", href: "#programs" },
    secondary: { label: "Gallery", href: "/gallery" },
  },
  {
    eyebrow: "Get involved",
    title: "Your time and skills can make a difference.",
    text: "Volunteer alongside our team to support learning, wellbeing and stronger communities in Tegeta.",
    image: "/photos/gallery-extra-1.webp",
    alt: "Young people on a swing set in the play area",
    position: "center 40%",
    cta: { label: "Volunteer with us", href: "/get-involved" },
    secondary: { label: "Donate", href: "/donate" },
  },
];

// Stats are derived below, after the programs list and role list they count,
// so the numbers never drift from the site's own content.


export type Program = { icon: LucideIcon; title: string; text: string; audience: string; href: string; image: string; imageAlt: string };

export const programs: Program[] = [
  {
    icon: Eye,
    title: "Neuro-diversity Awareness",
    text: "Building understanding around Autism, ADHD, Down syndrome and intellectual disability through respectful, practical community education.",
    audience: "Families, caregivers, schools & communities",
    href: "/programs/program-neurodiversity",
    image: "/photos/classroom-teaching.webp",
    imageAlt: "A teacher at the whiteboard during a session at Eagle's Wings",
  },
  {
    icon: HeartHandshake,
    title: "Elderly Care Support",
    text: "Practical guidance around nutrition, movement and mental stimulation for older people and the families who support them.",
    audience: "Older people, families & caregivers",
    href: "/programs/program-elderly-care",
    image: "/photos/care.webp",
    imageAlt: "A young person and child at the pool during a care session",
  },
  {
    icon: GraduationCap,
    title: "Education & Therapy Guidance",
    text: "Practical education on neurological conditions, therapy exercises and specialized parenting for families and caregivers.",
    audience: "Parents, families & caregivers",
    href: "/programs/program-education-therapy",
    image: "/photos/learning-drawing.webp",
    imageAlt: "Two children drawing together with crayons",
  },
  {
    icon: Sparkles,
    title: "Life Skills Programs",
    text: "Structured life-skills support for children with autism, particularly young people aged 12 and above.",
    audience: "Autistic young people, families & caregivers",
    href: "/programs/program-life-skills",
    image: "/photos/life-mopping.webp",
    imageAlt: "A young person practising mopping as part of life skills training",
  },
  {
    icon: Users,
    title: "Caregiver Training",
    text: "Helping caregivers build the knowledge and confidence to support children and older people professionally and consistently.",
    audience: "Family, volunteer & professional caregivers",
    href: "/programs/program-caregiver-training",
    image: "/photos/hydrotherapy-pool.webp",
    imageAlt: "A staff member supporting a child in the hydrotherapy pool",
  },
];

// Counts come from the site's own content: programs list, real volunteer roles,
// and the blog article count emitted by scripts/gen-blog.mjs.
export const stats = [
  { value: "2025", label: "Founded in Tegeta, Dar es Salaam" },
  { value: String(programs.length), label: "Program areas" },
  { value: String(Object.keys(volunteerRoles as Record<string, unknown>).length), label: "Volunteer roles" },
  { value: String(articleCount), label: "Guidance articles" },
];


export const values: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Gem, title: "Dignity", text: "People deserve support that respects identity, choice and potential." },
  { icon: UsersRound, title: "Inclusion", text: "Support works best when families, caregivers and communities are included." },
  { icon: BarChart3, title: "Empowerment", text: "We build independence, skills and confidence through practical learning." },
  { icon: BookOpen, title: "Early support", text: "We offer timely guidance, learning and care." },
  { icon: ShieldCheck, title: "Consent & safeguarding", text: "We listen, respect choices and keep people safe." },
  { icon: Settings, title: "Accountability", text: "We aim to be transparent, responsible and committed to learning and improvement." },
];

// Homepage news cards: the three newest articles from the blog engine
// (scripts/gen-blog.mjs emits home-news.generated.js on every build), so the
// homepage never goes stale. Images may be a photos.js key or a /path.
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

function formatDate(iso: string): string {
  const d = new Date(`${iso}T00:00:00Z`);
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

function resolvePhoto(value: string): string {
  if (!value) return photos.child;
  return value.startsWith("/") ? value : (photos as Record<string, string>)[value] ?? photos.child;
}

export const articles = (homeNews as { title: string; excerpt: string; date: string; category: string; image: string; slug: string }[]).map(
  (a) => ({
    category: a.category,
    date: formatDate(a.date),
    title: a.title,
    excerpt: a.excerpt,
    image: resolvePhoto(a.image),
    href: `/blog/article-${a.slug}`,
  }),
);

export { articleCount };

export const footerNav = {
  programs: [
    { label: "Neuro-diversity Awareness", href: "/programs/program-neurodiversity" },
    { label: "Elderly Care Support", href: "/programs/program-elderly-care" },
    { label: "Education & Therapy", href: "/programs/program-education-therapy" },
    { label: "Life Skills", href: "/programs/program-life-skills" },
    { label: "Caregiver Training", href: "/programs/program-caregiver-training" },
  ],
  about: [
    { label: "About us", href: "/about" },
    { label: "Mission & values", href: "/about#mission" },
    { label: "Our impact", href: "/impact" },
    { label: "Find support", href: "/get-started" },
    { label: "Contact", href: "/contact" },
  ],
  getInvolved: [
    { label: "Volunteer", href: "/get-involved" },
    { label: "Volunteer roles", href: "/volunteers" },
    { label: "Donate", href: "/donate" },
    { label: "Careers", href: "/careers" },
  ],
  resources: [
    { label: "News & stories", href: "/blog" },
    { label: "Gallery", href: "/gallery" },
    { label: "Equipment catalogue", href: "/catalogue" },
    { label: "FAQ", href: "/faq" },
    { label: "Privacy", href: "/privacy" },
  ],
};
