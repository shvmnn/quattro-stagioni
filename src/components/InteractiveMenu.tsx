"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  allTags,
  categories,
  menu,
  tagLabels,
  type MenuCategory,
  type Tag,
} from "@/data/menu";
import { eur } from "@/lib/format";
import { Reveal } from "./Reveal";

export function InteractiveMenu() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<MenuCategory>("Voorgerechten");
  const [activeTags, setActiveTags] = useState<Tag[]>([]);

  const toggleTag = (t: Tag) =>
    setActiveTags((cur) =>
      cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]
    );

  const searching = query.trim().length > 0 || activeTags.length > 0;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menu.filter((d) => {
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q);
      const matchesTags =
        activeTags.length === 0 ||
        activeTags.every((t) => d.tags?.includes(t));
      const matchesCat = searching || d.category === active;
      return matchesQuery && matchesTags && matchesCat;
    });
  }, [query, active, activeTags, searching]);

  return (
    <section id="menu" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center text-wine">Onze kaart</p>
          <h2 className="font-serif text-4xl font-semibold text-green sm:text-5xl">
            Ontdek het menu
          </h2>
          <p className="mt-4 text-charcoal/65">
            Blader, zoek en filter — alles in één elegant overzicht.
          </p>
        </Reveal>

        {/* Search + filters */}
        <Reveal className="mb-8">
          <div className="flex flex-col gap-4">
            <div className="relative">
              <SearchIcon />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Zoek een gerecht of ingrediënt…"
                className="w-full rounded-full border border-charcoal/15 bg-cream-deep/40 py-3.5 pl-12 pr-4 text-charcoal outline-none transition-colors placeholder:text-charcoal/40 focus:border-green focus:bg-cream"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40 hover:text-wine"
                  aria-label="Wissen"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="mr-1 text-xs uppercase tracking-widest text-charcoal/45">
                Filter:
              </span>
              {allTags.map((t) => {
                const on = activeTags.includes(t);
                return (
                  <button
                    key={t}
                    onClick={() => toggleTag(t)}
                    className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                      on
                        ? "border-green bg-green text-cream"
                        : "border-charcoal/15 text-charcoal/65 hover:border-green/50"
                    }`}
                  >
                    {tagLabels[t]}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Sticky category nav (hidden while searching) */}
        {!searching && (
          <div className="sticky top-20 z-30 mb-8 -mx-5 px-5 sm:top-24">
            <div className="mx-auto flex max-w-full gap-2 overflow-x-auto rounded-full border border-charcoal/10 bg-cream/95 p-1.5 shadow-soft backdrop-blur [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                    active === cat
                      ? "text-cream"
                      : "text-charcoal/60 hover:text-green"
                  }`}
                >
                  {active === cat && (
                    <motion.span
                      layoutId="menu-cat-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-green"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 32,
                      }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        <AnimatePresence mode="wait">
          <motion.div
            key={searching ? "search" : active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {filtered.length === 0 ? (
              <p className="py-16 text-center text-charcoal/50">
                Geen gerechten gevonden. Probeer een andere zoekterm.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-x-10 gap-y-1 md:grid-cols-2">
                {filtered.map((dish) => (
                  <div
                    key={dish.id}
                    className="group flex items-baseline gap-3 border-b border-charcoal/10 py-4 transition-colors hover:border-gold"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-serif text-lg font-semibold text-green">
                          {dish.name}
                        </h3>
                        {dish.tags?.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-gold/15 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-gold"
                          >
                            {tagLabels[t]}
                          </span>
                        ))}
                      </div>
                      <p className="mt-1 text-sm text-charcoal/60">
                        {dish.description}
                      </p>
                    </div>
                    <span className="shrink-0 font-serif text-lg font-semibold text-wine">
                      {eur(dish.price)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <Reveal className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#reserve"
            className="w-full rounded-full bg-wine px-8 py-4 text-center text-base font-semibold text-cream shadow-soft transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
          >
            Reserveer een tafel
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-green/40 px-8 py-4 text-center text-base font-semibold text-green transition-colors hover:border-green hover:bg-green/5 sm:w-auto"
          >
            Bestel afhaal
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function SearchIcon() {
  return (
    <svg
      className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal/40"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
