import { Button } from "@/components/ui/button";
import type { NextWebinar } from "@/content/webinars";
import { webinarPage } from "@/content/webinars";
import { track } from "@/lib/track";

type LumaEmbedProps = {
  event: NextWebinar;
  location: string;
  // Show the embedded Luma form when an event id is set (only on /webinar)
  embed?: boolean;
};

const LumaEmbed = ({ event, location, embed = false }: LumaEmbedProps) => (
  <div>
    {embed && event.lumaEventId && (
      <iframe
        src={`https://lu.ma/embed/event/${event.lumaEventId}/simple`}
        title="Webinar registration"
        className="mb-4 h-[450px] w-full rounded-xl border"
        loading="lazy"
        allow="fullscreen; payment"
      />
    )}
    <Button asChild size="lg" className="h-12 px-6 text-base">
      <a
        href={event.lumaUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("webinar_register_click", { location })}
      >
        {webinarPage.registerLabel}
      </a>
    </Button>
  </div>
);

export default LumaEmbed;
