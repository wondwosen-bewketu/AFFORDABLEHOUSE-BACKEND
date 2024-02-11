const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const FormRoutes = require("./Routes/form");
const path = require("path");
require("dotenv").config();
const { connectToDatabase } = require("./database/db");
const { errorHandler } = require("./utils/errorHandler");

const app = express();

// Connect to MongoDB
connectToDatabase();

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "profilePhoto")));

app.use("/", FormRoutes);

// Error handler
app.use(errorHandler);
// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
