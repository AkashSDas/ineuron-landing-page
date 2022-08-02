import PrimaryButton from "@components/Button/PrimaryButton";
import { HackathonSection } from "@components/Hackathon";
import { HallOfFame } from "@components/HallOfFame";
import { Hero } from "@components/Hero/Hero";
import { ArrowRight2 } from "@components/Icons/ArrowRight2";
import { InstructorSection } from "@components/InstructorsSection";
import { JobProspects } from "@components/JobProspects";
import Navbar from "@components/Navbar/index";
import OurProducts from "@components/OurProducts";
import { Programs } from "@components/Programs/index";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="mt-[150px] flex flex-col gap-[150px]">
        <Hero />
        <Programs />
        <InstructorSection />
        <JobProspects />
        <HackathonSection />
        <HallOfFame />
        <OurProducts />
      </main>
    </>
  );
}
