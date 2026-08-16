import Button from "../components/common/Button";
import Container from "../components/common/Container";
import Seo from "../components/common/Seo";
import Section from "../components/common/Section";

function NotFoundPage() {
  return (
    <>
      <Seo
        title="Pagina niet gevonden"
        description="Deze pagina bestaat niet. Ga terug naar Mota Stucadoor."
        path="/404"
      />
      <Section>
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-mota-orange)]">
              404
            </p>
            <h1>Pagina niet gevonden</h1>
            <p className="mt-5 text-base leading-8 md:text-lg">
              De pagina die je zoekt bestaat niet of is verplaatst.
            </p>
            <Button to="/" className="mt-8">
              Terug naar home
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default NotFoundPage;
