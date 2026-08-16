import Button from "../common/Button";
import Container from "../common/Container";
import Section from "../common/Section";

function QuoteCTA() {
  return (
    <Section>
      <Container>
        <div className="rounded-xl bg-[var(--color-mota-dark)] px-6 py-10 text-white md:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-white/65">
              Offerte
            </p>
            <h2 className="mt-3 text-white">Een stukadoor nodig?</h2>
          </div>
          <Button to="/contact" className="mt-7 lg:mt-0">
            Offerte aanvragen
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default QuoteCTA;
