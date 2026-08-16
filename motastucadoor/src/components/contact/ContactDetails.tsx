import { Mail, MapPin, Phone } from "lucide-react";

import Card from "../common/Card";

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
    label: "E-mailadres",
    value: "info@motastucadoor.nl",
  },
  {
    icon: MapPin,
    label: "Plaats",
    value: "Valkenswaard",
  },
];

function ContactDetails() {
  return (
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
              <h2 className="text-base">{item.label}</h2>
              <p className="mt-1 text-base">{item.value}</p>
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
  );
}

export default ContactDetails;
