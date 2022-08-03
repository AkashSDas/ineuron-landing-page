import { useContext, useEffect } from "react";

import CoursesSlideShow from "@components/CoursesSlideShow/CoursesSlideShow";
import Footer from "@components/Footer";
import Hackathon from "@components/Hackathon/Hackathon";
import HallOfFame from "@components/HallOfFame/HallOfFame";
import Hero from "@components/Header/Hero";
import LongNavbar from "@components/Header/LongNavbar";
import SearchModal from "@components/Header/SearchModal";
import SmallNavbar from "@components/Header/SmallNavbar";
import SmallNavbarMenu from "@components/Header/SmallNavbarMenu";
import InstructorsBoard from "@components/InstructorsBoard/InstructorsBoard";
import JobProspects from "@components/JobProspects/JobProspects";
import OurInstitutionPartners from "@components/OurInstitutionPartners";
import OurProducts from "@components/OurProducts/OurProducts";
import { SearchModalContext, SmallNavbarContext } from "@lib/context";

export default function HomePage() {
  const { isOpen } = useContext(SmallNavbarContext);
  const { searchModalIsOpen, setSearchModalIsOpen } =
    useContext(SearchModalContext);

  useEffect(() => {
    if (searchModalIsOpen) {
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
    }
  }, [searchModalIsOpen]);

  return (
    <div className="-visible">
      <LongNavbar />
      <SmallNavbar />
      {searchModalIsOpen ? <SearchModal /> : null}

      <main className={`mt-[150px] flex flex-col gap-[150px]`}>
        {isOpen ? <SmallNavbarMenu /> : null}
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
