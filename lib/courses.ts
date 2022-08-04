export interface IProgram {
  title: string;
  programs: {
    title: string;
    coverImgURL: string;
    tags: string[];
    isLive?: boolean;
    price?: number;
    link: string;
  }[];
}

export const liveCourses: IProgram = {
  title: "Live Programs",
  programs: [
    {
      coverImgURL: "/live-programs/62eaa6ba766d6539c53164bd.jpeg",
      title: "Full Stack Data Science BootCamp 2.0",
      tags: ["Python", "Data Science", "Machine Learning"],
      isLive: true,
      price: 17700,
      link: "https://ineuron.ai/course/Full-Stack-Data-Science-BootCamp-2.0",
    },
    {
      coverImgURL: "/live-programs/62d142aa5af3c767d4428edf.jpeg",
      title: "DSA for FAANG preparation with Python and JavaScript",
      tags: ["Python", "JavaScript", "DataStructures", "Algorithms"],
      isLive: true,
      price: 4000,
      link: "https://ineuron.ai/course/DSA-for-FAANG-preparation-with-Python-and-JavaScript",
    },
    {
      coverImgURL: "/live-programs/62cbe68f696079a76b3d5d89.jpeg",
      title: "Full Stack Web Development using Python in Hindi | Marketing",
      tags: ["Python", "React JS", "Web Development"],
      isLive: true,
      price: 4000,
      link: "https://ineuron.ai/course/Full-Stack-Web-Development-using-Python-in-Hindi",
    },
    {
      coverImgURL: "/live-programs/62dc015a8a6db0614a457d66.jpeg",
      title: "YouTube Mastery Batch 2 in Hindi | Marketing",
      tags: ["Marketing", "YouTube", "YouTube Mastery"],
      isLive: true,
      price: 7000,
      link: "https://ineuron.ai/course/YouTube-Mastery-Batch-2-in-Hindi",
    },

    {
      coverImgURL: "/live-programs/62dbfcbf8a6db091f84577dd.jpeg",
      title: "Digital Marketing Batch 2 in Hindi | Marketing",
      tags: ["Marketing", "YouTube", "YouTube Mastery"],
      isLive: true,
      price: 11000,
      link: "https://ineuron.ai/course/Digital-Marketing-Batch-2-in-Hindi",
    },

    {
      coverImgURL: "/live-programs/62d144bf5af3c72263428ffd.jpeg",
      title: "Advance Facebook Marketing Course in Hindi | Marketing",
      tags: ["Marketing", "Facebook", "Facebook Mastery"],
      isLive: true,
      price: 3000,
      link: "https://ineuron.ai/course/Advance-Facebook-Marketing-Course-in-Hindi",
    },
  ],
};

export const affordableCourses: IProgram = {
  title: "Affordable Programs",
  programs: [
    {
      coverImgURL: "/affordable-programs/62d6f2a3ff20c44ee55d33fe.jpeg",
      title: "Full Stack Django with React",
      tags: ["Python", "Web Development"],
      price: 499,
      link: "https://ineuron.ai/course/Full-Stack-Django-with-React",
    },
    {
      coverImgURL: "/affordable-programs/62d6f2a3ff20c44ee55d33fe.jpeg",
      title: "Mastering DSA with Java",
      tags: ["Java", "Data Structures", "Algorithms"],
      price: 499,
      link: "https://ineuron.ai/course/Mastering-DSA-with-Java",
    },
    {
      coverImgURL: "/affordable-programs/62d6ec73ff20c421655d3024.jpeg",
      title: "Full Stack Django with React",
      tags: ["Web Development", "Python", "React JS", "Django"],
      price: 499,
      link: "https://ineuron.ai/course/Full-Stack-Django-with-React",
    },
    {
      coverImgURL: "/affordable-programs/62d70179ff20c4325c5d3a80.jpeg",
      title: "Android P with Machine Learning",
      tags: ["Android", "Machine Learning"],
      price: 499,
      link: "https://ineuron.ai/course/Android-P-with-Machine-Learning-Apps",
    },
    {
      coverImgURL: "/affordable-programs/62d708caff20c438ab5d3d0f.jpeg",
      title: "Mastering DSA with C++",
      tags: ["C++", "Data Structures", "Algorithms"],
      price: 499,
      link: "https://ineuron.ai/course/Mastering-DSA-with-C++",
    },
  ],
};

export const communityCourses: IProgram = {
  title: "Community Programs",
  programs: [
    {
      coverImgURL: "/community-programs/62d19eca5af3c72ff2429437.jpeg",
      title: "Build an Ecommerce with ReactJS",
      tags: ["Python", "Web Development"],
      price: 0,
      link: "https://ineuron.ai/course/Build-an-Ecommerce-with-ReactJS",
    },
    {
      coverImgURL: "/community-programs/62d1acb95af3c72503429884.jpeg",
      title: "Write quicker HTML5 and CSS 3",
      tags: ["HTML", "CSS", "Emmet"],
      price: 0,
      link: "https://ineuron.ai/course/Write-quicker-HTML5-and-CSS-3;-productivity-hacks-with-emmet4",
    },
    {
      coverImgURL: "/community-programs/62d1a08d5af3c74c7a4294a6.jpeg",
      title: "Publishing Custom Cocoapads",
      tags: ["Cocopads"],
      price: 0,
      link: "https://ineuron.ai/course/Publishing-Custom-Cocoapads",
    },
    {
      coverImgURL: "/community-programs/62d18e235af3c732c0429307.jpeg",
      title: "ReactJS Crash Course",
      tags: ["React JS", "Crash Course"],
      price: 0,
      link: "https://ineuron.ai/course/ReactJS-Crash-Course",
    },
  ],
};
