import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
    console.log("Database:",mongoose.connection.db.databaseName);
    const collections= await mongoose.connection.db.listCollections().toArray();
    console.log("Collections:",collections);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;