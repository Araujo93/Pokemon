import mongoose from "mongoose";
require("dotenv").config();

mongoose.connect(process.env.DB_STRING);

mongoose.connection.on("connected", () => {
  console.log("connected to MongoDb");
});
mongoose.connection.on("error", () => {
  console.log("Error connecting to MongoDb");
});

export default mongoose;
