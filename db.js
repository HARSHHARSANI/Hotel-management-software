import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  let cachedDB = null;

  if (cachedDB) {
    console.log("Connected DB");
    return cachedDB;
  } else {
    const newDB = await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected DB");
    cachedDB = newDB;
    return newDB;
  }
};

export default connectDB;
