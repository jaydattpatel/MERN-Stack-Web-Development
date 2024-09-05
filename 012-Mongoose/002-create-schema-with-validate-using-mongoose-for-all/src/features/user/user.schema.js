import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    uppercase: true,
    trim: true,
    minLength: [3, "Name must greater than 3 characters"],
    maxLength: [25, "Name must less than 25 characters"],
    required: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Email is required"],
    match: [/.+\@.+\../, "Please enter a valid email"],
  },
  mobile: {
    type: String,
    trim: true,
    unique: true,
    required: [true, "Mobile number is required"],
    match: [/^([0-9]{10,10})$/, "Please enter a valid mobile number"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
          value
        );
      },
      message:
        "\nPassword must : Contains at least one lowercase letter.\nContains at least one uppercase letter.\nContains at least one digit.\nContains at least one special character from the set @$!%*?&.\nIt is at least 8 characters long.\n",
    },
  },
  type: {
    type: String,
    enum: ["Admin", "Customer", "Seller"],
    default: "Customer",
  },
});

const collection = "users";

const UserModel = mongoose.model(collection, UserSchema);

export default UserModel;
