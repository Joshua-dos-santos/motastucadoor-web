import { Mail, MapPin, Phone } from "lucide-react";

import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const contactItems = [
  {
    href: "tel:+31653230593",
    icon: Phone,
    label: "Telefoon",
    value: "06-53230593",
  },
  {
    href: "mailto:info@motastucadoor.nl",
    icon: Mail,
    label: "E-mail",
    value: "info@motastucadoor.nl",
  },
  {
    icon: MapPin,
    label: "Werkgebied",
    value: "Valkenswaard",
  },
];

function ContactPreview() {
  return (
    <Section id="contact" className="pt-0">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <SectionTitle
            eyebrow="Contact"
            title="Neem direct contact op"
            description="Bespreek jouw stucwerk, pleisterwerk of afwerking rechtstreeks met Mota Stucadoor."
          />

          <div className="grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon
                    className="text-[var(--color-mota-orange)]"
                    size={24}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-bold text-[var(--color-mota-dark)]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-base text-[var(--color-text-muted)]">
                      {item.value}
                    </p>
                  </div>
                </>
              );

              return (
                <Card key={item.label} className="p-5">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-center gap-4 no-underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-mota-orange)]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4">{content}</div>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ContactPreview;
