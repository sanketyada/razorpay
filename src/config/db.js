import mongoose from "mongoose";
import config from "./config.js";

const ConnectDB = async function () {
  try {
    await mongoose.connect(`${config.MONGO_URI}`);
    console.log("DB Connected.");
  } catch (error) {
    console.log(error.message)
  }
};

export default ConnectDB;
