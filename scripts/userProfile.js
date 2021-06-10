var date = new Date();

username = localStorage.getItem("username");
email = localStorage.getItem("email");
password = localStorage.getItem("password");

document.getElementById("nameDisplay").innerHTML = "NAME: " + username;
document.getElementById("emailDisplay").innerHTML = "EMAIL: " + email;
document.getElementById("passwordDisplay").innerHTML = "PASSWORD: " + password;

console.log("USERNAME : " + username + "\nEMAIL : " + email + "\nPASSWORD : " + password + "\n\n" + date);

document.getElementById("date").innerHTML = new Date();

function reDirect() {
    window.location = "../index.html";
    console.log("Back to home page");
}