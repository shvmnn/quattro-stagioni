"use client";

import Image from "next/image";
import { galleryImages } from "@/data/business";
import { Reveal } from "./Reveal";

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow mb-4 justify-center text-wine">Galerij</p>
          <h2 className="font-serif text-4xl font-semibold text-green sm:text-5xl">
            Een blik op onze wereld
          </h2>
          <p className="mt-4 text-charcoal/65">
            Sfeer, gerechten en de warmte die je bij ons voelt.
          </p>
        </Reveal>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] lg:grid-cols-4">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={i * 0.06}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${img.span}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-4 left-4 translate-y-2 text-sm font-medium text-cream opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.alt}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
