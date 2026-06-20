import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { SignatureDishes } from "@/components/SignatureDishes";
import { InteractiveMenu } from "@/components/InteractiveMenu";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { Reservation } from "@/components/Reservation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { business } from "@/data/business";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: business.name,
    servesCuisine: ["Italian"],
    priceRange: business.priceRange,
    telephone: business.phone,
    foundingDate: "1989",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Roomstraat 7",
      postalCode: "9160",
      addressLocality: "Lokeren",
      addressCountry: "BE",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviewCount,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Story />
        <SignatureDishes />
        <InteractiveMenu />
        <Testimonials />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
