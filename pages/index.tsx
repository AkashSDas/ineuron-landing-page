import CoursesSlideShow from "@components/CoursesSlideShow/CoursesSlideShow";
import Footer from "@components/Footer";
import Hackathon from "@components/Hackathon/Hackathon";
import HallOfFame from "@components/HallOfFame/HallOfFame";
import Hero from "@components/Header/Hero";
import LongNavbar from "@components/Header/LongNavbar";
import InstructorsBoard from "@components/InstructorsBoard/InstructorsBoard";
import JobProspects from "@components/JobProspects/JobProspects";
import OurInstitutionPartners from "@components/OurInstitutionPartners";
import OurProducts from "@components/OurProducts/OurProducts";

export default function HomePage() {
  return (
    <div className="-visible">
      <LongNavbar />

      <main className="mt-[150px] flex flex-col gap-[150px]">
        <Hero />
        <CoursesSlideShow />
        <InstructorsBoard />
        <JobProspects />
        <Hackathon />
        <HallOfFame />
        <OurProducts />
        <OurInstitutionPartners />
      </main>

      <Footer />
    </div>
  );
}
