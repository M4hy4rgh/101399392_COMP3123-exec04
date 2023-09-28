var express = require("express"); // include express.js

// define server port
const SERVER_PORT = 8081;

// create express app
var app = express();

// sending the response using GET method to user for the defualt page with
// the URL: http://localhost/
app.get("/", (req, res) => {
    res.status(200).send("<h1>Hello & Welcome to the Home Page</h1>");
});

// sending the response using the Get Method to the user with
// the URL: http://localhost:8081/hello
app.get("/hello", (req, res) => {
    res.status(200).send("<h1>Hello Express JS</h1>");
});

// sending the response using the Get Method and Query Parameter to the user with
// the URL: http://localhost:8081/user?:fname=mahyar&:lname=Ghasemi-Khah
app.get("/user", (req, res) => {

    if (req.query.fname == undefined || req.query.lname == undefined) {
        res.status(400).send("Please send both fname and lname parameters into the request");
    } else {
        res.status(200).json(req.query);
    }
});

// sending the response using the POST Method and Path Parameter to the user with
// the URL: http://localhost:8081/user/mahyar/ghasemi%20Khah
app.post("/user/:fname/:lname", (req, res) => {
  res.status(200).send(JSON.stringify(req.params));
});

// running the server on the port given
app.listen(SERVER_PORT, () => {
  console.log(`Server running at http://localhost:${SERVER_PORT}/`);
});
