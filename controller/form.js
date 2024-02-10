const Form = require("../model/form");
const multer = require("multer");
const { handleAsync } = require("../utils/errorHandler");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./profilePhoto");
  },
  filename: function (res, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

// POST controller for creating a new form entry
const createForm = handleAsync(async (req, res) => {
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
    montheIncome,
    familySize,
    houseBefore,
  } = req.body;

  // Generate a 10-digit unique ID
  const uniqueID = Math.floor(
    1000000000 + Math.random() * 9000000000
  ).toString();

  // Create new form entry
  const newForm = new Form({
    profilePhoto: req.file.path, // assuming profilePhoto is uploaded as a file
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
    montheIncome,
    familySize,
    houseBefore,
  });

  // Save the form entry to the database
  await newForm.save();

  res.status(201).json({
    success: true,
    message: "Form created successfully.",
    data: newForm,
  });
});

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
