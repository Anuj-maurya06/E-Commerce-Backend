   

   import mongoose from "mongoose";

const supportSchema = new mongoose.Schema({
  type: { type: String },
  value: { type: String }
});

export default mongoose.model("Support", supportSchema);
