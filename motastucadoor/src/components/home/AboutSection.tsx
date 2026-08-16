import { CheckCircle2 } from "lucide-react";

import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const trustPoints = [
  "Vakwerk op maat",
  "Voor grote én kleine projecten",
  "Persoonlijk contact",
];

function AboutSection() {
  return (
    <Section>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <SectionTitle
            eyebrow="Over Mota"
            title="Ervaren vakmanschap, persoonlijk uitgevoerd"
            description="Mota Stucadoor helpt particuliere en zakelijke klanten met strak stuc- en pleisterwerk. Je krijgt duidelijke communicatie, aandacht voor de ruimte en een afwerking die past bij het project."
          />

          <div className="grid gap-4">
            {trustPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-white p-5"
              >
                <CheckCircle2
                  className="mt-1 shrink-0 text-[var(--color-mota-orange)]"
                  size={24}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-xl">{point}</h3>
                  <p className="mt-2 text-sm leading-6">
                    Heldere afspraken en een nette uitvoering, afgestemd op de
                    situatie en jouw wensen.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default AboutSection;
