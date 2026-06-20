"use client";

import { useState } from "react";
import { business } from "@/data/business";
import { Reveal } from "./Reveal";
import { SeasonsMark } from "./Logo";

export function Reservation() {
  const [done, setDone] = useState(false);

  return (
    <section id="reserve" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=2070&q=80')",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-green-deep/85" />

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="text-cream">
            <p className="eyebrow mb-5 text-gold-soft">
              <SeasonsMark size={16} className="text-gold-soft" />
              Reserveer
            </p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-balance sm:text-5xl">
              Een tafel vol Italiaanse warmte wacht op u
            </h2>
            <p className="mt-5 max-w-md text-cream/75">
              Reserveer eenvoudig online of bel ons rechtstreeks. Voor grote
              gezelschappen helpen we u graag persoonlijk verder.
            </p>
            <a
              href={business.phoneHref}
              className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-gold-soft transition-colors hover:text-cream"
            >
              <PhoneIcon /> {business.phone}
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-cream p-7 shadow-lift sm:p-8">
              {done ? (
                <div className="py-12 text-center">
                  <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-green/10 text-green">
                    <CheckIcon />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-green">
                    Bedankt voor uw aanvraag
                  </h3>
                  <p className="mt-2 text-sm text-charcoal/65">
                    We bevestigen uw reservering zo snel mogelijk.
                  </p>
                  <button
                    onClick={() => setDone(false)}
                    className="mt-6 text-sm font-semibold text-wine hover:underline"
                  >
                    Nieuwe reservering
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-semibold text-green">
                    Reserveer een tafel
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Naam" placeholder="Uw naam" />
                    <Field label="Telefoon" placeholder="Uw nummer" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Datum" type="date" />
                    <Field label="Tijd" type="time" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs uppercase tracking-widest text-charcoal/55">
                      Aantal personen
                    </label>
                    <select className="w-full rounded-xl border border-charcoal/15 bg-cream-deep/30 px-4 py-3 text-charcoal outline-none focus:border-green">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n}>
                          {n} {n === 1 ? "persoon" : "personen"}
                        </option>
                      ))}
                      <option>9+ personen</option>
                    </select>
                  </div>
                  <button
                    onClick={() => setDone(true)}
                    className="w-full rounded-full bg-wine py-4 text-base font-semibold text-cream shadow-soft transition-transform hover:scale-[1.02] active:scale-95"
                  >
                    Bevestig reservering
                  </button>
                  <p className="text-center text-xs text-charcoal/45">
                    U ontvangt een bevestiging per telefoon of e-mail.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-widest text-charcoal/55">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-charcoal/15 bg-cream-deep/30 px-4 py-3 text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-green focus:bg-cream"
      />
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
