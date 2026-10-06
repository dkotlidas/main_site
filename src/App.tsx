import type { RouteRecord } from "vite-react-ssg";
import Layout from "@/components/layout/Layout";
import Index from "@/pages/Index";

// Every route listed here is prerendered to static HTML by vite-react-ssg.
// URL changes need a 301 in vercel.json (see docs/redirects.md).
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    entry: "src/components/layout/Layout.tsx",
    children: [
      { index: true, element: <Index /> },
      {
        path: "book",
        lazy: async () => ({ Component: (await import("@/pages/Book")).default }),
      },
      {
        // Was /privacy-policy; 301 in vercel.json
        path: "privacy",
        lazy: async () => ({ Component: (await import("@/pages/PrivacyPolicy")).default }),
      },
      {
        path: "*",
        lazy: async () => ({ Component: (await import("@/pages/NotFound")).default }),
      },
    ],
  },
];
