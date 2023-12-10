var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

var contacts = [];

var newContactId = 1;

router.get("/api/getContacts", function (req, res) {
    const term = (req.query.term || "").toUpperCase();

    const filteredContacts = term.length === 0
        ? contacts
        : contacts.filter((c) => {
            return c.firstName.toUpperCase().includes(term) ||
                c.lastName.toUpperCase().includes(term) ||
                c.phoneNumber.toUpperCase().includes(term);
        });

    res.send(filteredContacts);
});

router.post("/api/createContact/", function (req, res) {
    const contact = req.body.contact;

    if (!contact) {
        res.send({
            success: false,
            message: "Request are incorrect!"
        });
        return;
    }

    if (!contact.firstName || !contact.lastName || !contact.phoneNumber) {
        res.send({
            success: false,
            message: "Not all fields are filled!"
        });
        return;
    }

    if (contacts.some((c) => {
        return c.phoneNumber.toUpperCase() === contact.phoneNumber.toUpperCase();
    })) {
        res.send({
            success: false,
            message: "Contact with this number is exist!"
        });
        return;
    }

    contacts.push({
        id: newContactId,
        firstName: contact.firstName,
        lastName: contact.lastName,
        phoneNumber: contact.phoneNumber
    });

    newContactId++;

    res.send({
        success: true,
        message: null
    });
});

router.post("/api/deleteContact/", function (req, res) {
    const id = req.body.id;

    contacts = contacts.filter(function (contact) {
        return contact.id !== id;
    });

    res.send({
        success: true,
        message: null
    });
});

module.exports = router;
