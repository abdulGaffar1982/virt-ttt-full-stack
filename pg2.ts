class User {
    private password: string;
    private username: string;

    constructor(username: string) {
        this.username = username;
        this.password = "";
    }

        setPassword(newPassword: string): void {
        if (newPassword.length < 6) {
            console.log("Password must be at least 6 characters long.");
            return;
        }
        this.password = newPassword;
        console.log(`Password set for user ${this.username}`);
    }

    
    validatePassword(inputPassword: string): boolean {
        return this.password === inputPassword;
    }

    getUsername(): string {
        return this.username;
    }

    
    protected forcePasswordReset(newPassword: string): void {
        this.password = newPassword;
    }
}


class Admin extends User {
    constructor(username: string) {
        super(username);
    }

    resetUserPassword(user: User, newPassword: string): void {
        // Call the internal protected method
        if (user instanceof User) {
            (user as Admin).forcePasswordReset(newPassword);
            console.log(`Admin ${this.getUsername()} reset password for ${user.getUsername()}`);
        }
    }
}


const user1 = new User("Abdul");
user1.setPassword("secret123");

console.log("Is password correct?", user1.validatePassword("secret123")); 
console.log("Is password correct?", user1.validatePassword("wrong"));     

const admin = new Admin("admin1");
admin.resetUserPassword(user1, "newpass456");

console.log("After reset, is password correct?", user1.validatePassword("newpass456"));  

