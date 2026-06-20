import { business } from "@/data/business";
import { Logo } from "./Logo";

const quickLinks = [
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "Over ons" },
  { href: "#gallery", label: "Galerij" },
  { href: "#reserve", label: "Reserveren" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-green-deep text-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo variant="light" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/65">
            Authentieke Italiaanse keuken in het hart van Lokeren. Met passie
            bereid sinds 1989 — een stukje Italië bij u om de hoek.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-soft">
            Navigatie
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-cream/65 transition-colors hover:text-gold-soft"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gold-soft">
            Contact
          </h4>
          <ul className="space-y-2.5 text-sm text-cream/65">
            <li>{business.address}</li>
            <li>
              <a
                href={business.phoneHref}
                className="transition-colors hover:text-gold-soft"
              >
                {business.phone}
              </a>
            </li>
          </ul>
          <div className="mt-5 flex gap-3">
            {["Instagram", "Facebook"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/70 transition-colors hover:border-gold-soft hover:text-gold-soft"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-cream/45 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {business.name}. Alle rechten
            voorbehouden.
          </p>
          <p>Con amore gemaakt in Lokeren.</p>
        </div>
      </div>
    </footer>
  );
}
