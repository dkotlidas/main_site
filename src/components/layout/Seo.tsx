import { Head } from "vite-react-ssg";
import { site } from "@/content/site";

type SeoProps = {
  // Page title without the site suffix. Omit on the home page.
  title?: string;
  description?: string;
  // Path starting with "/", used for canonical and og:url.
  path: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
};

const Seo = ({ title, description = site.seo.defaultDescription, path, noindex, jsonLd }: SeoProps) => {
  const fullTitle = title ? `${title}${site.seo.titleSuffix}` : site.seo.defaultTitle;
  const url = `${site.url}${path === "/" ? "/" : path}`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,follow" />}

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Head>
  );
};

export default Seo;
