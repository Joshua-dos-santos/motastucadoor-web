import Container from "../components/common/Container";
import Seo from "../components/common/Seo";
import Section from "../components/common/Section";

function PrivacyPage() {
  return (
    <>
      <Seo
        title="Privacy"
        description="Lees hoe Mota Stucadoor contactgegevens uit offerteaanvragen gebruikt om op vragen en aanvragen te reageren."
        path="/privacy"
      />
      <Section>
        <Container>
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-mota-orange)]">
              Privacy
            </p>
            <h1>Privacy</h1>
            <div className="mt-8 grid gap-6 text-base leading-8">
              <p>
                Mota Stucadoor gebruikt de gegevens die je via het
                offerteformulier verstuurt om contact met je op te nemen over
                jouw vraag of aanvraag.
              </p>
              <p>
                Het formulier wordt verwerkt via Formspree. De ingevulde
                contactgegevens en je bericht worden alleen gebruikt om op je
                aanvraag te reageren.
              </p>
              <p>
                Wil je iets laten aanpassen of verwijderen, neem dan contact op
                via{" "}
                <a href="mailto:info@motastucadoor.nl">
                  info@motastucadoor.nl
                </a>
                .
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

export default PrivacyPage;
