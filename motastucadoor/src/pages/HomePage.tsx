import Seo from "../components/common/Seo";
import AboutSection from "../components/home/AboutSection";
import ContactPreview from "../components/home/ContactPreview";
import Hero from "../components/home/Hero";
import ProjectsPreview from "../components/home/ProjectsPreview";
import QuoteCTA from "../components/home/QuoteCTA";
import ServicesSection from "../components/home/ServicesSection";

function HomePage() {
  return (
    <>
      <Seo
        title="Stucadoor in Valkenswaard"
        description="Mota Stucadoor verzorgt professioneel stuc- en pleisterwerk voor grote en kleine projecten in Valkenswaard en omgeving."
        path="/"
      />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <ProjectsPreview />
      <QuoteCTA />
      <ContactPreview />
    </>
  );
}

export default HomePage;
