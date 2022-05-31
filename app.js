const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

const toolRoutes = require("./routes/bToolsRoutes");

const app = express();
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
  console.log("DB connection check!");
});

app.use(bodyParser.json());

//CORS handler
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET");
  next();
});

app.use("/api/", toolRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server flight check complete!`);
});
