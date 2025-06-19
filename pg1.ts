// Declare a variable to store the user's name
let userName: string = "John Doe";

// Define a user profile object using the userName
let userProfile = {
    name: userName,
    role: "Guest"
};

// Simulate a block where the role is updated
{
    // Update the role inside this block
    userProfile.role = "Admin";

    // Log inside block to show changes
    console.log("Inside block - Updated Role:", userProfile.role);
}

// After the block, confirm original name is still the same
console.log("After block - User Name:", userProfile.name);
console.log("After block - Role:", userProfile.role);

