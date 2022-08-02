import Slider from "react-slick";

import TextButton from "@components/Button/TextButton";
import { hallOfFame } from "@lib/hall-of-fame";
import styles from "@styles/components/HallOfFame/HallOfFame.module.scss";

import HallOfFameCard from "./HallOfFameCard";

function HallOfFame() {
  const settings = {
    dot: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.75,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    cssEase: "cubic-bezier(0.85, 0, 0.15, 1)",
  };

  return (
    <section>
      <div className={styles.heading}>
        <h3 className="h3 text-dark-violet">Hall of Fame</h3>
        <TextButton label="View More" />
      </div>

      <Slider {...settings} className="w-full">
        {hallOfFame.map((u) => (
          <HallOfFameCard
            bio={u.bio}
            name={u.name}
            profilePicURL={u.profilePicURL}
            role={u.role}
            socialMedia={u.socialMedia}
          />
        ))}
      </Slider>
    </section>
  );
}

export default HallOfFame;
