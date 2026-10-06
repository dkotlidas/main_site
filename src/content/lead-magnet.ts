// Lead magnet popup (decision 6/10, PLAN.md §7b). Stays off until the lead
// magnet exists and an email provider is chosen (CONTENT-TODO #24, #25).

export const leadMagnet = {
  enabled: false,
  // [CONFIRM] CONTENT-TODO #24
  title: "[CONFIRM: lead magnet title]",
  description: "[CONFIRM: two lines on what the visitor gets]",
  buttonLabel: "Send it to me",
  emailLabel: "Work email",
  privacy: "One email with the download, then occasional emails for agency owners. Unsubscribe at any time.",
  success: "Done. Check your inbox.",
  error: "That did not work. Please try again in a minute.",

  // When it shows (PLAN.md §7b)
  minSecondsOnPage: 20,
  scrollDepth: 0.5,
  dismissDays: 30,
  excludedPaths: ["/book", "/thanks", "/privacy", "/cookies"],
};
