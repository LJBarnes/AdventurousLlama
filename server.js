const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path');
const passport = require("passport");

const users = require("./routes/api/users");
const ticketMaster = require("./routes/api/ticket")
require('dotenv').config()

const app = express();



// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// DB Config
// const db = require("./config/keys").mongoURI;
const db = process.env.mongoURI
console.log(db)
// Connect to MongoDB
mongoose
    .connect(
        process.env.mongoURI,
        { useUnifiedTopology: true, useNewUrlParser: true
          }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/ticket", ticketMaster);


// Serve static assets if in production
if(process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000; 
// process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));