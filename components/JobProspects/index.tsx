import Slider from "react-slick";

import { ArrowRight2 } from "@components/Icons/ArrowRight2";

export const JobProspects = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-out",
    centerMode: true,
  };

  const companies = [
    "cohesity",
    "eminds",
    "freshworks",
    "greendeck",
    "informatica",
    "kpmg",
    "learnyst",
    "odessa",
  ];

  const companies2 = [
    "redbus",
    "robosoft",
    "tataiq",
    "thoughtworks",
    "wellnesys",
    "wipro",
    "wissen",
    "zensar",
  ];

  return (
    <section className="p-12 flex flex-col justify-center items-center gap-8">
      <h2 className="font-medium text-[60px] text-center text-dark-violet">
        Become ready to work at <br /> MNCs and Startups
      </h2>

      <p className="font-medium text-[23px] text-center text-grey w-[600px]">
        Our 10K+ students have got placed and our top achievers are working in
        the following companies
      </p>

      <button className="h-[50px] flex items-center justify-center gap-[12px] text-white bg-violet px-[2rem] rounded-full hover:brightness-90">
        Get Started <ArrowRight2 className="stroke-white" />
      </button>

      <Slider
        {...settings}
        className="-rotate-1 mt-[6.125rem] w-screen overflow-hidde flex gap-8 items-center justify-center"
      >
        {companies.map((company) => (
          <CompanyCard imgURL={`/companies/${company}.png`} />
        ))}
      </Slider>

      <Slider
        {...settings}
        rtl={true}
        className="-rotate-1 mt-[1rem] w-screen overflow-hidde flex gap-8 items-center justify-center"
      >
        {companies2.map((company) => (
          <CompanyCard imgURL={`/companies/${company}.png`} />
        ))}
      </Slider>
    </section>
  );
};

const CompanyCard = ({ imgURL }) => {
  return (
    <div className="p-2 w-[316px] h-[86px] rounded-[28px] border-solid border-4 border-white bg-light-purple">
      <img
        className="mix-blend-luminosity hover:mix-blend-normal w-full h-full object-contain transition-all duration-300 ease-in-out"
        src={imgURL}
      />
    </div>
  );
};
