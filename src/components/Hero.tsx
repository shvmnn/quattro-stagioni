"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { business } from "@/data/business";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-warm-fade" />
        <div className="absolute inset-0 bg-green-deep/20" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="relative z-10 mx-auto max-w-4xl px-5 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-charcoal/20 px-4 py-2 text-sm text-gold-soft backdrop-blur"
        >
          <Star /> {business.rating.toFixed(1)}/5 uit {business.reviewCount}+
          reviews
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="eyebrow mb-5 justify-center text-gold-soft"
        >
          Sinds 1989
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-balance text-5xl font-semibold leading-[1.05] text-cream sm:text-6xl md:text-7xl"
        >
          Authentieke Italiaanse keuken
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-balance text-lg text-cream/80"
        >
          Warme gastvrijheid en traditionele smaken in het hart van Lokeren.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#reserve"
            className="w-full rounded-full bg-wine px-8 py-4 text-base font-semibold text-cream shadow-lift transition-transform hover:scale-[1.03] active:scale-95 sm:w-auto"
          >
            Reserveer een tafel
          </a>
          <a
            href="#menu"
            className="w-full rounded-full border border-cream/40 px-8 py-4 text-base font-semibold text-cream backdrop-blur transition-colors hover:border-cream hover:bg-cream/10 sm:w-auto"
          >
            Bekijk het menu
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-cream/40 p-1.5">
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-cream/80"
          />
        </div>
      </motion.div>
    </section>
  );
}

function Star() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 7.1-1z" />
    </svg>
  );
}
