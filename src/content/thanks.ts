// Confirmation pages (BRIEF §4). /thanks/course was dropped with the email
// course (decision 6/10).

export const thanks = {
  booked: {
    title: "Your call is booked",
    body: "Calendly has sent you a confirmation email with the calendar invite and the call link.",
    next: "Before the call, think of one client who asks for ads you cannot deliver today. We can start from there.",
  },
  webinar: {
    title: "You are registered",
    body: "Luma has sent you a confirmation email with the link to join.",
    next: "If you want to talk before the webinar, book a 15 minute call.",
  },
} as const;

export type ThanksType = keyof typeof thanks;
export const thanksTypes = Object.keys(thanks) as ThanksType[];
