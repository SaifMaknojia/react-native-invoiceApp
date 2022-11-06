const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
    },
    clientAddress: {
      street: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      postCode: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
    },
    invoices: [mongoose.SchemaTypes.ObjectId],
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);

module.exports = User;
