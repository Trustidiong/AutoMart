//document.querySelector('#registration').addEventListener('submit', register);

// AN OBJECT TO HOLD ALL USERS
let users = [];

//declare variables
let fname = document.getElementById("registrationForm").elements["fname"].value;
let lname = document.getElementById("registrationForm").elements["lname"].value;
let email = document.getElementById("registrationForm").elements["email"].value;
let password = document.getElementById("registrationForm").elements["password"].value;
let address = document.getElementById("registrationForm").elements["address"].value;

//assign variables to 'users' array above
users = [fname, lname, email, password, address];

//LOGIN FUNCTION
login = () => {

    let Username = document.getElementById("signIn").elements["Username"].value;
    let Password = document.getElementById("signIn").elements["Password"].value;

    // Check if its admin log in
    if ((Username === "admin") && (Password === "admin")) {
        window.location.href(adminPanel.html);
    }

    //make sure username field is not empty, and exists and is correct
    if ((email !== "") && (email === users[2]))

    //validates password
        if ((password !== "") && (password === users[3])) {

            //redirects window if login successful
            window.location.assign(browse.html);
            document.getElementByName("choice").innerHTML = "Welcome, " + users.Username;
        }

        //if login failed...
        else {
            window.location.assign(index.html);
            document.getElementByName("response").innerHTML = "Username or Password incorrect";
        }
}

//FUNCTION TO HANDLE USER REGISTRATION
register = () => {

    //redirects if login successful
    window.location.assign(browse.html);
    document.getElementByName("choice").innerHTML = "Welcome, " + users[0];

    //if missing field is found
    if (users.length() < 5) {
        document.getElementByName("response").innerHTML = "All fields are required";
    }


}

//function to handle poting of adverts
postAd = () => {

}

//function to handle deleting of adverts
Delete = () => {

}