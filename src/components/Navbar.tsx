"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";

const links = [
  { href: "#top", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Over ons" },
  { href: "#gallery", label: "Galerij" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/95 shadow-soft backdrop-blur py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top">
          <Logo variant={onHero ? "light" : "dark"} />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  onHero
                    ? "text-cream/85 hover:text-cream"
                    : "text-charcoal/70 hover:text-wine"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#reserve"
            className="hidden rounded-full bg-wine px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-all hover:bg-wine-deep hover:scale-[1.03] active:scale-95 sm:inline-block"
          >
            Reserveer een tafel
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`grid h-11 w-11 place-items-center rounded-full border lg:hidden ${
              onHero
                ? "border-cream/30 text-cream"
                : "border-charcoal/15 text-charcoal"
            }`}
            aria-label="Menu"
            aria-expanded={open}
          >
            <Burger open={open} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream/98 backdrop-blur lg:hidden"
          >
            <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base text-charcoal/80 transition-colors hover:bg-green/5 hover:text-green"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#reserve"
                  onClick={() => setOpen(false)}
                  className="mt-2 block rounded-full bg-wine px-4 py-3 text-center text-base font-semibold text-cream"
                >
                  Reserveer een tafel
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <div className="relative h-4 w-5">
      <span
        className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
          open ? "top-1.5 rotate-45" : "top-0"
        }`}
      />
      <span
        className={`absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 h-0.5 w-5 bg-current transition-all duration-300 ${
          open ? "top-1.5 -rotate-45" : "top-3"
        }`}
      />
    </div>
  );
}
