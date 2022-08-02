export interface IProgram {
  title: string;
  programs: {
    title: string;
    coverImgURL: string;
    tags: string[];
    isLive?: boolean;
    price?: number;
  }[];
}

export const liveCouses: IProgram = {
  title: "Live Programs",
  programs: [
    {
      coverImgURL: "/live-programs/python-web-dev.png",
      title: "Python Web Development",
      tags: ["Python", "Web Development", "React JS"],
      isLive: true,
    },

    {
      coverImgURL: "/live-programs/big-data-bootcamp.png",
      title: "Big Data Bootcamp | Job Guaranteed",
      tags: ["Job Guaranteed", "Python"],
      isLive: true,
    },
    {
      coverImgURL: "/live-programs/advance-facebook-marketing.png",
      title: "Advance Facebook Marketing",
      tags: ["Marketing", "Facebook"],
      isLive: true,
    },
    {
      coverImgURL: "/live-programs/python-web-dev.png",
      title: "Data Structures and Algorithms",
      tags: ["DataStructures", "Algorithms", "Python", "JavaScript"],
      isLive: true,
    },
    {
      coverImgURL: "/live-programs/python-web-dev.png",
      title: "Big Data Bootcamp | Job Guaranteed",
      tags: ["Job Guaranteed", "Python", "Web Development"],
      isLive: true,
    },
  ],
};

export const affordableCourses = {
  title: "Affordable Programs",
  programs: [
    {
      coverImgURL: "/live-programs/python-web-dev.png",
      title: "Python Web Development",
      tags: ["Python", "Web Development", "React JS"],
      isLive: false,
      price: 399.99,
    },

    {
      coverImgURL: "/live-programs/big-data-bootcamp.png",
      title: "Big Data Bootcamp | Job Guaranteed",
      tags: ["Job Guaranteed", "Python"],
      isLive: false,
      price: 399.99,
    },
    {
      coverImgURL: "/live-programs/advance-facebook-marketing.png",
      title: "Advance Facebook Marketing",
      tags: ["Marketing", "Facebook"],
      isLive: false,
      price: 399.99,
    },
    {
      coverImgURL: "/live-programs/python-web-dev.png",
      title: "Data Structures and Algorithms",
      tags: ["DataStructures", "Algorithms", "Python", "JavaScript"],
      isLive: false,
      price: 399.99,
    },
    {
      coverImgURL: "/live-programs/python-web-dev.png",
      title: "Big Data Bootcamp | Job Guaranteed",
      tags: ["Job Guaranteed", "Python", "Web Development"],
      isLive: false,
      price: 399.99,
    },
  ],
};
