import type { Metadata } from "next";
import LegacyClient from "./LegacyClient";
import { routeMeta } from "@/legacy/data/nav.js";
import { programDetails } from "@/legacy/data/programDetails.js";
import { volunteerRoles } from "@/legacy/data/volunteerRoles.js";
import { articles } from "@/legacy/data/blog.js";

export function generateStaticParams() {
  const pages = Object.keys(routeMeta as Record<string, string>).map((s) => ({ slug: [s] }));
  const programs = Object.keys(programDetails as Record<string, unknown>).map((id) => ({ slug: ["programs", id] }));
  const volunteers = Object.keys(volunteerRoles as Record<string, unknown>).map((id) => ({ slug: ["volunteers", id] }));
  const blog = Object.keys(articles as Record<string, unknown>).map((id) => ({ slug: ["blog", `article-${id}`] }));
  return [...pages, ...programs, ...volunteers, ...blog];
}

const SITE = "Eagle's Wings Foundation Tanzania";

type Params = { slug: string[] };

// Title (and, for articles and programs, description) for each address,
// worked out on the server so the browser tab and search results are right.
function titleFor(slug: string[]): { title: string; description?: string } | null {
  const [section, id] = slug;
  if (section === "programs" && id) {
    const p = (programDetails as Record<string, { title: string; intro: string }>)[id];
    return p ? { title: p.title, description: p.intro } : null;
  }
  if (section === "volunteers" && id) {
    const r = (volunteerRoles as Record<string, { title: string; intro: string }>)[id];
    return r ? { title: `${r.title} volunteer`, description: r.intro } : null;
  }
  if (section === "blog" && id) {
    const a = (articles as Record<string, { title: string; excerpt: string }>)[id.replace(/^article-/, "")];
    return a ? { title: a.title, description: a.excerpt } : null;
  }
  const name = (routeMeta as Record<string, string>)[section];
  return name && slug.length === 1 ? { title: name } : null;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const page = titleFor(slug);
  if (!page) return { title: { absolute: `Page not found | ${SITE}` } };
  return {
    title: { absolute: `${page.title} | ${SITE}` },
    ...(page.description ? { description: page.description } : {}),
    alternates: { canonical: `/${slug.join("/")}` },
  };
}

// Every address other than "/" (About, Programs, the blog and its articles,
// Gallery, Catalogue, FAQ, Contact and the rest) is handled by the page
// router inside LegacyClient, including its own "page not found" screen.
export default function InnerPage() {
  return <LegacyClient />;
}
