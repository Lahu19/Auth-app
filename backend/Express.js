// Importing required modules
let expressApp = require("express");
let mongooseClient = require("mongoose");
let jsonParser = require("body-parser");
let corsMiddleware = require("cors");
let userRecords = require("./models/registeredUsers");

// Initializing express application
let server = expressApp();
server.use(corsMiddleware());
server.use(jsonParser.json());
server.use(jsonParser.urlencoded({ extended: true }));

// MongoDB connection
mongooseClient.connect("mongodb://127.0.0.1:27017/assignment");
mongooseClient.connection
    .once("open", () => { console.log("Connected to DB....."); })
    .on("error", () => { console.log("Problem connecting to DB ..!!!!!"); });

// Handling user registration
server.post("/register", (req, res) => {
    userRecords.findOne({ email: req.body.email })
        .then((existingUser) => {
            if (existingUser !== null) {
                res.json("Email already registered..");
            } else {
                let newUser = new userRecords(req.body);
                newUser.save()
                    .then(() => { res.json("Input stored in DB successfully..."); })
                    .catch(() => res.json("Data could not be saved, problem during save..."));
            }
        })
        .catch(() => {
            res.json("Registration problem...");
        });
});

// Handling user login
server.post("/login", (req, res) => {
    userRecords.findOne({ email: req.body.email })
        .then((user) => {
            if (user.cnfPassword === req.body.password) {
                res.json({ "status": "success", "id": user._id });
            } else {
                res.json({ "status": "fail" });
            }
        })
        .catch(() => { res.json({ "status": "noUser" }); });
});

// Fetching user data for the Dashboard component
server.get("/user-list", (req, res) => {
    userRecords.find()
        .then((users) => {
            res.send(users);
        });
});

// Starting the server
server.listen(4001, () => {
    console.log("Server listening at 4001....");
});
