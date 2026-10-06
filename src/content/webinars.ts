// Typed access to webinars.json. Dimitris edits only the JSON file
// (BRIEF §13: next webinar date changes in one file).

import data from "./webinars.json";

export type NextWebinar = {
  startsAt: string;
  durationMinutes: number;
  lumaUrl: string;
  // Optional: Luma event id (evt-...) to show the embedded registration form
  lumaEventId?: string;
};

export type PastWebinar = {
  title: string;
  date: string;
  youtubeId: string;
};

export const webinar = {
  title: data.title,
  outcomes: data.outcomes,
  agenda: data.agenda,
  past: data.past as PastWebinar[],
};

// Returns the next webinar, or null when no date is set or, when `now` is
// given, the webinar has already ended.
export function getNextWebinar(now?: Date): NextWebinar | null {
  const next = data.next as NextWebinar | null;
  if (!next) return null;
  if (!now) return next;
  const ends = new Date(next.startsAt).getTime() + next.durationMinutes * 60_000;
  return ends > now.getTime() ? next : null;
}

export const webinarPage = {
  description:
    "A free webinar for agency owners on adding white label performance marketing as a new revenue line.",
  noDate: "Next date announced soon.",
  noDateHint: "Follow me on LinkedIn to get the date first, or book a call if you want to talk now.",
  registerLabel: "Register on Luma",
  speakerTitle: "Speaker",
  speakerBio:
    "Performance marketing specialist. I run Meta Ads, Google Ads and tracking for digital agencies under their own brand.",
  agendaTitle: "Agenda: 5 ways",
  outcomesTitle: "What you will leave with",
  pastTitle: "Past recordings",
};
