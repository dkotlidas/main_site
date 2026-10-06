// Typed dataLayer helper (BRIEF §8). GA4 and Meta Pixel read these events
// inside GTM; consent is handled there by CookieYes. Event spec lives in
// docs/tracking-plan.md (step 5).

type TrackEvents = {
  cta_click: { cta_id: string; location: string };
  book_call_view: Record<string, never>;
  call_booked: Record<string, never>;
  webinar_register_click: { location: string };
  webinar_registered: Record<string, never>;
  lead_magnet_view: Record<string, never>;
  lead_magnet_signup: Record<string, never>;
  case_study_view: { slug: string };
  scroll_75: { page_path: string };
  outbound_linkedin: { location: string };
};

export type TrackEventName = keyof TrackEvents;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function track<E extends TrackEventName>(
  event: E,
  ...params: TrackEvents[E] extends Record<string, never> ? [] : [TrackEvents[E]]
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...(params[0] ?? {}) });
}
