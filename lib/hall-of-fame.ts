export interface IHallOfFame {
  profilePicURL: string;
  name: string;
  role: string;
  bio: string;
  socialMedia: {
    youtube?: string;
    linkedin?: string;
  };
  link: string;
}

export const hallOfFame: IHallOfFame[] = [
  {
    profilePicURL: "62da527da9f208001ac1b1cb",
    name: "Sameer Kumar",
    role: "Bajaj Finserv, Data Scientist",
    bio: "Hello everyone, My name is Sameer Kumar and I am a final year B.Tech student from Symbiosis Institute of Technology, Pune. I recently got placed at Bajaj Finserv as a Data Scientist for a 13LPA package. I am really grateful to Krish sir, Sudhanshu Sir and the entire iNeuron team for their amazing content related to Data Science. My journey to get placed as a data scientist was just amazing. I first started learning Data Science in my 2nd year of college where I first got familiar with basics of Python and their libraries like Pandas, Numpy etc and then I moved on to Machine Learning and Statistics. I also made some personal projects in that domain and after gaining confidence, I moved to Deep Learning . One thing I got to know is that understanding of maths behind the algorithms is very important along with the implementation. I also did a 7-8 months of research internship in the NLP domain at SCAAI and published a paper too. I also got the opportunity to work in Philips consultancy project where I gained some valuable experience. I was always very active on kaggle and published kaggle kernels and I also became a Kaggle Master. I also published 12-15 articles related to data science on Medium. All these activities really helped me boost my confidence and my resume.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/sameer-kumar-20988b1a6/",
    },
    link: "https://halloffame.ineuron.ai/achiever/Sameer-Kumar-DKihfj",
  },
  {
    profilePicURL: "62da4c5ea9f208001ac1ad2a",
    name: "Chitra Patgar",
    role: "Cognizant(genc next)",
    bio: "I have enrolled for your ML course two years back , Python you taught in that course was awesome due to which I have cracked about 5 interview and concepts were also so much cleared . Thanks sir, now I have enrolled for your Enterprise Java and spring boot to learn about java as my company has asked me to learn it. Now whenever I want to learn it I will always choose iNeuron Thanks sir and team for amazing guidance and syllabus",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/chitrapatgar/",
    },
    link: "https://halloffame.ineuron.ai/achiever/Chitra-Patgar-fKIBuJ",
  },
  {
    profilePicURL: "62dfd8aea9f208001ac41204",
    name: "Aakash B",
    role: "Amazon , Software Development Engineer 1",
    bio: "I was following Krish Sir YouTube channel for more than 2-3 year. I learnt Machine Learning and Deep Learning from him. I learnt basics of big data from Sudhanshu sir. During my bar raiser interviews at Amazon, i was able to explain my project and concepts behind it very easily. He was quite impressed. Thanks Krish sir for amazing content on YouTube",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/akb7/",
    },
    link: "https://halloffame.ineuron.ai/achiever/Aakash-B-GaEWpI",
  },
  {
    profilePicURL: "62567c723c8eff001aa26bf5",
    name: "Aakash B",
    role: "Wells Fargo, Program Associate",
    bio: "My name is Jay Prakash Bind completed my B. Tech Computer Science and Engineering from Bundelkhand University, Jhansi. I recently get placed in Wells Fargo for the position of Program Associate on 20 LPA package. I am very thankful to shudhanshu sir, krish naik sir, sunny sir and whole ineuron team who help a lot. Content from ineuron is amazing that are very helpful for getting this offer.",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/jayprakashbind",
    },
    link: "https://halloffame.ineuron.ai/achiever/Jay-Prakash-Bind-RgPBGZ",
  },
];
