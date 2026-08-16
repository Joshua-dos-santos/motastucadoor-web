import Button from "../common/Button";
import Card from "../common/Card";
import Container from "../common/Container";
import Section from "../common/Section";
import { services } from "../../data/services";

const serviceDetails: Record<
  string,
  {
    description: string;
    points: string[];
  }
> = {
  buitengevels: {
    description:
      "Verzorgde buitengevelafwerking voor een nette en duurzame uitstraling van de woning of het pand.",
    points: ["Gevelafwerking", "Strakke buitenmuren", "Net afgewerkte details"],
  },
  "sierpleister-pleisterwerk": {
    description:
      "Sierpleister en pleisterwerk voor wanden en oppervlakken die een strakke of decoratieve afwerking nodig hebben.",
    points: ["Decoratieve afwerking", "Passend bij de ruimte", "Rustige eindafwerking"],
  },
  "wanden-plafonds": {
    description:
      "Glad en verzorgd stucwerk voor wanden en plafonds, geschikt voor renovatie, verbouwing en nieuw werk.",
    points: ["Wanden", "Plafonds", "Binnenafwerking"],
  },
  "lijsten-ornamenten": {
    description:
      "Nette afwerking van lijsten, ornamenten en details waarbij precisie en rustig vakwerk belangrijk zijn.",
    points: ["Lijsten", "Ornamenten", "Detailafwerking"],
  },
};

function ServiceOverview() {
  return (
    <Section className="pt-10">
      <Container>
        <div className="grid gap-6">
          {services.map((service, index) => {
            const details = serviceDetails[service.id];

            return (
              <Card key={service.id} className="overflow-hidden p-0">
                <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                  <div
                    className="min-h-56 bg-[var(--color-placeholder-gradient)] p-6"
                    aria-label={`${service.title} beeldvlak`}
                    role="img"
                  >
                    <div className="flex h-full min-h-44 flex-col justify-between rounded-lg border border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-surface)_70%,transparent)] p-5">
                      <span className="text-sm font-bold text-[var(--color-mota-orange)]">
                        0{index + 1}
                      </span>
                      <div className="h-2 w-24 rounded-full bg-[var(--color-mota-orange)]" />
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl">{service.title}</h2>
                    <p className="mt-4 text-base leading-8">{details.description}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                      {details.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-md border border-[var(--color-border)] bg-[var(--color-background-muted)] px-4 py-3 text-sm font-bold text-[var(--color-mota-dark)]"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl bg-[var(--color-footer-background)] p-6 text-white md:flex md:items-center md:justify-between md:gap-8 md:p-8">
          <div>
            <h2 className="text-2xl text-white md:text-3xl">
              Bespreek jouw werkzaamheden
            </h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-white/75">
              Vertel kort wat er moet gebeuren, dan kijken we samen naar een
              passende aanpak.
            </p>
          </div>
          <Button to="/contact" className="mt-6 w-full sm:w-auto md:mt-0">
            Vrijblijvende offerte aanvragen
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default ServiceOverview;
