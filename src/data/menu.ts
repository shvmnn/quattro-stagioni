// ─────────────────────────────────────────────────────────────
// MENU — Vervang deze placeholderdata door de echte kaart.
// Houd dezelfde structuur aan; menu, zoeken en filters werken automatisch.
// ─────────────────────────────────────────────────────────────

export type MenuCategory =
  | "Dranken"
  | "Wijnen"
  | "Voorgerechten"
  | "Pizza & Pasta"
  | "Hoofdgerechten"
  | "Desserts";

export type Tag = "vegetarisch" | "pittig" | "klassieker" | "nieuw";

export type Dish = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  tags?: Tag[];
  image?: string; // optioneel: gebruikt in Signature Dishes
  signature?: boolean;
};

export const categories: MenuCategory[] = [
  "Voorgerechten",
  "Pizza & Pasta",
  "Hoofdgerechten",
  "Desserts",
  "Wijnen",
  "Dranken",
];

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

export const menu: Dish[] = [
  // ── Voorgerechten (Antipasti)
  {
    id: "bruschetta",
    name: "Bruschetta al Pomodoro",
    description: "Geroosterd brood met verse tomaat, basilicum en olijfolie.",
    price: 8.5,
    category: "Voorgerechten",
    tags: ["vegetarisch", "klassieker"],
    image: img("photo-1572695157366-5e585ab2b69f"),
    signature: true,
  },
  {
    id: "carpaccio",
    name: "Carpaccio di Manzo",
    description: "Dun gesneden rund met rucola, parmezaan en truffelolie.",
    price: 13.5,
    category: "Voorgerechten",
    tags: ["klassieker"],
  },
  {
    id: "caprese",
    name: "Insalata Caprese",
    description: "Mozzarella di bufala, tomaat en verse basilicum.",
    price: 11.0,
    category: "Voorgerechten",
    tags: ["vegetarisch"],
  },
  {
    id: "vitello",
    name: "Vitello Tonnato",
    description: "Malse kalfsvlees met romige tonijnsaus en kappertjes.",
    price: 14.0,
    category: "Voorgerechten",
  },

  // ── Pizza & Pasta
  {
    id: "pizza-margherita",
    name: "Pizza Margherita",
    description: "San Marzano-tomaat, mozzarella en basilicum uit de houtoven.",
    price: 12.5,
    category: "Pizza & Pasta",
    tags: ["vegetarisch", "klassieker"],
    image: img("photo-1574071318508-1cdbab80d002"),
    signature: true,
  },
  {
    id: "pizza-diavola",
    name: "Pizza Diavola",
    description: "Pittige salami, tomaat, mozzarella en chilipeper.",
    price: 14.5,
    category: "Pizza & Pasta",
    tags: ["pittig"],
  },
  {
    id: "tagliatelle-ragu",
    name: "Tagliatelle al Ragù",
    description: "Verse tagliatelle met traditionele Bolognese ragù.",
    price: 16.0,
    category: "Pizza & Pasta",
    tags: ["klassieker"],
    image: img("photo-1621996346565-e3dbc646d9a9"),
    signature: true,
  },
  {
    id: "spaghetti-vongole",
    name: "Spaghetti alle Vongole",
    description: "Spaghetti met verse venusschelpen, knoflook en witte wijn.",
    price: 18.5,
    category: "Pizza & Pasta",
  },
  {
    id: "lasagne",
    name: "Lasagne della Casa",
    description: "Huisgemaakte lasagne met rijke ragù en bechamel.",
    price: 15.5,
    category: "Pizza & Pasta",
    tags: ["klassieker"],
  },
  {
    id: "risotto-funghi",
    name: "Risotto ai Funghi",
    description: "Romige risotto met porcini en Parmigiano Reggiano.",
    price: 16.5,
    category: "Pizza & Pasta",
    tags: ["vegetarisch"],
  },

  // ── Hoofdgerechten (Carne & Pesce)
  {
    id: "saltimbocca",
    name: "Saltimbocca alla Romana",
    description: "Kalfsvlees met salie en Parmaham in witte wijnsaus.",
    price: 22.0,
    category: "Hoofdgerechten",
    image: img("photo-1432139555190-58524dae6a55"),
    signature: true,
  },
  {
    id: "branzino",
    name: "Branzino al Forno",
    description: "Hele zeebaars uit de oven met kruiden en citroen.",
    price: 24.5,
    category: "Hoofdgerechten",
    tags: ["nieuw"],
    image: img("photo-1519708227418-c8fd9a32b7a2"),
    signature: true,
  },
  {
    id: "ossobuco",
    name: "Ossobuco alla Milanese",
    description: "Gestoofde kalfsschenkel met gremolata en saffraanrisotto.",
    price: 26.0,
    category: "Hoofdgerechten",
    tags: ["klassieker"],
  },
  {
    id: "tagliata",
    name: "Tagliata di Manzo",
    description: "Gegrilde entrecote met rucola, kerstomaat en parmezaan.",
    price: 25.0,
    category: "Hoofdgerechten",
  },

  // ── Desserts (Dolci)
  {
    id: "tiramisu",
    name: "Tiramisù della Nonna",
    description: "Klassieke tiramisù met mascarpone en espresso.",
    price: 8.0,
    category: "Desserts",
    tags: ["klassieker"],
    image: img("photo-1571877227200-a0d98ea607e9"),
    signature: true,
  },
  {
    id: "panna-cotta",
    name: "Panna Cotta ai Frutti",
    description: "Romige panna cotta met saus van rood fruit.",
    price: 7.5,
    category: "Desserts",
    tags: ["vegetarisch"],
  },
  {
    id: "cannoli",
    name: "Cannoli Siciliani",
    description: "Krokante rolletjes met zoete ricotta en pistache.",
    price: 7.0,
    category: "Desserts",
  },
  {
    id: "affogato",
    name: "Affogato al Caffè",
    description: "Vanille-ijs verdronken in warme espresso.",
    price: 6.5,
    category: "Desserts",
    tags: ["vegetarisch"],
  },

  // ── Wijnen
  {
    id: "chianti",
    name: "Chianti Classico DOCG",
    description: "Toscaanse rode wijn, fruitig met zachte tannines. (fles)",
    price: 28.0,
    category: "Wijnen",
  },
  {
    id: "primitivo",
    name: "Primitivo di Manduria",
    description: "Volle rode wijn uit Puglia, rijk en kruidig. (fles)",
    price: 30.0,
    category: "Wijnen",
  },
  {
    id: "pinot-grigio",
    name: "Pinot Grigio delle Venezie",
    description: "Frisse witte wijn, licht en elegant. (fles)",
    price: 26.0,
    category: "Wijnen",
  },
  {
    id: "prosecco",
    name: "Prosecco Superiore",
    description: "Fijne mousserende wijn uit Valdobbiadene. (fles)",
    price: 27.0,
    category: "Wijnen",
  },

  // ── Dranken
  {
    id: "espresso",
    name: "Espresso",
    description: "Authentieke Italiaanse espresso.",
    price: 2.8,
    category: "Dranken",
  },
  {
    id: "aperol",
    name: "Aperol Spritz",
    description: "Aperol, prosecco en bruiswater met sinaasappel.",
    price: 9.0,
    category: "Dranken",
    tags: ["klassieker"],
  },
  {
    id: "limonata",
    name: "Limonata",
    description: "Verse Italiaanse citroenlimonade.",
    price: 3.5,
    category: "Dranken",
    tags: ["vegetarisch"],
  },
  {
    id: "acqua",
    name: "Acqua San Pellegrino",
    description: "Bruisend mineraalwater. (50 cl)",
    price: 3.0,
    category: "Dranken",
  },
];

export const signatureDishes = menu.filter((d) => d.signature);

export const allTags: Tag[] = ["klassieker", "vegetarisch", "pittig", "nieuw"];

export const tagLabels: Record<Tag, string> = {
  klassieker: "Klassieker",
  vegetarisch: "Vegetarisch",
  pittig: "Pittig",
  nieuw: "Nieuw",
};
