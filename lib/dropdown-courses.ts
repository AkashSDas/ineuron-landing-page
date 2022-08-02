export type DropDownCourseType = {
  mainCourse: string;
  subCourses: string[];
};

export const dropdownCourses: DropDownCourseType[] = [
  {
    mainCourse: "Data Science",
    subCourses: ["Data Science", "Python", "Data Cleaning", "Data Analysis"],
  },
  {
    mainCourse: "Web Development",
    subCourses: ["HTML", "CSS", "JavaScript", "React", "NodeJS"],
  },
  {
    mainCourse: "Mobile Development",
    subCourses: ["Android", "iOS", "React Native"],
  },
  {
    mainCourse: "Devops",
    subCourses: ["Devops", "Linux", "Docker", "Git"],
  },
  {
    mainCourse: "Iot",
    subCourses: ["Iot", "Arduino", "Raspberry Pi"],
  },
  {
    mainCourse: "Programming",
    subCourses: [
      "C",
      "C++",
      "C#",
      "Java",
      "Python",
      "JavaScript",
      "TypeScript",
      "PHP",
      "Ruby",
      "Swift",
    ],
  },
];
