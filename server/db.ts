import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://sean:araujo93@cluster0.ngetw.mongodb.net/pokemon?retryWrites=true&w=majority"
);

mongoose.connection.on("connected", () => {
  console.log("connected to MongoDb");
});
mongoose.connection.on("error", () => {
  console.log("Error connecting to MongoDb");
});

export default mongoose;
