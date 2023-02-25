const fs = require('fs')
let express = require('express');
const router = express.Router();
const path = require('path');

// CREATE Contact
router.post("/create-contact", (req, res, next) => {
    const { name, email, address } = req.body
    fs.appendFile(path.join(__dirname, "contacts.txt"), `{"name": "${name}", "email": "${email}", "address": "${address}"}\n`, (err) => {
        if (err) {
            return next(err);
        } else {
            console.log("created new contact!");
            res.end();
        }
    })
});

// GET contacts
router.get("/all-contacts", (req, res, next) => {
    fs.readFile(path.join(__dirname, "contacts.txt"), "utf8", (err, data) => {
        if (err) {
            return next(err);
        } else {
            const contacts = data
            return res.status(200).json(contacts);
        }
    })
})

module.exports = router;
