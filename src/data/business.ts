export const business = {
  name: "Le Quattro Stagioni",
  established: 1989,
  city: "Lokeren",
  address: "Roomstraat 7, 9160 Lokeren, België",
  phone: "+32 9 348 69 24",
  phoneHref: "tel:+3293486924",
  rating: 4.6,
  reviewCount: 611,
  priceRange: "€20–30",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Le+Quattro+Stagioni+Roomstraat+7+Lokeren",
  mapEmbed:
    "https://www.google.com/maps?q=Roomstraat+7,+9160+Lokeren,+Belgium&output=embed",
};

// Each day can have multiple service windows (lunch / dinner).
export type Window = { open: string; close: string };
export type DayService = Window[]; // empty array = closed

// 0 = Sunday ... 6 = Saturday
export const hours: Record<number, DayService> = {
  1: [
    { open: "12:00", close: "14:00" },
    { open: "17:30", close: "22:00" },
  ], // Maandag
  2: [], // Dinsdag - gesloten
  3: [], // Woensdag - gesloten
  4: [
    { open: "12:00", close: "14:00" },
    { open: "17:30", close: "22:00" },
  ], // Donderdag
  5: [
    { open: "12:00", close: "14:30" },
    { open: "17:30", close: "22:30" },
  ], // Vrijdag
  6: [
    { open: "12:00", close: "14:30" },
    { open: "17:30", close: "22:30" },
  ], // Zaterdag
  0: [
    { open: "12:00", close: "14:30" },
    { open: "17:30", close: "22:00" },
  ], // Zondag
};

export const dayNamesNL = [
  "Zondag",
  "Maandag",
  "Dinsdag",
  "Woensdag",
  "Donderdag",
  "Vrijdag",
  "Zaterdag",
];

export const reviews = [
  {
    name: "Marie D.",
    initials: "MD",
    rating: 5,
    text: "Het beste Italiaanse restaurant van Lokeren. Een echt Italiaans gevoel van begin tot eind.",
  },
  {
    name: "Jan V.",
    initials: "JV",
    rating: 5,
    text: "Fantastische pizza en een hartelijke bediening. We komen hier al jaren terug.",
  },
  {
    name: "Sophie L.",
    initials: "SL",
    rating: 5,
    text: "Authentieke keuken, gezellige sfeer en uitstekende prijs-kwaliteit.",
  },
  {
    name: "Peter M.",
    initials: "PM",
    rating: 5,
    text: "Alsof je even in Italië bent. Verse pasta zoals het hoort.",
  },
  {
    name: "Inge B.",
    initials: "IB",
    rating: 4,
    text: "Vriendelijk personeel en een warme, familiale sfeer. Een vaste waarde.",
  },
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
    alt: "Sfeervolle eetzaal",
    span: "lg:col-span-2 lg:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80",
    alt: "Houtoven pizza",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?auto=format&fit=crop&w=900&q=80",
    alt: "Verse pasta",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
    alt: "Gezellige tafel",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1498579150354-977475b7ea0b?auto=format&fit=crop&w=900&q=80",
    alt: "Italiaanse wijn",
    span: "",
  },
];
