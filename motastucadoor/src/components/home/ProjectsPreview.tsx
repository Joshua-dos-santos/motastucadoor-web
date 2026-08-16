import Button from "../common/Button";
import Container from "../common/Container";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";

const projectPlaceholders = [
  "Wandafwerking",
  "Plafondafwerking",
  "Gevelwerk",
  "Sierpleister",
];

function ProjectsPreview() {
  return (
    <Section className="bg-[var(--color-background-muted)]">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Projecten"
            title="Recent werk in beeld"
            description="Een korte indruk van afwerkingen en toepassingen. Projectfoto’s kunnen later worden toegevoegd."
          />
          <Button to="/projecten" variant="secondary" className="md:mb-1">
            Bekijk alle projecten
          </Button>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projectPlaceholders.map((project, index) => (
            <div
              key={project}
              className="group min-h-64 overflow-hidden rounded-xl border border-[var(--color-border)] bg-white shadow-[0_16px_40px_rgba(63,65,67,0.08)]"
            >
              <div className="flex h-full min-h-64 flex-col justify-between bg-[linear-gradient(145deg,#ffffff,#f7f7f6)] p-5">
                <span className="text-sm font-bold text-[var(--color-mota-orange)]">
                  0{index + 1}
                </span>
                <div>
                  <div className="mb-4 h-1.5 w-20 rounded-full bg-[var(--color-mota-orange)]" />
                  <h3 className="text-xl">{project}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ProjectsPreview;
