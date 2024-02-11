const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    profilePhoto: {
      type: String
    },
    uniqueID: {
      type: String,
      trim: true,
    },
    firstName: {
      type: String,
      required: [true, "firstName is required"],
      trim: true,
    },
    middleName: {
      type: String,
      required: [true, "middleName is required"],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, "lastName is required"],
      trim: true,
    },
    city: {
      type: String,
      required: [true, "city is required"],
      trim: true,
    },
    subCity: {
      type: String,
      required: [true, "subCity is required"],
    },
    
    district: {
      type: String,
      required: [true, "district is required"],
    },
    houseNumber: {
      type: String,
      required: [true, "houseNumber is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "phoneNumber is required"],
    },
    motherName: {
      type: String,
      required: [true, "motherName is required"],
    },
    marriageStatus: {
      type: String,
      required: [true, "marriageStatus is required"],
    },
    spouseName: {
      type: String,
      required: [false],
    },
    spousePhoneNumber: {
      type: String,
      required: [false],
    },
    spouseMotherName: {
      type: String,
      required: [false],
    },
    spouseCity: {
      type: String,
      required: [false],
    },
    spouseSubCity: {
      type: String,
      required: [false],
    },
    spouseDestrict: {
      type: String,
      required: [false],
    },
    spouseHouseNumber: {
      type: String,
      required: [false],
    },
    previousHouseStatus: {
      type: String,
      required: [true, "previousHouseStatus is required"],
    },
    Type: {
      type: String,
      required: [true, "Type is required"],
    },
    jobStatus: {
      type: String,
      required: [true, "jobStatus is required"],
    },
    physicalStatus: {
      type: String,
      required: [true, "physicalStatus is required"],
    },
    monthlyIncome: {
      type: String,
      required: [true, "monthlyIncome is required"],
    },
    familySize: {
      type: String,
      required: [true, "familySize is required"],
    },
    houseBefore: {
      type: String,
      required: [true, "houseBefore is required"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Form = mongoose.model("RegestrationForm", formSchema);

module.exports = Form;
