const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const FormRoutes = require("./Routes/form");
const path = require("path");
const { errorHandler } = require("./utils/errorHandler");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb://0.0.0.0:27017/AFFORDABLEHOUSE")
  .then(() => console.log(`MongoDB connected `))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "profilePhoto")));

app.use("/", FormRoutes);

// Error handler
app.use(errorHandler);
// Start the server
app.listen(4000, () => {
  console.log(`Server is running on port 4000`);
});
