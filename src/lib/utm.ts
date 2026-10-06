// Keeps UTM parameters for the whole visit (BRIEF §8). LinkedIn DM links
// carry them; the visitor may land on / and book later on /book.

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"] as const;
const STORAGE_KEY = "dk_utm";

export type Utm = Partial<Record<(typeof KEYS)[number], string>>;

function read(): Utm {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

// Call on every page view. The first visit with UTMs wins for the session.
export function captureUtm(search: string) {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(search);
  const found: Utm = {};
  for (const key of KEYS) {
    const value = params.get(key);
    if (value) found[key] = value.slice(0, 200);
  }
  if (Object.keys(found).length === 0) return;
  try {
    if (Object.keys(read()).length === 0) sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found));
  } catch {
    // Storage blocked: UTMs only apply to this page
  }
}

export function getUtm(): Utm {
  if (typeof window === "undefined") return {};
  return read();
}

// Adds the stored UTMs to a URL (Calendly and Luma accept utm_* parameters).
export function withUtm(url: string): string {
  const utm = getUtm();
  if (Object.keys(utm).length === 0) return url;
  const u = new URL(url);
  for (const [key, value] of Object.entries(utm)) u.searchParams.set(key, value);
  return u.toString();
}
