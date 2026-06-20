"use client";

import { useEffect, useState } from "react";
import { business, dayNamesNL, hours } from "@/data/business";
import { formatWindows, getStatus } from "@/lib/status";
import { Reveal } from "./Reveal";

const weekOrder = [1, 2, 3, 4, 5, 6, 0]; // Maandag eerst

export function Contact() {
  const [status, setStatus] = useState(() => getStatus());

  useEffect(() => {
    setStatus(getStatus());
    const t = setInterval(() => setStatus(getStatus()), 60_000);
    return () => clearInterval(t);
  }, []);

  const open = status.state === "open";

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow mb-4 justify-center text-wine">Contact</p>
          <h2 className="font-serif text-4xl font-semibold text-green sm:text-5xl">
            Bezoek ons in Lokeren
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal className="overflow-hidden rounded-3xl shadow-soft">
            <iframe
              title="Kaart Le Quattro Stagioni"
              src={business.mapEmbed}
              className="h-full min-h-[420px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="rounded-3xl border border-charcoal/10 bg-cream p-7 shadow-soft">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h3 className="font-serif text-2xl font-semibold text-green">
                  Openingsuren
                </h3>
                <span
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm font-semibold ${
                    open
                      ? "border-green/30 bg-green/10 text-green"
                      : "border-wine/30 bg-wine/10 text-wine"
                  }`}
                >
                  <span className="h-2 w-2 rounded-full bg-current" />
                  {status.label}
                </span>
              </div>

              {status.nextChange && (
                <p className="mb-4 text-sm text-charcoal/55">
                  {status.nextChange}
                </p>
              )}

              <ul className="space-y-1">
                {weekOrder.map((day) => {
                  const isToday = day === status.today;
                  const w = hours[day] ?? [];
                  const closed = w.length === 0;
                  return (
                    <li
                      key={day}
                      className={`flex items-center justify-between gap-3 rounded-xl px-4 py-2.5 text-sm ${
                        isToday
                          ? "bg-green/8 font-semibold text-green"
                          : "text-charcoal/70"
                      }`}
                    >
                      <span>{dayNamesNL[day]}</span>
                      <span className={closed ? "text-wine/70" : ""}>
                        {formatWindows(w)}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <InfoCard
                label="Adres"
                value={business.address}
                href={business.mapsUrl}
              />
              <InfoCard
                label="Telefoon"
                value={business.phone}
                href={business.phoneHref}
              />
            </div>

            <a
              href="#reserve"
              className="rounded-full bg-wine px-8 py-4 text-center text-base font-semibold text-cream shadow-soft transition-transform hover:scale-[1.02] active:scale-95"
            >
              Reserveer een tafel
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="rounded-2xl border border-charcoal/10 bg-cream p-5 shadow-soft transition-colors hover:border-gold"
    >
      <p className="mb-1 text-xs uppercase tracking-widest text-wine">
        {label}
      </p>
      <p className="text-sm font-medium text-charcoal/85">{value}</p>
    </a>
  );
}
