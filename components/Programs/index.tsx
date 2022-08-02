import { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import CourseCard from "@components/CoursesSlideShow/CourseCard";
import CoursesSlideShowDropDown from "@components/CoursesSlideShow/CoursesSlideShowDropDown";
import { ArrowDown } from "@components/Icons/ArrowDown";
import { ProgramDropDownContext } from "@lib/context";

export const Programs = () => {
  const programsTitles = [livePrograms, affordablePrograms].map(
    (prg) => prg.title
  );
  const programs = [livePrograms, affordablePrograms];
  const [program, setProgram] = useState(livePrograms);
  const [isOpen, setIsOpen] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-out",
    centerMode: true,
  };

  return (
    <ProgramDropDownContext.Provider value={{ isOpen, setIsOpen }}>
      <section className="">
        <div className="">
          <h2 className="">{program.title}</h2>

          <div className="flex items-center gap-[2rem]">
            <button className="text-dark-violet px-[2rem] h-[50px] hover:bg-light-purple rounded-full">
              View More
            </button>
            <CoursesSlideShowDropDown
              program={program}
              programsTitles={programsTitles}
              setProgram={setProgram}
              programs={programs}
            />
          </div>
        </div>

        <Slider {...settings} className="w-full z-[-1]" arrows={false}>
          {program.programs.map((prg) => (
            <CourseCard
              coverImgURL={prg.coverURL}
              title={prg.title}
              tags={prg.tags}
              isLive={prg.live as any}
            />
          ))}
        </Slider>
      </section>
    </ProgramDropDownContext.Provider>
  );
};
