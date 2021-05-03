import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    min: 3,
    max: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    min: 6,
    max: 100,
  },
  department: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  skills: {
    type: Map,
    of: String,
  }
}, {timestamps: true});

var User = mongoose.model("user", userSchema);

export default User;