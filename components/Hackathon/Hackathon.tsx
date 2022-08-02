import Slider from "react-slick";

import styles from "@styles/components/Hackathon/Hackathon.module.scss";

function Hackathon() {
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
    cssEase: "cubic-bezier(0.85, 0, 0.15, 1)",
    centerMode: true,
  };

  const CompanyCard = ({ url }) => (
    <div className={styles["company-card"]}>
      <img className={styles["company-img"]} src={url} />
    </div>
  );

  return (
    <section className={styles.wrapper}>
      <div className={styles.heading}>
        <h2 className="h2">Hackathon</h2>

        <p className={styles.description}>
          Our 24 hour offline coding events such as{" "}
          <span className="text-dark-violet">Hack-a-thons</span>,{" "}
          <span className="text-dark-violet">Job-a-thons</span> and{" "}
          <span className="text-dark-violet">Course-a-thons</span> give
          participants an opportunity to exhibit their skills and receive prizes
          for completing courses, or get recruited for their skillset.
        </p>

        <div>
          <h5 className={styles.subtitle}>Partner Companies</h5>

          <Slider {...settings} className="w-full">
            {companies.map((company) => (
              <CompanyCard url={`/companies/${company}.png`} />
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
}

export default Hackathon;
