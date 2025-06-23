function parseStudentData(): void {
  const csvLines: (string | string[])[][] = [
    ["  Asha  ", "Math", ["Science", "English"]],
    ["Ravi", ["History", "Math"]],
    ["  Meena ", "Biology", ["Chemistry"]],
    ["Arun", "Physics"],
    ["  Sneha"]
  ];

  try {
    const grouped = Object.fromEntries(
      csvLines.map((line): [string, string[]] => {
        const [rawName, ...courses] = line;
        const name = (rawName as string).trim();
        const flatCourses = courses.flat().map(item => item as string);
        return [name, flatCourses];
      })
    );

    console.log("Grouped Student Courses:");
    console.log(grouped);
  } catch {
    console.log("An error occurred while processing student data.");
  }
}

parseStudentData();
