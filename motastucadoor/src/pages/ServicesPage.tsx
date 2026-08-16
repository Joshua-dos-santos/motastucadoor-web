import Container from "../components/common/Container";
import Seo from "../components/common/Seo";
import Section from "../components/common/Section";
import ServiceOverview from "../components/services/ServiceOverview";

function ServicesPage() {
  return (
    <>
      <Seo
        title="Diensten"
        description="Bekijk de diensten van Mota Stucadoor: buitengevels, sierpleister, pleisterwerk, wanden, plafonds, lijsten en ornamenten."
        path="/diensten"
      />
      <Section className="pb-10">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-mota-orange)]">
              Diensten
            </p>
            <h1>Diensten</h1>
            <p className="mt-5 text-base leading-8 md:text-lg">
              Een overzicht van stuc- en pleisterwerk voor binnen en buiten.
              Heldere werkzaamheden, netjes uitgevoerd en afgestemd op jouw
              project.
            </p>
          </div>
        </Container>
      </Section>
      <ServiceOverview />
    </>
  );
}

export default ServicesPage;
