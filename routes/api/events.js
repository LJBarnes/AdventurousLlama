const express = require("express");
const router = express.Router();
const User = require("../../models/user");
const jwt = require("jsonwebtoken");

// const newEvent = new User({
//     event: [this.state.currentEvent.name]
// })
router.post("/:id", (req,res) => {
    User.findById(req.params.id, function(err, user){ user.events = [req.body.newEvent]})
})