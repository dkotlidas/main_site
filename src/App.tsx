import type { RouteRecord } from "vite-react-ssg";
import Layout from "@/components/layout/Layout";
import Index from "@/pages/Index";
import { thanksTypes } from "@/content/thanks";
import { caseStudies } from "@/content/case-studies";

const page = (load: () => Promise<{ default: React.ComponentType }>) => async () => ({
  Component: (await load()).default,
});

// Every route listed here is prerendered to static HTML by vite-react-ssg.
// URL changes need a 301 in vercel.json (see docs/redirects.md).
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/components/layout/Layout.tsx",
    children: [
      { index: true, element: <Index /> },
      { path: "book", lazy: page(() => import("@/pages/Book")) },
      { path: "webinar", lazy: page(() => import("@/pages/Webinar")) },
      {
        path: "thanks/:type",
        lazy: page(() => import("@/pages/Thanks")),
        getStaticPaths: () => thanksTypes.map((t) => `thanks/${t}`),
      },
      { path: "case-studies", lazy: page(() => import("@/pages/CaseStudies")) },
      {
        path: "case-studies/:slug",
        lazy: page(() => import("@/pages/CaseStudy")),
        getStaticPaths: () => caseStudies.map((c) => `case-studies/${c.slug}`),
      },
      { path: "about", lazy: page(() => import("@/pages/About")) },
      // Was /privacy-policy; 301 in vercel.json
      { path: "privacy", lazy: page(() => import("@/pages/Privacy")) },
      { path: "cookies", lazy: page(() => import("@/pages/Cookies")) },
      { path: "*", lazy: page(() => import("@/pages/NotFound")) },
    ],
  },
];
