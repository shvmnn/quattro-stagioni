# Le Quattro Stagioni — Website

Premium website voor Le Quattro Stagioni, een authentiek Italiaans
familierestaurant in Lokeren (sinds 1989).
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion.

## Starten

```bash
npm install
npm run dev
```

Open http://localhost:3000

```bash
npm run build && npm start   # productie
```

## De echte menukaart toevoegen

Alles staat op één plek: **`src/data/menu.ts`**.
Vervang de `menu`-array door de echte gerechten — behoud dezelfde velden:

```ts
{
  id: "uniek-id",
  name: "Naam gerecht",
  description: "Korte beschrijving.",
  price: 12.5,
  category: "Pizza & Pasta", // zie categories
  tags: ["klassieker"],       // optioneel: klassieker | vegetarisch | pittig | nieuw
  image: "https://...",       // optioneel: nodig voor 'Signature Dishes'
  signature: true,            // optioneel: toont gerecht in de specialiteiten-sectie
}
```

Het interactieve menu (zoeken, filters, categorieën) en de specialiteiten-sectie
werken automatisch mee.

## Andere data aanpassen

- **`src/data/business.ts`** — adres, telefoon, rating, openingsuren, reviews,
  galerijfoto's.
- De openingsuren ondersteunen **dubbele shifts** (lunch + diner) en sturen
  automatisch de status **Nu open / Gesloten** in de contactsectie aan, inclusief
  "Sluit om…" / "Opent om…".

## Structuur

```
src/
  app/          layout, page, globals.css
  components/    Navbar, Hero, Story, SignatureDishes, InteractiveMenu,
                Testimonials, Gallery, Reservation, Contact, Footer
  data/          menu.ts, business.ts   ← hier pas je inhoud aan
  lib/           status.ts, format.ts
```

## Reserveringsformulier

Het formulier in de reserveringssectie toont nu een bevestigingsstatus aan de
voorkant (geen backend). Koppel het aan e-mail, een reserveringsplatform of een
database wanneer gewenst — de submit-handler zit in
`src/components/Reservation.tsx`.

## Opmerking over fonts

De site gebruikt Google Fonts (Playfair Display + Inter + Dancing Script) via
`next/font`. Dit vereist internettoegang tijdens het builden.
# quattro-stagioni
