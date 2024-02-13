const Form = require("../model/form");
const multer = require("multer");
const path = require("path");
const { handleAsync } = require("../utils/errorHandler");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "profilePhoto"); // Specify the destination folder where the uploaded files will be stored
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix + fileExtension); // Set the file name to be unique
  },
});

const upload = multer({ storage });

// POST controller for creating a new form entry
const createForm = [
  upload.single("profilePhoto"), // Specify the field name used for the education file
  handleAsync(async (req, res) => {
    try {
      const {
        firstName,
        middleName,
        lastName,
        city,
        subCity,
        district,
        houseNumber,
        phoneNumber,
        motherName,
        marriageStatus,
        spouseName,
        spousePhoneNumber,
        spouseMotherName,
        spouseCity,
        spouseSubCity,
        spouseDistrict,
        spouseHouseNumber,
        previousHouseStatus,
        Type,
        jobStatus,
        physicalStatus,
        monthlyIncome,
        familySize,
        houseBefore,
        referal,
      } = req.body;

      // Verify data format
      if (!firstName || !lastName) {
        // Log data format error
        console.error("Invalid data format:", req.body);
        return res.status(400).json({ error: "Invalid data format." });
      }

      // Generate a 10-digit unique ID
      const uniqueID = Math.floor(
        1000000000 + Math.random() * 9000000000
      ).toString();

      // Log received form data
      console.log("Received form data:", req.body);

      // Create new form entry
      const newForm = new Form({
        profilePhoto: req.file?.filename,
        uniqueID,
        firstName,
        middleName,
        lastName,
        city,
        subCity,
        district,
        houseNumber,
        phoneNumber,
        motherName,
        marriageStatus,
        spouseName,
        spousePhoneNumber,
        spouseMotherName,
        spouseCity,
        spouseSubCity,
        spouseDistrict,
        spouseHouseNumber,
        previousHouseStatus,
        Type,
        jobStatus,
        physicalStatus,
        monthlyIncome,
        familySize,
        houseBefore,
        referal,
      });

      // Save the form entry to the database
      await newForm.save();

      res.status(201).json({
        success: true,
        message: "Form created successfully.",
        data: newForm,
      });
    } catch (error) {
      // Log and handle any errors
      console.error("Error submitting form:", error.message);
      res.status(500).json({ error: "Error submitting form." });
    }
  }),
];

// GET controller for retrieving all form entries
const getForms = handleAsync(async (req, res) => {
  const forms = await Form.find().sort({ createdAt: -1 });

  res.status(200).json({ success: true, count: forms.length, data: forms });
});

module.exports = {
  createForm,
  upload,
  getForms,
};
