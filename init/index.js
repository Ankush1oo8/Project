require('dotenv').config(); // Assuming you're using dotenv to manage environment variables

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const initdata = require("./data.js");

// Ensure your connection string is stored securely, e.g., in an environment variable
const connectionString =  process.env.ATLASDB_URL;

async function main() {
  try {
    await mongoose.connect(connectionString);
    console.log("connection successful");
    await initDB();
  } catch (err) {
    console.error(err);
  }
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    initdata.data = initdata.data.map((obj) => ({
      ...obj,
      owner: "66acc7279442c58ffb73545b", // Ensure this value is correct and secure
    }));
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
  } catch (error) {
    console.error("Failed to initialize DB:", error);
  }
};

main();
