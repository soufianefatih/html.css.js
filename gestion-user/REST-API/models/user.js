const { Schema, model } = require("mongoose");
const {
  handleMongooseError,
  signToken,
  comparePassword,
  hashPassword,
} = require("../helpers");

const userSchema = new Schema(
  {
    name: {
      type: String,
      default: "User",
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
 
    accessToken: {
      type: String,
      default: null,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.methods.comparePassword = comparePassword;

userSchema.methods.signToken = signToken;

userSchema.pre("save", hashPassword);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

module.exports = User;
