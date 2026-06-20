"use client";

import Image from "next/image";
import { business } from "@/data/business";
import { Reveal } from "./Reveal";
import { SeasonsMark } from "./Logo";

const stats = [
  { value: "1989", label: "Opgericht" },
  { value: "35+", label: "Jaar traditie" },
  { value: "611+", label: "Tevreden gasten" },
];

export function Story() {
  const years = new Date().getFullYear() - business.established;
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="texture-paper absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-card">
            <Image
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80"
              alt="De warme sfeer van Le Quattro Stagioni"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 flex items-center gap-3 rounded-2xl bg-green px-6 py-4 text-cream shadow-lift sm:-right-6">
            <span className="font-serif text-4xl font-semibold text-gold-soft">
              {years}
            </span>
            <span className="text-sm leading-tight">
              jaar
              <br />
              gastvrijheid
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-5 text-wine">
              <SeasonsMark size={16} className="text-gold" />
              Ons verhaal
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-green text-balance sm:text-5xl">
              Meer dan een restaurant — een stukje Italië in Lokeren
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-charcoal/75 leading-relaxed">
              <p>
                Sinds 1989 koken we met dezelfde passie en dezelfde
                familierecepten die generaties teruggaan. Wat begon als een
                kleine droom, groeide uit tot een vaste waarde in Lokeren.
              </p>
              <p>
                Verse pasta, pizza uit de houtoven en gerechten zoals ze in
                Italië bedoeld zijn — bereid met liefde en geserveerd met de
                warmte van een familie die haar gasten als vrienden ontvangt.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center sm:text-left">
                  <p className="font-serif text-3xl font-semibold text-wine">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-charcoal/55">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
