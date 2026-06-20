import { hours, type Window } from "@/data/business";

export type OpenState = "open" | "closed";

export type StatusInfo = {
  state: OpenState;
  label: string;
  today: number;
  nextChange: string | null; // e.g. "Sluit om 22:00" or "Opent om 17:30"
};

function toMin(hhmm: string): number {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
}

export function getStatus(now: Date = new Date()): StatusInfo {
  const today = now.getDay();
  const windows = hours[today] ?? [];
  const nowMin = now.getHours() * 60 + now.getMinutes();

  for (const w of windows) {
    const open = toMin(w.open);
    const close = toMin(w.close);
    if (nowMin >= open && nowMin < close) {
      return {
        state: "open",
        label: "Nu open",
        today,
        nextChange: `Sluit om ${w.close}`,
      };
    }
  }

  // Find next opening window today
  const upcoming = windows
    .map((w) => toMin(w.open))
    .filter((o) => o > nowMin)
    .sort((a, b) => a - b)[0];

  let nextChange: string | null = null;
  if (upcoming !== undefined) {
    const next = windows.find((w) => toMin(w.open) === upcoming);
    if (next) nextChange = `Opent om ${next.open}`;
  }

  return { state: "closed", label: "Gesloten", today, nextChange };
}

export function formatWindows(windows: Window[]): string {
  if (!windows.length) return "Gesloten";
  return windows.map((w) => `${w.open}–${w.close}`).join("  ·  ");
}
