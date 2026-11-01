import dotenv from "dotenv";
dotenv.config();
// const config = {
//     PORT:process.env.PORT,
//     MONGO_URI:process.env.MONGO_URI
// }
// export default config;

const _config = {
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  RAZORPAY_KEY_ID: process.env.RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET: process.env.RAZORPAY_KEY_SECRET,
  RAZORPAY_WEBHOOK_SECRET: process.env.RAZORPAY_WEBHOOK_SECRET,
};
export default Object.freeze(_config);
