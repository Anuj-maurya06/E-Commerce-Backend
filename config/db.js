import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // agar already connected hai to dubara connect nahi karega
    if (mongoose.connection.readyState === 1) {
      console.log("MongoDB already connected ✅");
      return;
    }

    // connect
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "ecommerce" // optional, apni DB ka naam
    });

    console.log(`MongoDB Connected: ${conn.connection.host} ✅`);
  } catch (error) {
    console.error("MongoDB connection failed ❌:", error.message);
    process.exit(1); // agar DB fail ho to server stop
  }
};

export default connectDB;