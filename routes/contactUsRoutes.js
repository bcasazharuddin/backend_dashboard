const express = require("express");
const router = express.Router();
const contactController = require("../controller/contactUs/contactUs.js")

router.post('/',contactController.contactSave)
router.get('/',contactController.contactGet)

module.exports = router;


