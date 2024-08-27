const mongoose = require("mongoose");
require("dotenv").config();
function Connected_to_db() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("Connected To Mongodb Successfully");
  });
}
module.exports = Connected_to_db;
