type Student = {
  name: string;
  grades?: number[];
};

const students: Student[] = [
  { name: "Ananya", grades: [78, 85, 90] },
  { name: "Rahul" },
  { name: "Priya", grades: [68, 74] },
  { name: "Arjun", grades: [] },
];

const getMessages = (studentList: Student[]): string[] =>
  studentList.map((student) => {
    const { name, grades } = student;

    if (grades?.length) {
      const total = grades.reduce((sum, grade) => sum + grade, 0);
      const average = total / grades.length;
      return `Student ${name} has an average grade of ${average}`;
    }

    return `Student ${name} has no grades.`;
  });

const messages = getMessages(students);

messages.forEach((msg) => console.log(msg));
