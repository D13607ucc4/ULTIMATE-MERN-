import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://admin:admin123@localhost:27017/mern?authSource=admin",
    );

    console.log(">>> DB is connected");
  } catch (error) {
    console.log("DB error is:", error);
  }
};
