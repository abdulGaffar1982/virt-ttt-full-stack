type Person = {
  name: string;
  birthdate: string; 
};

const people: Person[] = [
  { name: "Kiran", birthdate: "1995-06-21" },
  { name: "Meena", birthdate: "1990-12-05" },
  { name: "Ravi", birthdate: "1988-06-21" },
  { name: "Sneha", birthdate: "2000-01-15" },
];

const getBirthdayMessages = (personList: Person[]): string[] => {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth(); 

  const messages = personList
    .map((person) => {
      const birthDate = new Date(person.birthdate);
      const birthDay = birthDate.getDate();
      const birthMonth = birthDate.getMonth();

      if (birthDay === currentDay && birthMonth === currentMonth) {
        return `Today is ${person.name}'s birthday!`;
      }

      return null;
    })
    .filter((msg): msg is string => msg !== null);

  if (messages.length === 0) {
    return ["No birthdays today."];
  }

  return messages;
};

const birthdayMessages = getBirthdayMessages(people);

birthdayMessages.forEach((msg) => console.log(msg));
