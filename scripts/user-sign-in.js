function signIn() {
    username = document.getElementById("name").value;
    user_email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if (username, user_email, password == "") {
        console.error("Please enter valid details");
        document.getElementById("er").innerHTML = "<i class='fa fa-warning'>&nbsp;</i>Please enter a valid username, email and password<br>";
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("email", user_email);
        localStorage.setItem("password", password);
        console.log("Sign In User Successfully!");
        window.location = "userProfile.html";
    }
}

function reDirect() {
    window.location = "/index.html";
}