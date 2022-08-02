import Slider from "react-slick";

import TextButton from "@components/Button/TextButton";
import { Linkedin } from "@components/Icons/Linkedin";
import { YouTube } from "@components/Icons/YouTube";

export const HallOfFame = () => {
  const settings = {
    dot: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.75,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-out",
    centerMode: true,
  };

  const data = [
    {
      profilePicURL: "user-1",
      name: "Matthew Olaoluwa",
      role: "Internet Security Assistant",
      bio: "Pop culture ninja. Incurable web advocate. Typical bacon expert. Infuriatingly humble alcohol guru. Wannabe tv geek.",
      socialMedia: {
        youTube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
        linkedin: "https://www.linkedin.com/in/matthew-olaoluwa-b9a8b917b/",
      },
    },
    {
      profilePicURL: "user-2",
      name: "Hellen Jummy",
      role: "Medical Assistant",
      bio: "I am excited about helping companies with their product development, management and strategy. I specialize in deep tech and hard analytical...",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/matthew-olaoluwa-b9a8b917b/",
      },
    },
    {
      profilePicURL: "user-3",
      name: "Cameron Williamson",
      role: "Computer Technical Support Specialist",
      bio: "My name is Jay Prakash Bind completed my B. Tech Computer Science and Engineering from Bundelkhand University, Jhansi. I rece",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/matthew-olaoluwa-b9a8b917b/",
      },
    },
    {
      profilePicURL: "user-1",
      name: "Matthew Olaoluwa",
      role: "Internet Security Assistant",
      bio: "Pop culture ninja. Incurable web advocate. Typical bacon expert. Infuriatingly humble alcohol guru. Wannabe tv geek.",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/matthew-olaoluwa-b9a8b917b/",
      },
    },
    {
      profilePicURL: "user-2",
      name: "Hellen Jummy",
      role: "Medical Assistant",
      bio: "I am excited about helping companies with their product development, management and strategy. I specialize in deep tech and hard analytical...",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/matthew-olaoluwa-b9a8b917b/",
      },
    },
    {
      profilePicURL: "user-3",
      name: "Cameron Williamson",
      role: "Computer Technical Support Specialist",
      bio: "My name is Jay Prakash Bind completed my B. Tech Computer Science and Engineering from Bundelkhand University, Jhansi. I rece",
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/matthew-olaoluwa-b9a8b917b/",
      },
    },
  ];

  return (
    <section>
      <div className="flex justify-between items-center w-[80%] mr-auto ml-auto mb-[2.5rem]">
        <h3 className="text-[40px] text-dark-violet">Hall of Fame</h3>
        <TextButton label="View More" />
      </div>

      <Slider {...settings} className="w-full">
        {data.map((user) => (
          <Card user={user} />
        ))}
      </Slider>
    </section>
  );
};

function Card({ user }) {
  return (
    <div className="w-[400px] p-8 rounded-[30px] border-white border-2 border-solid bg-light-purple flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <img
          className="w-[80px] h-[80px] object-coverj rounded-[50%]"
          src={`/users/${user.profilePicURL}.png`}
          alt={user.name}
        />

        <div className="flex flex-row gap-2 items-center">
          {user.socialMedia.youTube ? <YouTube /> : null}
          {user.socialMedia.linkedin ? <Linkedin /> : null}
        </div>
      </div>

      <h3 className="text-[18px] font-medium text-black">{user.name}</h3>
      <p className="text-[13px] font-normal text-black">{user.role}</p>
      <p className="text-[13px] font-normal text-grey">{user.bio}</p>
    </div>
  );
}
