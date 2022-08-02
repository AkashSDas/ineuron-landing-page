import Slider from "react-slick";

export const HackathonSection = () => {
  const companies = [
    "redbus",
    "robosoft",
    "tataiq",
    "thoughtworks",
    "wellnesys",
    "wipro",
    "wissen",
    "zensar",
  ];

  const settings = {
    dot: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1.35,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-out",
    centerMode: true,
  };

  return (
    <section className="w-4/5 mr-auto ml-auto flex gap-4 justify-between items-center">
      <div className="w-2/4 flex flex-col gap-8">
        <h2 className="font-medium text-[60px] text-dark-violet">Hackathon</h2>

        <p className="font-medium text-grey">
          Our 24 hour offline coding events such as{" "}
          <span className="text-dark-violet">Hack-a-thons</span>,{" "}
          <span className="text-dark-violet">Job-a-thons</span> and{" "}
          <span className="text-dark-violet">Course-a-thons</span> give
          participants an opportunity to exhibit their skills and receive prizes
          for completing courses, or get recruited for their skillset.
        </p>

        <div>
          <h3 className="mb-8 text-[23px] text-dark-violet font-medium">
            Partner Companies
          </h3>

          <Slider {...settings} className="w-full">
            {companies.map((company) => (
              <CompanyCard imgURL={`/companies/${company}.png`} />
            ))}
          </Slider>
        </div>
      </div>

      <img
        className="mix-blend-luminosity"
        src="/hackathon.png"
        alt="Hackathon"
      />
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
