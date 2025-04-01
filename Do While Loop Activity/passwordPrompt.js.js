const correct_password = "correct_password";
let password;

do {
    password = prompt("Enter your password:");
    if (password !== correct_password) {
        console.log ("Incorrect, try again.");
    }
} while (password !== correct_password);

console.log("Access granted.");