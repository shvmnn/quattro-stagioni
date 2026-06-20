import type { Metadata } from "next";
import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import { business } from "@/data/business";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const script = Dancing_Script({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Le Quattro Stagioni — Authentieke Italiaanse keuken sinds 1989",
  description:
    "Authentieke Italiaanse keuken in Lokeren sinds 1989. Verse pasta, pizza uit de houtoven en warme gastvrijheid. Reserveer een tafel of bestel afhaal. ⭐ 4,6/5 uit 611+ reviews.",
  keywords: [
    "Italiaans restaurant Lokeren",
    "Le Quattro Stagioni",
    "pizza Lokeren",
    "pasta Lokeren",
    "reserveren restaurant Lokeren",
    "Italiaans afhaal Lokeren",
  ],
  openGraph: {
    title: "Le Quattro Stagioni — Authentieke Italiaanse keuken sinds 1989",
    description:
      "Verse pasta, pizza uit de houtoven en warme gastvrijheid in het hart van Lokeren. Reserveer vandaag nog.",
    type: "website",
    locale: "nl_BE",
    siteName: business.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${serif.variable} ${sans.variable} ${script.variable}`}
    >
      <body className="font-sans bg-cream text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
