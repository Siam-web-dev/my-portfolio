import Container from "@/components/ui/Container";
import ContactHero from "@/components/contact/ContactHero";
import ContactMethods from "@/components/contact/ContactMethods";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact | Kamruzzaman Siam",
  description:
    "Get in touch with Kamruzzaman Siam for web engineering opportunities, freelance projects, or technical collaboration.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 py-12 sm:py-16 relative bg-grid-pattern">
      {/* Background radial glow */}
      <div className="absolute inset-0 radial-glow-top pointer-events-none -z-10" />

      <Container>
        <ContactHero />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Methods & Socials */}
          <div className="lg:col-span-5">
            <ContactMethods />
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
