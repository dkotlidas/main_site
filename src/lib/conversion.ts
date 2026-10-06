// Fires each conversion once (BRIEF §4: each thanks page fires its event).
// /thanks/booked only counts a booking that the Calendly embed reported in
// this session, so refreshes and direct visits do not count twice.

import { track } from "@/lib/track";

const PENDING_BOOKING = "dk_booking_pending";
const FIRED_PREFIX = "dk_fired_";

function safe<T>(fn: () => T, fallback: T): T {
  try {
    return fn();
  } catch {
    return fallback;
  }
}

export function markBookingPending() {
  safe(() => sessionStorage.setItem(PENDING_BOOKING, "1"), undefined);
}

export function fireBookingConversion() {
  const pending = safe(() => sessionStorage.getItem(PENDING_BOOKING) === "1", false);
  if (!pending) return false;
  safe(() => sessionStorage.removeItem(PENDING_BOOKING), undefined);
  track("call_booked");
  return true;
}

// For events where the site only sees the thanks page (e.g. Luma redirect).
export function fireOncePerSession(event: "webinar_registered") {
  const key = FIRED_PREFIX + event;
  if (safe(() => sessionStorage.getItem(key) === "1", false)) return;
  safe(() => sessionStorage.setItem(key, "1"), undefined);
  track(event);
}
