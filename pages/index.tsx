import CoursesSlideShow from "@components/CoursesSlideShow/CoursesSlideShow";
import Footer from "@components/Footer";
import { HackathonSection } from "@components/Hackathon";
import { HallOfFame } from "@components/HallOfFame";
import Hero from "@components/Header/Hero";
import LongNavbar from "@components/Header/LongNavbar";
import InstructorsBoard from "@components/InstructorsBoard/InstructorsBoard";
import { JobProspects } from "@components/JobProspects";
import OurInstitutionPartners from "@components/OurInstitutionPartners";
import OurProducts from "@components/OurProducts";

export default function HomePage() {
  return (
    <>
      <LongNavbar />

      <main className="mt-[150px] flex flex-col gap-[150px]">
        <Hero />
        <CoursesSlideShow />
        <InstructorsBoard />
        <JobProspects />
        <HackathonSection />
        <HallOfFame />
        <OurProducts />
        <OurInstitutionPartners />
      </main>

      <Footer />
    </>
  );
}
