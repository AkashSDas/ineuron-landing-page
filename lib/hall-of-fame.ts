export interface IHallOfFame {
  profilePicURL: string;
  name: string;
  role: string;
  bio: string;
  socialMedia: {
    youtube?: string;
    linkedin?: string;
  };
}

export const hallOfFame: IHallOfFame[] = [
  {
    profilePicURL: "user-1",
    name: "Matthew Olaoluwa",
    role: "Internet Security Assistant",
    bio: "Pop culture ninja. Incurable web advocate. Typical bacon expert. Infuriatingly humble alcohol guru. Wannabe tv geek.",
    socialMedia: {
      youtube: "https://www.youtube.com/channel/UC-lHJZR3Gqxm24_Vd_AJ5Yw",
      linkedin: "https://www.linkedin.com/in/matthew-olaoluwa-b9a8b917b/",
    },
  },
  {
    profilePicURL: "user-2",
    name: "Hellen Jummy",
    role: "Medical Assistant",
    bio: "I am excited about helping companies with their product development, management and strategy.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/matthew-olaoluwa-b9a8b917b/",
    },
  },
  {
    profilePicURL: "user-3",
    name: "Cameron Williamson",
    role: "Computer Technical Support Specialist",
    bio: "My name is Jay Prakash Bind completed my B. Tech Computer Science and Engineering from Bundelkhand.",
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
    bio: "I am excited about helping companies with their product development, management and strategy.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/matthew-olaoluwa-b9a8b917b/",
    },
  },
  {
    profilePicURL: "user-3",
    name: "Cameron Williamson",
    role: "Computer Technical Support Specialist",
    bio: "My name is Jay Prakash Bind completed my B. Tech Computer Science and Engineering from Bundelkhand.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/matthew-olaoluwa-b9a8b917b/",
    },
  },
];
