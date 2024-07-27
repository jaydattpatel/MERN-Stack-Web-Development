import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
    trim: true,
    minLength: [3, "Name must 3 to 25 chars\n"],
    maxLength: [25, "Name must 3 to 25 chars\n"],
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Email is required\n"],
    match: [/.+\@.+\../, "Please enter a valid email\n"],
  },
  mobile: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Mobile number is required\n"],
    match: [/^([0-9]{10,10})$/, "Please enter a valid mobile number\n"],
  },
  password: {
    type: String,
    required: [true, "Password is required\n"],
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      },
      message:
        "\nPassword must : \nContains at least one lowercase letter.\nContains at least one uppercase letter.\nContains at least one digit.\nContains at least one special character from the set @$!%*?&.\nIt is at least 8 characters long.\n",
    },
  },
  type: {
    type: String,
    lowercase: true,
    trim: true,
    enum: {
      values: ["admin", "customer", "seller"],
      message: `Invalid type : "admin", "customer", "seller"\n`,
    },
    default: "customer",
  },
});

//adding pre and post middlewares for schemas
UserSchema.post("validate", async (doc) => {
  const salt = 12;
  const passwordHashed = await bcrypt.hash(doc.password, salt);
  doc.password = passwordHashed;
});

UserSchema.post("save", async (doc) => {
  console.log("saved:", doc);
});

const collection = "users";

const UserModel = mongoose.model(collection, UserSchema);

export default UserModel;
