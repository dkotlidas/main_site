import type { ReactNode } from "react";
import Seo from "@/components/layout/Seo";
import Section from "@/components/layout/Section";
import type { LegalPage } from "@/content/legal";

const LegalPageView = ({ page, path, children }: { page: LegalPage; path: string; children?: ReactNode }) => (
  <>
    <Seo title={page.title} description={page.description} path={path} />
    <Section className="pt-10 md:pt-16" innerClassName="max-w-3xl">
      <h1 className="text-4xl md:text-5xl">{page.title}</h1>
      <p className="mt-4 text-[15px] text-muted-foreground">Last updated: {page.updated}</p>
      <div className="mt-10 space-y-10">
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl">{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="mt-3 text-muted-foreground">
                {p}
              </p>
            ))}
            {section.list && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-muted-foreground">
                {section.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      {children}
    </Section>
  </>
);

export default LegalPageView;
