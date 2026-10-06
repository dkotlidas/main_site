import { useEffect, useState } from "react";

const format = (iso: string, timeZone?: string) =>
  new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
    timeZoneName: "short",
  }).format(new Date(iso));

// Prerendered in Strasbourg time, then switched to the visitor's time zone
// in the browser (BRIEF §6: date and time in the visitor's time zone).
const LocalDateTime = ({ iso }: { iso: string }) => {
  const [text, setText] = useState(() => format(iso, "Europe/Paris"));
  useEffect(() => setText(format(iso)), [iso]);
  return <time dateTime={iso}>{text}</time>;
};

export default LocalDateTime;
