import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import { services } from "../../data/services";

const serviceDescriptions: Record<string, string> = {
  buitengevels:
    "Duurzame gevelafwerking met een verzorgde uitstraling voor buitenmuren.",
  "sierpleister-pleisterwerk":
    "Decoratieve en strakke pleisterlagen passend bij de ruimte en ondergrond.",
  "wanden-plafonds":
    "Glad en egaal stucwerk voor wanden en plafonds in woningen en bedrijven.",
  "lijsten-ornamenten":
    "Nette afwerking van details, lijsten en ornamenten met oog voor vorm.",
};

function ServicesSection() {
  return (
    <Section id="diensten" className="bg-[var(--color-background-muted)]">
      <Container>
        <SectionTitle
          eyebrow="Diensten"
          title="Stucwerk voor binnen en buiten"
          description="Van basisafwerking tot zichtwerk: Mota Stucadoor werkt netjes, duidelijk en met aandacht voor het eindresultaat."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.id} className="flex min-h-full flex-col p-5">
              <div className="mb-6 h-32 rounded-lg border border-[var(--color-border)] bg-[var(--color-placeholder-gradient)]">
                <div className="h-full w-2 rounded-l-lg bg-[var(--color-mota-orange)]" />
              </div>
              <h3 className="text-xl">{service.title}</h3>
              <p className="mt-3 text-sm leading-6">
                {serviceDescriptions[service.id]}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ServicesSection;
