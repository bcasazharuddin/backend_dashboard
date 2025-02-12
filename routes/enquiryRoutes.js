const express = require("express");
const router = express.Router();
const enquiryController = require("../controller/enquiry/enquiry")

router.post('/',enquiryController.enquirySave)
router.get('/',enquiryController.enquiryGet)

module.exports = router;
