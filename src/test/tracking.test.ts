import { describe, it, expect, beforeEach } from "vitest";
import { captureUtm, getUtm, withUtm } from "@/lib/utm";
import { markBookingPending, fireBookingConversion, fireOncePerSession } from "@/lib/conversion";

beforeEach(() => {
  sessionStorage.clear();
  window.dataLayer = [];
});

describe("utm", () => {
  it("keeps the first UTMs of the visit and adds them to links", () => {
    captureUtm("?utm_source=linkedin&utm_medium=dm&foo=bar");
    captureUtm("?utm_source=google");
    expect(getUtm()).toEqual({ utm_source: "linkedin", utm_medium: "dm" });
    expect(withUtm("https://calendly.com/x?hide_gdpr_banner=1")).toBe(
      "https://calendly.com/x?hide_gdpr_banner=1&utm_source=linkedin&utm_medium=dm",
    );
  });

  it("leaves links alone without UTMs", () => {
    expect(withUtm("https://calendly.com/x")).toBe("https://calendly.com/x");
  });
});

describe("conversions", () => {
  it("counts a booking once, only after the embed reported it", () => {
    expect(fireBookingConversion()).toBe(false);
    markBookingPending();
    expect(fireBookingConversion()).toBe(true);
    expect(fireBookingConversion()).toBe(false);
    expect(window.dataLayer).toEqual([{ event: "call_booked" }]);
  });

  it("fires webinar_registered once per session", () => {
    fireOncePerSession("webinar_registered");
    fireOncePerSession("webinar_registered");
    expect(window.dataLayer).toEqual([{ event: "webinar_registered" }]);
  });
});

