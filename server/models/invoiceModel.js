const mongoose = require("mongoose");

const invoices = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    invoiceNumber: {
      type: String,
      required: false,
    },
    createdAt: {
      type: String,
      required: true,
    },
    paymentDue: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    paymentTerms: {
      type: Number,
      required: true,
    },
    clientName: {
      type: String,
      required: true,
    },
    clientEmail: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    senderAddress: {
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
    items: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: String,
          required: true,
        },
        price: {
          type: String,
          required: true,
        },
        total: {
          type: Number,
          required: false,
        },
      },
    ],
    total: {
      type: Number,
    },
  },

  { collection: "invoice" }
);

const INVOICES = mongoose.model("invoice", invoices);

module.exports = INVOICES;
