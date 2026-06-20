"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { signatureDishes } from "@/data/menu";
import { eur } from "@/lib/format";
import { Reveal, stagger, staggerItem } from "./Reveal";

export function SignatureDishes() {
  return (
    <section className="relative bg-green py-24 text-cream sm:py-32">
      <div className="texture-paper absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center text-gold-soft">
            Onze specialiteiten
          </p>
          <h2 className="font-serif text-4xl font-semibold text-cream sm:text-5xl">
            Gerechten met een verhaal
          </h2>
          <p className="mt-4 text-cream/70">
            Een selectie van klassiekers waar onze gasten steeds voor
            terugkomen.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {signatureDishes.map((dish) => (
            <motion.article
              key={dish.id}
              variants={staggerItem}
              className="group overflow-hidden rounded-3xl bg-cream text-charcoal shadow-card transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                {dish.image && (
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-green">
                  {dish.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-2xl font-semibold text-green">
                    {dish.name}
                  </h3>
                  <span className="shrink-0 font-serif text-xl font-semibold text-wine">
                    {eur(dish.price)}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/65">
                  {dish.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <Reveal className="mt-14 text-center">
          <a
            href="#menu"
            className="inline-block rounded-full border border-gold/50 px-8 py-4 text-base font-semibold text-cream transition-colors hover:border-gold hover:bg-gold/10"
          >
            Bekijk de volledige kaart
          </a>
        </Reveal>
      </div>
    </section>
  );
}
