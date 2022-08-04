export interface IInstructors {
  profilePicURL: string;
  fullName: string;
  role: string;
  socialMedia: {
    linkedin?: string;
    youtube?: string;
  };
}

export const instructors: IInstructors[] = [
  {
    profilePicURL: "/instructor-profile-pics/saksham-square.png",
    fullName: "Saksham Choudhary",
    role: "Cyber Security Lead",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/saksham-choudhary-6920651a2/",
      youtube: "https://www.youtube.com/c/SakshamTheComputerGuy",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/sudhanshu-square.png",
    fullName: "Sudhanshu Kumar",
    role: "AI Engineer & CEO",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/-sudhanshu-kumar/",
      youtube: "https://www.youtube.com/c/sudhanshukumarall",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/hitesh-square.png",
    fullName: "Hitesh Choudhary",
    role: "CTO",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/hiteshchoudhary/",
      youtube: "https://www.youtube.com/c/HiteshChoudharydotcom",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/krish-square.png",
    fullName: "Krish Naik",
    role: "CIO",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/naikkrish/",
      youtube: "https://www.youtube.com/user/krishnaik06",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/telusko-square.png",
    fullName: "Navin Reddy",
    role: "Senior VP",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/navinreddy20/",
      youtube: "https://www.youtube.com/c/Telusko",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/Kiran-Sahu-square.png",
    fullName: "Kiran Sahu",
    role: "Mentor",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/kiran-sahu-qa/",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/amresh-square.png",
    fullName: "Amresh Bharti",
    role: "VP Marketing",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/amresh-bharti-571122166/",
      youtube: "https://www.youtube.com/c/MahatmajiTechnical",
    },
  },
  {
    profilePicURL: "/instructor-profile-pics/mysirg-square.png",
    fullName: "Saurabh Shukla",
    role: "Senior VP",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/saurabh-shukla-5b73bb6/",
      youtube: "https://www.youtube.com/user/saurabhexponent1",
    },
  },
];
