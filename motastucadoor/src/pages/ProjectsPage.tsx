import Container from "../components/common/Container";
import Seo from "../components/common/Seo";
import Section from "../components/common/Section";
import ProjectGallery from "../components/projects/ProjectGallery";

function ProjectsPage() {
  return (
    <>
      <Seo
        title="Projecten"
        description="Bekijk een overzicht van stucwerk, pleisterwerk en afwerkingen van Mota Stucadoor."
        path="/projecten"
      />
      <Section className="pb-10">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-mota-orange)]">
              Projecten
            </p>
            <h1>Projecten</h1>
            <p className="mt-5 text-base leading-8 md:text-lg">
              Bekijk een visueel overzicht van stucwerk, pleisterwerk en
              afwerkingen. Zodra echte projectbeelden beschikbaar zijn, kunnen
              deze placeholders direct worden vervangen.
            </p>
          </div>
        </Container>
      </Section>
      <ProjectGallery />
    </>
  );
}

export default ProjectsPage;
