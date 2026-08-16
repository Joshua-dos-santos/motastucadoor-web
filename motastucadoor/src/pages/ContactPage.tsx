import ContactDetails from "../components/contact/ContactDetails";
import QuoteForm from "../components/contact/QuoteForm";
import Container from "../components/common/Container";
import Seo from "../components/common/Seo";
import Section from "../components/common/Section";

function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Neem contact op met Mota Stucadoor in Valkenswaard of vraag vrijblijvend een offerte aan."
        path="/contact"
      />
      <Section className="pb-10">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-mota-orange)]">
              Contact
            </p>
            <h1>Contact</h1>
            <p className="mt-5 text-base leading-8 md:text-lg">
              Neem contact op of vraag vrijblijvend een offerte aan voor jouw
              stuc- of pleisterwerk.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--color-background-muted)] pt-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <ContactDetails />
            <QuoteForm />
          </div>
        </Container>
      </Section>
    </>
  );
}

export default ContactPage;
