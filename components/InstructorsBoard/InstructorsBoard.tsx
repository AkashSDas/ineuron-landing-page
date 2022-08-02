import Slider from "react-slick";

import TextButton from "@components/Button/TextButton";
import { instructors } from "@lib/instructors";
import styles from "@styles/components/InstructorsGrid/InstructorsBoard.module.scss";

import InstructorGridCard from "./InstructorsGridCard";

function InstructorsBoard() {
  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: instructors.length > 7 ? 7 : instructors.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "cubic-bezier(0.85, 0, 0.15, 1)",
    centerMode: true,
    arrows: false,
    dot: false,
    variableWidth: true,
  };

  return (
    <section className={styles.wrapper}>
      <h2 className="h2 text-center mb-8">
        Learn from the <span className="text-stroke">BEST</span>
      </h2>

      <div className={styles.board}>
        {instructors.map((i) => (
          <InstructorGridCard
            key={i.fullName}
            fullName={i.fullName}
            profilePicURL={i.profilePicURL}
            role={i.role}
            socialMedia={i.socialMedia}
          />
        ))}
      </div>

      {/* <Slider {...settings} className="">
        {instructors.map((i) => (
          <InstructorGridCard
            key={i.fullName}
            fullName={i.fullName}
            profilePicURL={i.profilePicURL}
            role={i.role}
            socialMedia={i.socialMedia}
          />
        ))}
      </Slider> */}
    </section>
  );
}

export default InstructorsBoard;
