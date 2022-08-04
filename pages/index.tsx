import { AnimatePresence } from "framer-motion";
import Head from "next/head";
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
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
          type="text/css"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📺</text></svg>"
        />

        <title>iNeuron</title>
      </Head>

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
