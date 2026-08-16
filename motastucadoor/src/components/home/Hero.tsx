import Button from "../common/Button";
import Container from "../common/Container";
import Section from "../common/Section";

function Hero() {
  return (
    <Section className="overflow-hidden bg-[var(--color-background)]">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-mota-orange)]">
              Mota Stucadoor
            </p>
            <h1>Vakmanschap in stuc- en pleisterwerk</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 md:text-lg">
              Professioneel stucwerk voor grote en kleine projecten in
              Valkenswaard en omgeving. Van strakke wanden en plafonds tot
              sierpleister, gevelwerk en verfijnde afwerking.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact">Vrijblijvende offerte</Button>
              <Button to="/diensten" variant="secondary">
                Bekijk onze diensten
              </Button>
            </div>
          </div>

          <div
            className="min-h-[320px] rounded-xl border border-[var(--color-border)] bg-[linear-gradient(135deg,#f7f7f6_0%,#ffffff_55%,#f4ddd7_100%)] p-5 shadow-[0_24px_60px_rgba(63,65,67,0.12)] lg:min-h-[460px]"
            aria-label="Strakke stucwerk afwerking"
            role="img"
          >
            <div className="flex h-full min-h-[280px] flex-col justify-end rounded-lg border border-white/80 bg-white/55 p-6">
              <div className="h-2 w-24 rounded-full bg-[var(--color-mota-orange)]" />
              <p className="mt-4 max-w-sm text-base font-semibold leading-7 text-[var(--color-mota-dark)]">
                Strakke afwerking, rustige uitstraling en aandacht voor detail.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
