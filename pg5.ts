function run() {
  const user1 = { name: "Madam", age: 30, city: "Chennai" };
  const user2 = { age: 31, profession: "Developer", country: "India" };

  const mergedUser = { ...user1, ...user2 };

  const { name, age, ...others } = mergedUser;

  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
  console.log("Other Details:", others);
}

run();

