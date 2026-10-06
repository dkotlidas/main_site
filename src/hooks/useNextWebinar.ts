import { useEffect, useState } from "react";
import { getNextWebinar } from "@/content/webinars";

// The prerendered HTML cannot know today's date, so the first render shows
// whatever is in webinars.json and the expiry check runs in the browser.
export function useNextWebinar() {
  const [next, setNext] = useState(() => getNextWebinar());
  useEffect(() => setNext(getNextWebinar(new Date())), []);
  return next;
}
