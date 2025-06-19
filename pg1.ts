let userName: string = "John Doe";

let userProfile = {
    name: userName,
    role: "Guest"
};

{
       userProfile.role = "Admin";

    
    console.log("Inside block - Updated Role:", userProfile.role);
}


console.log("After block - User Name:", userProfile.name);
console.log("After block - Role:", userProfile.role);

