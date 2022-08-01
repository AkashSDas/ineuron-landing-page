import { useContext, useEffect, useRef, useState } from "react";
import Slider from "react-slick";

import { ArrowDown } from "@components/Icons/ArrowDown";
import { ProgramDropDownContext } from "@lib/context";

const livePrograms = {
  title: "Live Programs",
  programs: [
    {
      id: "634w34s4",
      coverURL: "/live-programs/python-web-dev.png",
      title: "Python Web Development",
      tags: ["Python", "Web Development", "React JS"],
      live: true,
    },

    {
      id: "8uyf6fr",
      coverURL: "/live-programs/big-data-bootcamp.png",
      title: "Big Data Bootcamp | Job Guaranteed",
      tags: ["Job Guaranteed", "Python"],
      live: true,
    },
    {
      id: "90um0u9j",
      coverURL: "/live-programs/advance-facebook-marketing.png",
      title: "Advance Facebook Marketing",
      tags: ["Marketing", "Facebook"],
      live: true,
    },
    {
      id: "p9n8pyn7t",
      coverURL: "/live-programs/python-web-dev.png",
      title: "Data Structures and Algorithms",
      tags: ["DataStructures", "Algorithms", "Python", "JavaScript"],
      live: true,
    },
    {
      id: "9un07tb8t7",
      coverURL: "/live-programs/python-web-dev.png",
      title: "Big Data Bootcamp | Job Guaranteed",
      tags: ["Job Guaranteed", "Python", "Web Development"],
      live: true,
    },
  ],
};

const affordablePrograms = {
  title: "Affordable Programs",
  programs: [
    {
      id: "634w34s4",
      coverURL: "/live-programs/python-web-dev.png",
      title: "Python Web Development",
      tags: ["Python", "Web Development", "React JS"],
      live: false,
      price: "399.99",
    },

    {
      id: "8uyf6fr",
      coverURL: "/live-programs/big-data-bootcamp.png",
      title: "Big Data Bootcamp | Job Guaranteed",
      tags: ["Job Guaranteed", "Python"],
      live: false,
      price: "399.99",
    },
    {
      id: "90um0u9j",
      coverURL: "/live-programs/advance-facebook-marketing.png",
      title: "Advance Facebook Marketing",
      tags: ["Marketing", "Facebook"],
      live: false,
      price: "399.99",
    },
    {
      id: "p9n8pyn7t",
      coverURL: "/live-programs/python-web-dev.png",
      title: "Data Structures and Algorithms",
      tags: ["DataStructures", "Algorithms", "Python", "JavaScript"],
      live: false,
      price: "399.99",
    },
    {
      id: "9un07tb8t7",
      coverURL: "/live-programs/python-web-dev.png",
      title: "Big Data Bootcamp | Job Guaranteed",
      tags: ["Job Guaranteed", "Python", "Web Development"],
      live: false,
      price: "399.99",
    },
  ],
};

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
      <section className="flex flex-col justify-center items-center gap-[3rem]">
        <div className="flex justify-between items-center w-full px-[8rem]">
          <h2 className="text-dark-violet text-[40px] font-medium">
            {program.title}
          </h2>

          <div className="flex items-center gap-[2rem]">
            <button className="text-dark-violet px-[2rem] h-[50px] hover:bg-light-purple rounded-full">
              View More
            </button>
            <DropDown
              program={program}
              programsTitles={programsTitles}
              setProgram={setProgram}
              programs={programs}
            />
          </div>
        </div>

        <Slider {...settings} className="w-full z-[-1]" arrows={false}>
          {program.programs.map((prg) => (
            <CourseCard course={prg} />
          ))}
        </Slider>
      </section>
    </ProgramDropDownContext.Provider>
  );
};

const DropDown = ({ program, programsTitles, setProgram, programs }) => {
  const { isOpen, setIsOpen } = useContext(ProgramDropDownContext);
  const ref = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (e.path[0] !== ref.current) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropDown);

    () => document.body.removeEventListener("click", closeDropDown);
  }, []);

  return (
    <div className="relative">
      <button
        ref={ref}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center gap-[10px] border-2 border-white border-solid bg-light-purple rounded-[12px] px-[1rem] h-[50px]"
      >
        {program.title} <ArrowDown className="stroke-black" />
      </button>

      {isOpen && (
        <div className="absolute text-[15px] w-full bg-light-purple border-2 border-solid border-white rounded-[12px] shadow-default top-[58px] px-[4px] py-[6px]">
          {programsTitles
            .filter((t) => t !== program.title)
            .map((t) => (
              <div
                className="px-[2px] py-[6px] z-10 hover:bg-light-violet rounded-[6px] cursor-pointer"
                onClick={() => {
                  setProgram(programs.filter((prg) => prg.title === t)[0]);
                  setIsOpen(false);
                }}
              >
                {t}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

const CourseCard = ({ course }) => {
  // bg-light-purple border-2 border-white border-solid rounded-[12px] p-2
  return (
    <div className="w-[360px] flex flex-col gap-[10px] cursor-pointer">
      <div className="relative">
        <img
          className="w-[360px] h-[200px] rounded-[12px]"
          src={course.coverURL}
          alt={course.title}
        />

        <div className="flex gap-2 items-center absolute top-[80%] right-2">
          {course.live ? (
            <span className="text-[15px] text-dark-violet font-medium bg-light-purple px-2 py-1 rounded-[8px]">
              Live
            </span>
          ) : null}

          {course.price ? (
            <span className="text-[15px] text-dark-violet font-medium bg-light-purple px-2 py-1 rounded-[8px]">
              ₹{course.price}
            </span>
          ) : null}
        </div>
      </div>

      <h3 className="text-[18px] font-semibold text-black">{course.title}</h3>

      <div className="flex flex-wrap gap-2">
        {course.tags.map((t) => (
          <span
            key={t}
            className="text-[13px] text-violet bg-light-purple p-1 rounded-[6px]"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};
