import Slider from "react-slick";

import TextButton from "@components/Button/TextButton";
import { Linkedin } from "@components/Icons/Linkedin";
import { YouTube } from "@components/Icons/YouTube";

const instructors = [
  {
    profilePicURL: "/instructor-profile-pics/sunny-bhaveen-chandra.png",
    fullName: "Sunny Bhaveen Chandra",
    role: "AI Engineer & CEO",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sunny-bhaveen-chandra-b9a8b9a8/",
      youTube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
    },
  },

  {
    profilePicURL: "/instructor-profile-pics/sunny-bhaveen-chandra.png",
    fullName: "Sunny Bhaveen Chandra",
    role: "AI Engineer & CEO",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sunny-bhaveen-chandra-b9a8b9a8/",
      youTube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/sunny-bhaveen-chandra.png",
    fullName: "Sunny Bhaveen Chandra",
    role: "AI Engineer & CEO",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sunny-bhaveen-chandra-b9a8b9a8/",
      youTube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
    },
  },

  {
    profilePicURL: "/instructor-profile-pics/sunny-bhaveen-chandra.png",
    fullName: "Sunny Bhaveen Chandra",
    role: "AI Engineer & CEO",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sunny-bhaveen-chandra-b9a8b9a8/",
      youTube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/sunny-bhaveen-chandra.png",
    fullName: "Sunny Bhaveen Chandra",
    role: "AI Engineer & CEO",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sunny-bhaveen-chandra-b9a8b9a8/",
      youTube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/sunny-bhaveen-chandra.png",
    fullName: "Sunny Bhaveen Chandra",
    role: "AI Engineer & CEO",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sunny-bhaveen-chandra-b9a8b9a8/",
      youTube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/sunny-bhaveen-chandra.png",
    fullName: "Sunny Bhaveen Chandra",
    role: "AI Engineer & CEO",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sunny-bhaveen-chandra-b9a8b9a8/",
      youTube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
    },
  },
];

export const InstructorSection = () => {
  return (
    <section className="w-full">
      <h3 className="text-center mb-8 text-dark-violet text-[60px]">
        Learn from the <span className="font-bold">BEST</span>
      </h3>

      <div className="flex gap-[2rem] justify-center">
        {instructors.map((instructor) => (
          <InstructorCard instructor={instructor} />
        ))}
      </div>

      <div className="mt-8 grid place-content-center">
        <TextButton label="View More" />
      </div>
    </section>
  );
};

const InstructorCard = ({ instructor }) => {
  return (
    <div className="rounded-lg relative h-[360px] w-[120px] hover:w-[240px] transition-all duration-500 ease-out origin-center group">
      <div className="rounded-lg absolute w-full h-full bg-[#0000005a]"></div>

      <img
        className="rounded-lg w-full h-full object-cover"
        src={instructor.profilePicURL}
        alt={instructor.fullName}
      />

      <div className="p-4 absolute bottom-0 left-0 right-0 flex flex-col gap-2 justify-center items-center">
        <p className="transition-all duration-300 ease-in-out text-center font-semibold text-white text-[15px]">
          {instructor.fullName}
        </p>
        <p className="transition-all duration-300 ease-in-out group-hover:block text-center font-normal text-white text-[13px] hidden">
          {instructor.role}
        </p>

        <div className="transition-all duration-300 ease-in-out group-hover:flex hidden  items-center justify-center gap-4 border-solid border-white border-[1.5px] bg-light-purple rounded-[6px] w-max">
          {instructor.socialMedia.linkedin ? <Linkedin /> : null}
          {instructor.socialMedia.youTube ? <YouTube /> : null}
        </div>
      </div>
    </div>
  );
};
