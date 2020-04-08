const express = require("express");
const router = express.Router();
const axios = require("axios");
const User = require("../../models/user");


const BASEURL = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=";
const partTwo = "&radius=50&unit=miles";
const APIKEY = process.env.REACT_APP_KEY
router.post("/", (req, res) => {
    const url = BASEURL + APIKEY + '&city=' + req.body.query + partTwo

    axios.get(url)
        .then(({ data }) => {

            res.json(data)
        })
        .catch(err => { if (err) throw err })
});



module.exports = router