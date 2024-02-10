const express = require("express");
const router = express.Router();
const formController = require("../controller/form");

// POST route for creating a new form entry
router.post(
  "/forms",
  formController.upload.single("profilePhoto"),
  formController.createForm
);

// GET route for retrieving all form entries
router.get("/forms", formController.getForms);

module.exports = router;
